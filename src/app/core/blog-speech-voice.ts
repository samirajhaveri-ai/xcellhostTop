/** Browsers expose voice names and locales, but no gender field. */
export function selectBlogSpeechVoice(voices: readonly SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const english = voices.filter(voice => /^en(?:[-_]|$)/i.test(voice.lang));
  const female = english.filter(voice =>
    /\b(heera|neerja|swara|zira|hazel|susan|samantha|victoria|karen|moira|tessa|siri female|female|aria|jenny|sonia|libby|natasha|clara|michelle|ava|emma)\b/i.test(voice.name),
  );
  return female.find(voice => /^en[-_]IN$/i.test(voice.lang))
    ?? female[0]
    ?? english.find(voice => /^en[-_]IN$/i.test(voice.lang))
    ?? english.find(voice => voice.default)
    ?? english[0];
}
