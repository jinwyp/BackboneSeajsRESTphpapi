define({
  "async": {
    "package": "https://raw.github.com/caolan/async/master/package.json",
    "src": "https://github.com/caolan/async/raw/master/lib/async.js",
    "min": "https://raw.github.com/caolan/async/master/dist/async.min.js",
    "name": "async",
    "description": "Higher-order functions and common patterns for asynchronous code",
    "main": "./index",
    "author": "Caolan McMahon",
    "version": "0.1.22",
    "repository": {
      "type": "git",
      "url": "http://github.com/caolan/async.git"
    },
    "bugs": {
      "url": "http://github.com/caolan/async/issues"
    },
    "licenses": [ {
      "type": "MIT",
      "url": "http://github.com/caolan/async/raw/master/LICENSE"
    } ],
    "devDependencies": {
      "nodeunit": ">0.0.0",
      "uglify-js": "1.2.x",
      "nodelint": ">0.0.0"
    },
    "filename": "async",
    "dirpath": "async",
    "gzipped": "2KB",
    "raw": "21KB"
  },
  "backbone": {
    "package": "https://raw.github.com/documentcloud/backbone/master/package.json",
    "src": "http://documentcloud.github.com/backbone/backbone.js",
    "min": "http://documentcloud.github.com/backbone/backbone-min.js",
    "name": "backbone",
    "description": "Give your JS App some Backbone with Models, Views, Collections, and Events.",
    "url": "http://backbonejs.org",
    "keywords": [ "util", "functional", "server", "client", "browser" ],
    "author": "Jeremy Ashkenas <jeremy@documentcloud.org>",
    "contributors": [],
    "dependencies": {
      "underscore": ">=1.3.1"
    },
    "lib": ".",
    "main": "backbone.js",
    "version": "0.9.2",
    "filename": "backbone",
    "dirpath": "backbone",
    "gzipped": "6KB",
    "raw": "52KB"
  },
  "coffee": {
    "package": "https://raw.github.com/jashkenas/coffee-script/master/package.json",
    "name": "coffee",
    "filename": "coffee-script",
    "min": "http://jashkenas.github.com/coffee-script/extras/coffee-script.js",
    "description": "Unfancy JavaScript",
    "keywords": [ "javascript", "language", "coffeescript", "compiler" ],
    "author": "Jeremy Ashkenas",
    "version": "1.3.3",
    "licenses": [ {
      "type": "MIT",
      "url": "https://raw.github.com/jashkenas/coffee-script/master/LICENSE"
    } ],
    "engines": {
      "node": ">=0.4.0"
    },
    "directories": {
      "lib": "./lib/coffee-script"
    },
    "main": "./lib/coffee-script/coffee-script",
    "bin": {
      "coffee": "./bin/coffee",
      "cake": "./bin/cake"
    },
    "homepage": "http://coffeescript.org",
    "bugs": "https://github.com/jashkenas/coffee-script/issues",
    "repository": {
      "type": "git",
      "url": "git://github.com/jashkenas/coffee-script.git"
    },
    "devDependencies": {
      "uglify-js": ">=1.0.0",
      "jison": ">=0.2.0"
    },
    "dirpath": "coffee",
    "gzipped": "0KB"
  },
  "cookie": {
    "package": "https://raw.github.com/alipay/arale/master/lib/cookie/package.json",
    "name": "cookie",
    "description": "Provides utilities for dealing with cookies.",
    "url": "https://github.com/alipay/arale/tree/master/lib/cookie",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "1.0.2",
    "files": [ "./src/cookie.js" ],
    "src": "http://aralejs.org/dist/cookie/1.0.2/cookie-debug.js",
    "min": "http://aralejs.org/dist/cookie/1.0.2/cookie.js",
    "dist": {
      "cookie.js": [ "default" ]
    },
    "filename": "cookie",
    "dirpath": "cookie",
    "gzipped": "1KB",
    "raw": "6KB"
  },
  "es5-safe": {
    "package": "https://raw.github.com/lifesinger/dew/master/lib/es5-safe/package.json",
    "name": "es5-safe",
    "description": "Provides compatibility shims so that legacy JavaScript engines behave as closely as possible to ES5.",
    "url": "https://github.com/lifesinger/dew/es5-safe",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "0.9.2",
    "src": "https://raw.github.com/lifesinger/dew/master/dist/es5-safe/0.9.2/es5-safe-debug.js",
    "min": "https://raw.github.com/lifesinger/dew/master/dist/es5-safe/0.9.2/es5-safe.js",
    "filename": "es5-safe",
    "dirpath": "es5-safe",
    "gzipped": "1KB",
    "raw": "10KB"
  },
  "handlebars": {
    "package": "https://raw.github.com/wycats/handlebars.js/master/package.json",
    "dependencies": [],
    "version": "1.0.0",
    "src": "https://github.com/downloads/wycats/handlebars.js/handlebars-1.0.0.beta.6.js",
    "name": "handlebars",
    "description": "Extension of the Mustache logicless template language",
    "homepage": "http://www.handlebarsjs.com/",
    "keywords": [ "handlebars mustache template html" ],
    "repository": {
      "type": "git",
      "url": "git://github.com/kpdecker/handlebars.js.git"
    },
    "engines": {
      "node": ">=0.4.7"
    },
    "devDependencies": {},
    "main": "lib/handlebars.js",
    "bin": {
      "handlebars": "bin/handlebars"
    },
    "filename": "handlebars",
    "dirpath": "handlebars",
    "gzipped": "9KB",
    "raw": "49KB"
  },
  "iscroll": {
    "package": "https://raw.github.com/cubiq/iscroll/master/package.json",
    "src": "https://raw.github.com/cubiq/iscroll/master/src/iscroll.js",
    "name": "iscroll",
    "description": "smooth scrolling for mobile webkit",
    "version": "4.1.9",
    "homepage": "http://cubiq.org/iscroll-4",
    "author": "Matteo Spinelli <> (http://cubiq.org)",
    "keywords": [ "ender", "iscroll", "scrolling", "webkit", "iphone", "android" ],
    "main": "./src/iscroll.js",
    "ender": "./src/ender.js",
    "repository": {
      "type": "git",
      "url": "https://github.com/cubiq/iscroll.git"
    },
    "filename": "iscroll",
    "dirpath": "iscroll",
    "gzipped": "6KB",
    "raw": "33KB"
  },
  "jasmine": {
    "name": "jasmine",
    "description": "Jasmine is a behavior-driven development framework for testing your JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.",
    "author": "Pivotal Labs",
    "url": "http://pivotal.github.com/jasmine/",
    "keywords": "test",
    "version": "1.1.0",
    "extra": [ "jasmine-html.js", "jasmine.css" ],
    "filename": "jasmine",
    "dirpath": "jasmine",
    "gzipped": "15KB"
  },
  "jquery": {
    "name": "jquery",
    "description": "A new kind of JavaScript Library.",
    "author": "John Resig",
    "url": "http://jquery.com/",
    "keywords": [ "dom", "event", "library" ],
    "src": "http://code.jquery.com/jquery-latest.js",
    "min": "http://code.jquery.com/jquery-latest.min.js",
    "version": "1.7.2",
    "filename": "jquery",
    "dirpath": "jquery",
    "gzipped": "33KB",
    "raw": "247KB"
  },
  "json": {
    "name": "json",
    "description": "JSON in JavaScript.",
    "author": "Douglas Crockford",
    "url": "http://www.JSON.org/",
    "version": "1.0.2",
    "src": "https://raw.github.com/douglascrockford/JSON-js/master/json2.js",
    "filename": "json",
    "dirpath": "json",
    "gzipped": "1KB",
    "raw": "17KB"
  },
  "labjs": {
    "name": "labjs",
    "description": "Loading And Blocking JavaScript.",
    "author": "Kyle Simpson",
    "url": "http://labjs.com/",
    "keywords": [ "loader", "performance" ],
    "filename": "lab",
    "src": "https://raw.github.com/getify/LABjs/master/LAB.src.js",
    "min": "https://raw.github.com/getify/LABjs/master/LAB.js",
    "notes": "Run LABjs in node is not significant.",
    "version": "2.0.3",
    "dirpath": "labjs",
    "gzipped": "2KB",
    "raw": "19KB"
  },
  "less": {
    "package": "https://raw.github.com/cloudhead/less.js/master/package.json",
    "src": "https://raw.github.com/cloudhead/less.js/master/dist/less-1.3.0.js",
    "min": "https://raw.github.com/cloudhead/less.js/master/dist/less-1.3.0.min.js",
    "name": "less",
    "description": "Leaner CSS",
    "url": "http://lesscss.org",
    "keywords": [ "css", "parser", "lesscss", "browser" ],
    "author": "Alexis Sellier <self@cloudhead.net>",
    "contributors": [],
    "version": "1.3.0",
    "bin": {
      "lessc": "./bin/lessc"
    },
    "main": "./lib/less/index",
    "directories": {
      "test": "./test"
    },
    "engines": {
      "node": ">=0.4.0"
    },
    "filename": "less",
    "dirpath": "less",
    "gzipped": "15KB",
    "raw": "114KB"
  },
  "marked": {
    "package": "https://raw.github.com/chjj/marked/master/package.json",
    "src": "https://raw.github.com/chjj/marked/v0.2.4/lib/marked.js",
    "version": "0.2.4",
    "name": "marked",
    "description": "A markdown parser built for speed",
    "author": "Christopher Jeffrey",
    "main": "./lib/marked.js",
    "bin": "./bin/marked",
    "man": "./man/marked.1",
    "preferGlobal": false,
    "repository": "git://github.com/chjj/marked.git",
    "homepage": "https://github.com/chjj/marked",
    "bugs": {
      "url": "http://github.com/chjj/marked/issues"
    },
    "keywords": [ "markdown", "markup", "html" ],
    "tags": [ "markdown", "markup", "html" ],
    "filename": "marked",
    "dirpath": "marked",
    "gzipped": "3KB",
    "raw": "16KB"
  },
  "moment": {
    "package": "https://github.com/timrwood/moment/raw/master/package.json",
    "src": "https://raw.github.com/timrwood/moment/1.6.2/moment.js",
    "min": "https://raw.github.com/timrwood/moment/1.6.2/min/moment.min.js",
    "name": "moment",
    "version": "1.6.2",
    "description": "Moment.js is a javascript date library that helps create, manipulate, and format dates without extending the `Date` prototype.",
    "homepage": "https://github.com/timrwood/moment",
    "author": "Tim Wood <washwithcare@gmail.com> (http://timwoodcreates.com/)",
    "keywords": [ "moment", "date", "ender" ],
    "main": "./moment.js",
    "engines": {
      "node": "*"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/timrwood/moment.git"
    },
    "bugs": {
      "url": "https://github.com/timrwood/moment/issues"
    },
    "licenses": [ {
      "type": "MIT"
    } ],
    "devDependencies": {
      "jshint": "latest",
      "uglify-js": "latest",
      "nodeunit": "latest"
    },
    "scripts": {
      "test": "nodeunit ./test/moment ./test/lang"
    },
    "ender": "./ender.js",
    "filename": "moment",
    "dirpath": "moment",
    "gzipped": "4KB",
    "raw": "31KB"
  },
  "mustache": {
    "package": "https://raw.github.com/janl/mustache.js/master/package.json",
    "version": "0.5.0",
    "src": "https://raw.github.com/janl/mustache.js/master/mustache.js",
    "name": "mustache",
    "description": "Logic-less {{mustache}} templates with JavaScript",
    "author": "mustache.js Authors <http://github.com/janl/mustache.js>",
    "keywords": [ "mustache", "template", "templates", "ejs" ],
    "main": "./mustache",
    "filename": "mustache",
    "dirpath": "mustache",
    "gzipped": "2KB",
    "raw": "14KB"
  },
  "querystring": {
    "package": "https://raw.github.com/lifesinger/dew/master/lib/querystring/package.json",
    "name": "querystring",
    "description": "Provides utilities for dealing with query strings.",
    "url": "https://github.com/lifesinger/dew/querystring",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "1.0.2",
    "src": "https://raw.github.com/lifesinger/dew/master/dist/querystring/1.0.2/querystring-debug.js",
    "min": "https://raw.github.com/lifesinger/dew/master/dist/querystring/1.0.2/querystring.js",
    "filename": "querystring",
    "dirpath": "querystring",
    "gzipped": "1KB",
    "raw": "4KB"
  },
  "seajs": {
    "package": "https://raw.github.com/seajs/seajs/master/package.json",
    "filename": "sea",
    "root": "https://raw.github.com/seajs/seajs/master/dist/",
    "src": "sea-debug.js",
    "min": "sea.js",
    "extra": [ "plugin-base.js", "plugin-debug.js", "plugin-combo.js", "plugin-text.js", "plugin-json.js", "plugin-coffee.js", "plugin-less.js" ],
    "name": "seajs",
    "version": "1.1.9",
    "description": "A Module Loader for the Web",
    "homepage": "https://seajs.org/",
    "keywords": [ "loader", "module", "commonjs", "browser", "nodejs" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "engines": {
      "node": ">= 0.8.0"
    },
    "dependencies": [],
    "repository": {
      "type": "git",
      "url": "git://github.com/seajs/seajs.git"
    },
    "main": "./lib/sea-node.js",
    "preferGlobal": true,
    "dirpath": "seajs",
    "gzipped": "4KB",
    "raw": "30KB"
  },
  "store": {
    "package": "https://raw.github.com/marcuswestin/store.js/master/package.json",
    "src": "https://github.com/marcuswestin/store.js/raw/master/store.js",
    "name": "store",
    "description": "A localStorage wrapper for all browsers without using cookies or flash. Uses localStorage, globalStorage, and userData behavior under the hood",
    "version": "1.3.3",
    "homepage": "https://github.com/marcuswestin/store.js",
    "author": "Marcus Westin <narcvs@gmail.com> (http://marcuswest.in)",
    "contributors": [ "Matt Pizzimenti <mjpizz+github@gmail.com> (http://mjpizz.com)", "Long Ouyang (https://github.com/longouyang)", "Paul Irish (http://paulirish.com)", "Guillermo Rauch <rauchg@gmail.com> (https://github.com/guille)", "whitmer (https://github.com/whitmer)", "Steven Black <steveb@stevenblack.com> (https://github.com/StevenBlack)", "Marcus Tucker <info@marcustucker.com> (https://github.com/MarcusJT)", "Leonid Bugaev <leonsbox@gmail.com> (https://github.com/buger)", "Per Eckerdal <per.eckerdal@gmail.com> (https://github.com/pereckerdal)", "Fredrik Blomqvist (https://github.com/blq)" ],
    "repository": {
      "type": "git",
      "url": "git://github.com/marcuswestin/store.js.git"
    },
    "bugs": {
      "url": "http://github.com/marcuswestin/store.js/issues"
    },
    "engines": {
      "browser": "*",
      "node": "*"
    },
    "licenses": [ {
      "type": "MIT",
      "url": "https://raw.github.com/marcuswestin/store.js/master/store.js"
    } ],
    "main": "store",
    "directories": {
      "lib": "."
    },
    "devDependencies": {
      "uglify-js": "v1.2.5"
    },
    "files": [ "" ],
    "filename": "store",
    "dirpath": "store",
    "gzipped": "1KB",
    "raw": "7KB"
  },
  "swfobject": {
    "name": "swfobject",
    "description": "SWFObject is an easy-to-use and standards-friendly method to embed Flash content, which utilizes one small JavaScript file.",
    "author": "https://github.com/swfobject",
    "url": "https://github.com/swfobject/swfobject",
    "keywords": "util",
    "version": "2.2.0",
    "extra": [ "swfobject-debug.js", "expressInstall.swf" ],
    "filename": "swfobject",
    "dirpath": "swfobject",
    "gzipped": "4KB",
    "raw": "25KB"
  },
  "underscore": {
    "package": "https://raw.github.com/documentcloud/underscore/master/package.json",
    "src": "http://documentcloud.github.com/underscore/underscore.js",
    "min": "http://documentcloud.github.com/underscore/underscore-min.js",
    "name": "underscore",
    "description": "JavaScript's functional programming helper library.",
    "homepage": "http://documentcloud.github.com/underscore/",
    "keywords": [ "util", "functional", "server", "client", "browser" ],
    "author": "Jeremy Ashkenas <jeremy@documentcloud.org>",
    "repository": {
      "type": "git",
      "url": "git://github.com/documentcloud/underscore.git"
    },
    "main": "underscore.js",
    "version": "1.3.3",
    "filename": "underscore",
    "dirpath": "underscore",
    "gzipped": "4KB",
    "raw": "37KB"
  },
  "zepto": {
    "name": "zepto",
    "description": "Zepto is a minimalist JavaScript framework for modern browsers with a largely jQuery-compatible API.",
    "author": "Thomas Fuchs",
    "url": "http://zeptojs.com/",
    "keywords": [ "dom", "mobile" ],
    "version": "1.0.0",
    "src": "http://zeptojs.com/zepto.js",
    "min": "http://zeptojs.com/zepto.min.js",
    "filename": "zepto",
    "dirpath": "zepto",
    "gzipped": "9KB",
    "raw": "51KB"
  },
  "raphael": {
    "name": "raphael",
    "description": "JavaScript Vector Library",
    "author": "Dmitry Baranovskiy",
    "version": "2.1.0",
    "url": "http://raphaeljs.com/",
    "keywords": "vector",
    "src": "https://raw.github.com/DmitryBaranovskiy/raphael/master/raphael.js",
    "min": "https://raw.github.com/DmitryBaranovskiy/raphael/master/raphael-min.js",
    "filename": "raphael",
    "dirpath": "raphael",
    "gzipped": "31KB",
    "raw": "216KB"
  },
  "base": {
    "package": "https://raw.github.com/alipay/arale/master/lib/base/package.json",
    "root": "http://aralejs.org/dist/base/0.9.16/",
    "src": "base-debug.js",
    "min": "base.js",
    "extra": [ "aspect.js", "aspect-debug.js", "attribute.js", "attribute-debug.js" ],
    "name": "base",
    "version": "0.9.16",
    "filename": "base",
    "dirpath": "base",
    "gzipped": "0KB",
    "raw": "1KB"
  },
  "class": {
    "package": "https://raw.github.com/alipay/arale/master/lib/class/package.json",
    "src": "http://aralejs.org/dist/class/0.9.2/class-debug.js",
    "min": "http://aralejs.org/dist/class/0.9.2/class.js",
    "name": "class",
    "version": "0.9.2",
    "dist": {
      "class.js": "default"
    },
    "filename": "class",
    "dirpath": "class",
    "gzipped": "1KB",
    "raw": "5KB"
  },
  "events": {
    "package": "https://raw.github.com/alipay/arale/master/lib/events/package.json",
    "src": "http://aralejs.org/dist/events/0.9.1/events-debug.js",
    "min": "http://aralejs.org/dist/events/0.9.1/events.js",
    "name": "events",
    "version": "0.9.1",
    "dist": {
      "events.js": "default"
    },
    "filename": "events",
    "dirpath": "events",
    "gzipped": "1KB",
    "raw": "5KB"
  },
  "widget": {
    "package": "https://raw.github.com/alipay/arale/master/lib/widget/package.json",
    "root": "http://aralejs.org/dist/widget/0.9.16/",
    "src": "widget-debug.js",
    "min": "widget.js",
    "extra": [ "ast-printer.js", "ast-printer-debug.js", "ast-printer-mobile.js", "ast-printer-mobile-debug.js", "auto-render.js", "auto-render-debug.js", "auto-render-mobile.js", "auto-render-mobile-debug.js", "daparser.js", "daparser-debug.js", "daparser-mobile.js", "daparser-mobile-debug.js", "templatable.js", "templatable-debug.js", "templatable-mobile.js", "templatable-mobile-debug.js", "widget-mobile.js", "widget-mobile-debug.js" ],
    "name": "widget",
    "version": "0.9.16",
    "tests": [ "daparser", "widget", "templatable" ],
    "filename": "widget",
    "dirpath": "widget",
    "gzipped": "2KB",
    "raw": "14KB",
    "dependencies": {
      "class": ">=0.9.2",
      "events": ">=0.9.1",
      "base": ">=0.9.16"
    }
  },
  "socketio": {
    "package": "https://raw.github.com/LearnBoost/socket.io-client/master/package.json",
    "name": "socketio",
    "filename": "socketio",
    "root": "https://raw.github.com/LearnBoost/socket.io-client/master/dist/",
    "src": "socket.io.js",
    "min": "socket.io.min.js",
    "extra": [ "WebSocketMain.swf", "WebSocketMainInsecure.swf" ],
    "description": "Socket.IO client for the browser and node.js",
    "version": "0.9.6",
    "main": "./lib/io.js",
    "browserify": "./dist/socket.io.js",
    "homepage": "http://socket.io",
    "keywords": [ "websocket", "socket", "realtime", "socket.io", "comet", "ajax" ],
    "author": "Guillermo Rauch <guillermo@learnboost.com>",
    "contributors": [ {
      "name": "Guillermo Rauch",
      "email": "rauchg@gmail.com"
    }, {
      "name": "Arnout Kazemier",
      "email": "info@3rd-eden.com"
    }, {
      "name": "Vladimir Dronnikov",
      "email": "dronnikov@gmail.com"
    }, {
      "name": "Einar Otto Stangvik",
      "email": "einaros@gmail.com"
    } ],
    "repository": {
      "type": "git",
      "url": "https://github.com/LearnBoost/socket.io-client.git"
    },
    "dependencies": {
      "uglify-js": "1.2.5",
      "ws": "0.4.x",
      "xmlhttprequest": "1.2.2",
      "active-x-obfuscator": "0.0.1"
    },
    "devDependencies": {
      "expresso": "*",
      "express": "2.5.x",
      "jade": "*",
      "stylus": "*",
      "socket.io": "0.9.6",
      "socket.io-client": "0.9.6"
    },
    "engines": {
      "node": ">= 0.4.0"
    },
    "dirpath": "socketio",
    "gzipped": "13KB",
    "raw": "98KB"
  }
});