const closureCompiler = require('google-closure-compiler').compiler;
const glob = require('glob');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');
// const filesize = require('filesize');

const files = [
  'node_modules/zone.js/dist/zone.js',
  'node_modules/@angular/core/@angular/core.js',
  'node_modules/@angular/common/@angular/common.js',
  'node_modules/@angular/compiler/@angular/compiler.js',
  'node_modules/@angular/platform-browser/@angular/platform-browser.js',
  'vendor/zone_externs.js'
].concat(glob.sync('./vendor/rxjs/**/*.js')).concat(glob.sync('./built/**/*.js'));

const compiler = new closureCompiler({
  js: files,
  language_in: 'ES6_STRICT',
  language_out: 'ES5',
  compilation_level: 'ADVANCED_OPTIMIZATIONS',
  entry_point: 'built/bootstrap.js',
  js_output_file: 'dist/bundle.js',
  create_source_map: '%outname%.map',
  warning_level: 'QUIET',
  rewrite_polyfills: false,
  dependency_mode: 'strict',
  variable_renaming_report: 'dist/variable_renaming_report',
  property_renaming_report: 'dist/property_renaming_report',
  js_module_root: [
    'node_modules/@angular/core',
    'node_modules/@angular/common',
    'node_modules/@angular/compiler',
    'node_modules/@angular/platform-browser',
    'vendor'
  ]
});

compiler.run((exitCode, stdout, stderr) => {
  if (exitCode === 0) {
    let srcFile = path.join(__dirname, 'dist', 'bundle.js');
    let gzipDest = path.join(__dirname, 'dist', 'bundle.js.gz');
    let srcCode = fs.readFileSync(path.join(__dirname, 'dist', 'bundle.js'));
    fs.writeFileSync(gzipDest, zlib.gzipSync(srcCode, { level: 9 }));

    // let jsSize = filesize(fs.statSync(srcFile).size);
    // let gzipSize = filesize(fs.statSync(gzipDest).size);

    // console.log(`bundle.js (${jsSize}) -> bundle.js.gz (${gzipSize})`);
    console.log('Build successful.');
  } else {
    console.error(stderr);
  }
});
