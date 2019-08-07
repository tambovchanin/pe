const pe = require('./lib/pe');
const { readFileSync} = require('fs');
const FILE = './bin/ctc-wind10.exe';
// const FILE = './bin/libegl.dll';
// const FILE = './bin/d3dcompiler_47.dll';

var bytes = new DataView(readFileSync(FILE).buffer);
var bi = new pe.io.BufferReader(bytes);
var pef = new pe.headers.PEFileHeaders();

pef.read(bi);

bi.sections = pef.sectionHeaders;

for(let kind in pe.headers.DataDirectoryKind) {
  if (pef.optionalHeader.dataDirectories[kind])
    console.log(pe.headers.DataDirectoryKind[kind], 'address:', pef.optionalHeader.dataDirectories[kind].address);
}

var importRange = pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.ImportSymbols];
var resRange = pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Resources];
var expRange = pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.ExportSymbols];

if (importRange.address) {
  bi.setVirtualOffset(importRange.address);
  let imports = pe.unmanaged.DllImport.read(bi);
  console.log('* Imports:\n', imports);
}

if (resRange.address) {
  var resources = new pe.unmanaged.ResourceDirectory();
  bi.setVirtualOffset(resRange.address);
  resources.read(bi);
  console.log('* Resources:\n', resources);

}

if (expRange.address) {
  bi.setVirtualOffset(expRange.address);
  var exp = pe.unmanaged.DllExport.readExports(bi, expRange);
  console.log('* Exports:\n', exp);
}
