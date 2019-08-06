const pe = require('./lib/pe');
const { readFileSync} = require('fs');
const FILE = './bin/libegl.dll';
var bytes = new DataView(readFileSync(FILE).buffer);
var bi = new pe.io.BufferReader(bytes);
var pef = new pe.headers.PEFileHeaders();

pef.read(bi);

bi.sections = pef.sectionHeaders;

console.log('* sections', bi.sections);

var dd = new pe.headers.AddressRange(0, 0);

var importRange = pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.ImportSymbols];
bi.setVirtualOffset(importRange.address);

let range = new pe.headers.AddressRange();
let data = pe.unmanaged.DllImport.read(bi);
