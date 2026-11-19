export const JSON_INPUT_LIMIT = 1024 * 1024;
export const JSON_OUTPUT_LIMIT = 4 * 1024 * 1024;
export const JSON_TOKEN_LIMIT = 100000;
export const JSON_DEPTH_LIMIT = 256;
export type JsonIndent = '2' | '4' | 'tab';
export type JsonFormatMode = 'pretty' | 'minify';
type TokenType = '{' | '}' | '[' | ']' | ':' | ',' | 'string' | 'number' | 'boolean' | 'null';
export interface JsonToken { type: TokenType; raw: string; position: number; }
export interface JsonLocation { position: number; line: number; column: number; }
export interface JsonDuplicate extends JsonLocation { key: string; }
export interface JsonStatistics { root: string; objects: number; arrays: number; keys: number; strings: number; numbers: number; booleans: number; nulls: number; depth: number; }
export interface JsonAnalysis { tokens: JsonToken[]; stats: JsonStatistics; inputBytes: number; duplicateCount: number; duplicates: JsonDuplicate[]; }
export interface JsonFormatReport { analysis: JsonAnalysis; output: string; outputBytes: number; lines: number; mode: JsonFormatMode; indent: JsonIndent; }

export function jsonLocation(input: string, position: number): JsonLocation {
  position = Math.max(0, Math.min(input.length, position));
  let line = 1, column = 1;
  for (let i = 0; i < position; i++) {
    if (input[i] === '\r') { line++; column = 1; if (input[i + 1] === '\n' && i + 1 < position) i++; }
    else if (input[i] === '\n') { line++; column = 1; }
    else column++;
  }
  return { position, line, column };
}
export class JsonFormatError extends Error {
  readonly position: number;
  readonly line: number;
  readonly column: number;
  constructor(message: string, input: string, position: number, readonly kind: 'syntax' | 'limit' = 'syntax') {
    super(message); this.name = 'JsonFormatError';
    const location = jsonLocation(input, position); this.position = location.position; this.line = location.line; this.column = location.column;
  }
}
export function analyzeJson(input: string): JsonAnalysis {
  if (typeof input !== 'string') throw new Error('Enter JSON text.');
  if (input.length > JSON_INPUT_LIMIT) throw new JsonFormatError('Input exceeds the 1 MiB limit.', input, 0, 'limit');
  const inputBytes = new TextEncoder().encode(input).length;
  if (inputBytes > JSON_INPUT_LIMIT) throw new JsonFormatError('Input exceeds the 1 MiB UTF-8 limit.', input, 0, 'limit');
  const fail = (message: string, position: number): never => { throw new JsonFormatError(message, input, position); };
  const tokens: JsonToken[] = [];
  let i = 0;
  while (i < input.length) {
    const char = input[i];
    if (char === ' ' || char === '\t' || char === '\r' || char === '\n') { i++; continue; }
    if (tokens.length >= JSON_TOKEN_LIMIT) throw new JsonFormatError('This JSON exceeds the 100,000-token limit.', input, i, 'limit');
    const start = i;
    let type: TokenType;
    if ('{}[]:,'.includes(char)) { type = char as TokenType; i++; }
    else if (char === '"') {
      type = 'string'; i++;
      let closed = false;
      while (i < input.length) {
        const current = input[i];
        if (current === '"') { i++; closed = true; break; }
        if (input.charCodeAt(i) < 0x20) fail('Unescaped control character in a string. Use an escape such as \\n or \\t.', i);
        if (current === '\\') {
          i++;
          if (i >= input.length) fail('Unfinished escape sequence in a string.', i);
          if (input[i] === 'u') {
            for (let n = 1; n <= 4; n++) if (!/[0-9a-fA-F]/.test(input[i + n] || '')) fail('A Unicode escape needs exactly four hexadecimal digits.', Math.min(i + n, input.length));
            i += 5;
          } else {
            if (!'"\\/bfnrt'.includes(input[i])) fail('Invalid string escape. Use a JSON escape such as \\" or \\u0041.', i);
            i++;
          }
        } else i++;
      }
      if (!closed) fail('Unterminated string. Add a closing double quote.', input.length);
    } else if (char === '-' || /[0-9]/.test(char)) {
      const match = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/.exec(input.slice(i));
      if (!match) fail('Invalid JSON number. Use a digit after the minus sign.', i);
      type = 'number'; i += match![0].length;
      if (i < input.length && /[0-9.eE+-]/.test(input[i])) fail('Invalid JSON number. Leading zeros and incomplete fractions or exponents are not allowed.', i);
    } else if (input.startsWith('true', i) || input.startsWith('false', i)) { type = 'boolean'; i += input.startsWith('true', i) ? 4 : 5; }
    else if (input.startsWith('null', i)) { type = 'null'; i += 4; }
    else if (char === '\uFEFF') fail('Remove the byte-order mark (BOM) from the pasted JSON.', i);
    else if (char === '/') fail('Comments are not allowed in standard JSON.', i);
    else if (char === "'") fail('JSON strings and property names must use double quotes.', i);
    else fail('Unexpected character. JSON accepts objects, arrays, strings, numbers, true, false and null.', i);
    tokens.push({ type: type!, raw: input.slice(start, i), position: start });
  }
  if (!tokens.length) fail('Enter JSON text to validate or format.', input.length);
  const root = tokens[0]?.type;
  const stats: JsonStatistics = { root: root === '{' ? 'object' : root === '[' ? 'array' : root || '', objects: 0, arrays: 0, keys: 0, strings: 0, numbers: 0, booleans: 0, nulls: 0, depth: 0 };
  let cursor = 0, duplicateCount = 0;
  const duplicates: JsonDuplicate[] = [];
  const position = (): number => tokens[cursor]?.position ?? input.length;
  const requireToken = (expected: TokenType, message: string): void => { if (tokens[cursor]?.type !== expected) fail(message, position()); cursor++; };
  const value = (depth: number): void => {
    const token = tokens[cursor];
    if (!token) fail('Expected a JSON value before the end of the input.', input.length);
    if (token.type === '{' || token.type === '[') {
      const object = token.type === '{', close = object ? '}' : ']';
      if (depth + 1 > JSON_DEPTH_LIMIT) throw new JsonFormatError('Nesting exceeds the 256-level limit.', input, token.position, 'limit');
      stats.depth = Math.max(stats.depth, depth + 1); if (object) stats.objects++; else stats.arrays++;
      cursor++;
      if (tokens[cursor]?.type === close) { cursor++; return; }
      const keys = new Set<string>();
      while (cursor < tokens.length) {
        if (object) {
          const key = tokens[cursor];
          if (key?.type !== 'string') fail('Expected a double-quoted property name.', position());
          const decoded = JSON.parse(key.raw) as string;
          if (keys.has(decoded)) {
            duplicateCount++;
            if (duplicates.length < 5) duplicates.push({ key: decoded.slice(0, 100), ...jsonLocation(input, key.position) });
          }
          keys.add(decoded); stats.keys++; cursor++;
          requireToken(':', 'Expected a colon after the property name.');
        }
        value(depth + 1);
        if (tokens[cursor]?.type === close) { cursor++; return; }
        requireToken(',', object ? 'Expected a comma or closing brace after the value.' : 'Expected a comma or closing bracket after the value.');
        if (tokens[cursor]?.type === close) fail('Trailing commas are not allowed in standard JSON.', position());
      }
      fail(object ? 'Expected a closing brace.' : 'Expected a closing bracket.', input.length);
    } else {
      if (token.type === 'string') stats.strings++;
      else if (token.type === 'number') stats.numbers++;
      else if (token.type === 'boolean') stats.booleans++;
      else if (token.type === 'null') stats.nulls++;
      else fail('Expected a JSON value.', token.position);
      cursor++;
    }
  };
  value(0);
  if (cursor !== tokens.length) fail('Unexpected content after the root JSON value. Use one root value.', position());
  return { tokens, stats, inputBytes, duplicateCount, duplicates };
}
export function renderJson(analysis: JsonAnalysis, mode: JsonFormatMode = 'pretty', indent: JsonIndent = '2'): JsonFormatReport {
  if (!['pretty', 'minify'].includes(mode) || !['2', '4', 'tab'].includes(indent)) throw new Error('Choose pretty-print or minify, and a supported indentation.');
  const unit = indent === 'tab' ? '\t' : ' '.repeat(Number(indent)), pretty = mode === 'pretty';
  const pieces: string[] = [];
  let length = 0, depth = 0;
  const append = (text: string): void => { length += text.length; if (length > JSON_OUTPUT_LIMIT) throw new Error('Formatted output exceeds 4 MiB. Choose minify or use a smaller input.'); pieces.push(text); };
  const newline = (): void => { if (pretty) append('\n' + unit.repeat(depth)); };
  analysis.tokens.forEach((token, index, tokens) => {
    if (token.type === '{' || token.type === '[') {
      append(token.raw);
      if (tokens[index + 1]?.type !== (token.type === '{' ? '}' : ']')) { depth++; newline(); }
    } else if (token.type === '}' || token.type === ']') {
      if (tokens[index - 1]?.type !== (token.type === '}' ? '{' : '[')) { depth--; newline(); }
      append(token.raw);
    } else if (token.type === ',') { append(','); newline(); }
    else if (token.type === ':') append(pretty ? ': ' : ':');
    else append(token.raw);
  });
  const output = pieces.join(''), outputBytes = new TextEncoder().encode(output).length;
  if (outputBytes > JSON_OUTPUT_LIMIT) throw new Error('Formatted output exceeds 4 MiB. Choose minify or use a smaller input.');
  return { analysis, output, outputBytes, lines: output.split('\n').length, mode, indent };
}
export function formatJson(input: string, mode: JsonFormatMode = 'pretty', indent: JsonIndent = '2'): JsonFormatReport { return renderJson(analyzeJson(input), mode, indent); }
export function jsonFileText(bytes: Uint8Array): { text: string; removedBom: boolean } {
  if (bytes.length > JSON_INPUT_LIMIT) throw new Error('Choose a UTF-8 JSON file up to 1 MiB.');
  const removedBom = bytes[0] === 0xEF && bytes[1] === 0xBB && bytes[2] === 0xBF;
  let text: string;
  try { text = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(removedBom ? bytes.subarray(3) : bytes); }
  catch { throw new Error('This file is not valid UTF-8. Save it as UTF-8 JSON and try again.'); }
  return { text, removedBom };
}
