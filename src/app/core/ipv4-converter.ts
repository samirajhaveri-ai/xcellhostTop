import { SubnetCategory, parseSubnetAddress, subnetAddressText, subnetCategory } from './subnet-calculator';

export type Ipv4InputFormat = 'ipv4' | 'decimal' | 'binary' | 'hex';
export const IPV4_INPUT_FORMATS = [
  {id:'ipv4',name:'IPv4 address',placeholder:'192.168.1.1',help:'Four decimal octets from 0 to 255, without leading zeros.'},
  {id:'decimal',name:'Unsigned decimal',placeholder:'3232235777',help:'A base-10 integer from 0 to 4294967295. No signs, commas or exponent notation.'},
  {id:'binary',name:'Binary',placeholder:'11000000.10101000.00000001.00000001',help:'Up to 32 bits, optional 0b prefix, or four 8-bit groups separated by dots or spaces.'},
  {id:'hex',name:'Hexadecimal',placeholder:'0xC0A80101',help:'One to eight hex digits, optional 0x prefix, or four 2-digit bytes separated by colons or dots.'},
] as const;

export interface Ipv4Conversion {
  sourceFormat: Ipv4InputFormat;
  address: string;
  decimal: number;
  binary: string;
  dottedBinary: string;
  hex: string;
  hexBytes: string;
  reverseName: string;
  mappedIpv6: string;
  category: SubnetCategory;
  octets: {index:number;decimal:number;hex:string;binary:string;weight:number;contribution:number}[];
}

export function convertIpv4(input: string, format: Ipv4InputFormat): Ipv4Conversion {
  if (typeof input !== 'string' || input.length > 100 || /[\x00-\x1f\x7f]/.test(input)) throw new Error('Use one value up to 100 characters, without control characters.');
  const value=input.trim();
  if (!value) throw new Error('Enter an address or numeric value to convert.');
  let number:number;
  switch (format) {
    case 'ipv4': number=parseSubnetAddress(value);break;
    case 'decimal':
      if (!/^\d{1,10}$/.test(value)) throw new Error('Use an unsigned base-10 integer, such as 3232235777.');
      number=Number(value);break;
    case 'binary': {
      let bits=value;
      if (/^(?:0b)?[01]{1,32}$/i.test(value)) bits=value.replace(/^0b/i,'');
      else if (/^[01]{8}(?:\.[01]{8}){3}$/.test(value)) bits=value.replace(/\./g,'');
      else if (/^[01]{8}(?: +[01]{8}){3}$/.test(value)) bits=value.replace(/ +/g,'');
      else throw new Error('Use up to 32 binary digits, or exactly four 8-bit groups separated by dots or spaces.');
      number=Number.parseInt(bits,2);break;
    }
    case 'hex': {
      let digits=value;
      if (/^(?:0x)?[a-f\d]{1,8}$/i.test(value)) digits=value.replace(/^0x/i,'');
      else if (/^[a-f\d]{2}([:.])[a-f\d]{2}\1[a-f\d]{2}\1[a-f\d]{2}$/i.test(value)) digits=value.replace(/[:.]/g,'');
      else throw new Error('Use one to eight hexadecimal digits, or four 2-digit bytes with a consistent colon or dot separator.');
      number=Number.parseInt(digits,16);break;
    }
    default: throw new Error('Choose a supported input format.');
  }
  if (!Number.isInteger(number) || number<0 || number>4294967295) throw new Error('IPv4 values must be between 0 and 4294967295 (32 unsigned bits).');
  const address=subnetAddressText(number),parts=address.split('.').map(Number);
  const octets=parts.map((decimal,index)=>({index:index+1,decimal,hex:decimal.toString(16).padStart(2,'0').toUpperCase(),binary:decimal.toString(2).padStart(8,'0'),weight:256**(3-index),contribution:decimal*256**(3-index)}));
  return {sourceFormat:format,address,decimal:number,binary:octets.map(o=>o.binary).join(''),dottedBinary:octets.map(o=>o.binary).join('.'),hex:'0x'+octets.map(o=>o.hex).join(''),hexBytes:octets.map(o=>o.hex).join(':'),reverseName:[...parts].reverse().join('.')+'.in-addr.arpa',mappedIpv6:'::ffff:'+address,category:subnetCategory(number),octets};
}

export function ipv4InputValue(report:Ipv4Conversion,format:Ipv4InputFormat):string {
  switch(format){case'ipv4':return report.address;case'decimal':return String(report.decimal);case'binary':return report.dottedBinary;case'hex':return report.hex;default:throw new Error('Choose a supported input format.');}
}
export function ipv4ConversionRows(report:Ipv4Conversion):{label:string;value:string}[]{
  return [
    ['IPv4 address',report.address],['Unsigned decimal',String(report.decimal)],['Binary (32 bits)',report.binary],['Binary octets',report.dottedBinary],['Hexadecimal',report.hex],['Hexadecimal bytes',report.hexBytes],['Reverse DNS name',report.reverseName],['IPv4-mapped IPv6',report.mappedIpv6],['Common address category',report.category.name],['Category block',report.category.block],['Category note',report.category.note],
  ].map(([label,value])=>({label,value}));
}
export function ipv4ConversionText(report:Ipv4Conversion):string {return 'XcellHost | IPv4 Converter\n\n'+ipv4ConversionRows(report).map(row=>row.label+': '+row.value).join('\n')+'\n\nByte order: most significant byte first. Conversion does not check allocation or reachability.\n';}
export function ipv4ConversionCsv(report:Ipv4Conversion):string {const quote=(value:string)=>'"'+value.replace(/"/g,'""')+'"';return 'Field,Value\r\n'+ipv4ConversionRows(report).map(row=>quote(row.label)+','+quote(row.value)).join('\r\n')+'\r\n';}
