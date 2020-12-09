/**
 * Created by Rodey on 2017/4/5.
 */
'use strict';
const util = require('util'),
  through2 = require('through2'),
  { minify } = require('terser'),
  PluginError = require('plugin-error');

const PLUGIN_NAME = 'gulp-jsminer';

let jsminer = function (options) {
  let option = util._extend(
    {
      toplevel: true
    },
    options || {}
  );
  return through2.obj(async function (file, enc, next) {
    if (file.isNull()) {
      return next(null, file);
    }

    if (file.isStream()) {
      this.emit(
        'error',
        new PluginError(PLUGIN_NAME, 'Stream content is not supported')
      );
      return next(null, file);
    }

    if (file.isBuffer() && /\.(js|es)$/i.test(file.path)) {
      try {
        let content = file.contents.toString('utf8') || '';
        const result = await minify(content, option);
        file.contents = Buffer.from(result.code);
      } catch (err) {
        this.emit('error', new PluginError(PLUGIN_NAME, err.message));
      }
    }

    this.push(file);
    return next();
  });
};

module.exports = jsminer;
