#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function patchLibpag() {
  const libPath = path.dirname(require.resolve('libpag'));
  const files = [
    path.join(libPath, 'libpag.cjs.js'),
    path.join(libPath, 'libpag.esm.js'),
    path.join(libPath, 'libpag.umd.js'),
  ];

  // https://github.com/expo/expo/issues/36384
  console.log('Patching libpag for import.meta issue...');

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    if (content.includes('/* PATCHED FOR REACT-NATIVE-PAG */')) {
      console.log('libpag already patched');
      return;
    }

    content = content.replace(
      /var _scriptName = import\.meta\.url;/g,
      '/* PATCHED FOR REACT-NATIVE-PAG */ var _scriptName = "";'
    );
    content = content.replace(
      /return new URL\("libpag\.wasm", import\.meta\.url\)\.href;/g,
      '/* PATCHED FOR REACT-NATIVE-PAG */ return "libpag.wasm";'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Patched ${file}`);
  }
}

function getWasmFilePath() {
  const libPath = path.dirname(require.resolve('libpag'));
  const wasmFilePath = path.join(libPath, 'libpag.wasm');
  if (!fs.existsSync(wasmFilePath)) {
    throw new Error(`libpag.wasm not found at ${wasmFilePath}`);
  }
  return wasmFilePath;
}

function copyFile(from, to) {
  const data = fs.readFileSync(from);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.writeFileSync(to, data);
}

(() => {
  const outputPath = path.join('public', './libpag.wasm');

  patchLibpag();

  console.log(`Copying libpag.wasm to ${outputPath}...`);
  copyFile(getWasmFilePath(), outputPath);
  console.log('Done!');
})();
