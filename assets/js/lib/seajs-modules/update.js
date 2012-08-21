/**
 * @fileoverview update all modules to the latest version and
 * rewrite registry.js
 *
 * @usage node update_all.js
 * @author lifesinger@gmail.com <Frank Wang>
 */

var fs = require('fs');
var path = require('path');

var uglifyjs = require('uglify-js');
var jsp = uglifyjs.parser;
var pro = uglifyjs.uglify;
var zlib = require('zlib');

var argv2 = process.argv[2];
var force = process.argv[3] === '-f' || process.argv[3] === '--force';

var Transport = require('../lib/actions/transport.js');

// init registry
const REGISTRY_FILE = path.join(__dirname, 'registry.js');
var registry = {};
if (path.existsSync(REGISTRY_FILE)) {
  var code = fs.readFileSync(REGISTRY_FILE, 'utf8');
  registry = JSON.parse(code.replace('define({', '{').replace('});', '}'));
}


// get module names
var items = argv2 ? [argv2] : getModuleNames(__dirname);

// run
next();


function next() {
  processItem(items.shift());
}


function processItem(item) {
  if (item) {
    var filepath = path.join(__dirname, item, 'transport.js');

    Transport.transport(filepath, function(data) {
      var meta = data.meta;
      var name = meta.name.toLowerCase();

      // already exists
      if (data.errCode && registry[name]) {
        next();
        return;
      }

      // add to registry
      registry[name] = meta;

      // add dirpath
      meta.dirpath = item;

      // delete unnecessary properties
      delete meta.transportFile;

      if (meta.root.indexOf(':') !== -1) { // not local path
        if (meta.extra) {
          meta.extra = meta.extra.map(function(p) {
            return p.replace(meta.root, '');
          });
        }
        cutRoot(meta, 'src');
        cutRoot(meta, 'min');
      }
      else {
        delete meta.root;
      }

      // get file size info
      getFileSize(meta, next);
    }, { force: force });
  }
  else {
    updateRegistry();
  }
}


function getModuleNames(dirpath) {
  return fs.readdirSync(dirpath).filter(function(item) {
    return item.charAt(0) !== '.' &&
        fs.statSync(path.join(dirpath, item)).isDirectory();
  });
}


function cutRoot(meta, name) {
  if (meta[name]) {
    meta[name] = meta[name].replace(meta.root, '');
  }
}


function getFileSize(meta, callback) {
  var filename = meta['filename'];
  var minFile = path.join(__dirname, meta.dirpath, meta.version, filename + '.js');
  var srcFile = minFile.replace(/\.js$/, '-debug.js');

  console.log('  ... Reading %s', minFile);

  zlib.gzip(fs.readFileSync(minFile, 'utf8'), function(err, data) {
    if (err) throw err;
    meta['gzipped'] = formatSize(data.length);

    if (path.existsSync(srcFile)) {
      console.log('  ... Reading %s', srcFile);
      meta['raw'] = formatSize(fs.statSync(srcFile).size);
    }

    callback();
  });
}


function formatSize(size) {
  return Math.round(size / 1024) + 'KB';
}


function updateRegistry() {
  var ast = jsp.parse('define(' + JSON.stringify(registry) + ')');
  var code = pro.gen_code(ast, {
    'beautify': true,
    'indent_level': 2,
    'quote_keys': true
  });
  //code = code.replace('define({', '{').replace('});', '}');

  fs.writeFile(REGISTRY_FILE, code, 'utf8', function() {
    console.log('  Done!');
  });
}
