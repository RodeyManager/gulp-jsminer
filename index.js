/**
 * Created by Rodey on 2017/4/5.
 */
'use strict';
const
    fs          = require('fs'),
    util        = require('util'),
    through2    = require('through2'),
    UglifyJS    = require("uglify-js"),
    PluginError = require('gulp-util').PluginError;

const PLUGIN_NAME = 'gulp-jsminer';

let jsminer = function(options){
    let option = util._extend({
        fromString: true
    }, options || {});
    return through2.obj(function(file, enc, next){

        if(file.isNull()){
            return next(null, file);
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Stream content is not supported'));
            return next(null, file);
        }

        if (file.isBuffer() && /\.(js|es)$/i.test(file.path)) {
            try {
                let content = file.contents.toString('utf8') || '';
                let result = UglifyJS.minify(content, option);
                file.contents = new Buffer(result.code);
            }
            catch (err) {
                this.emit('error', new PluginError(PLUGIN_NAME, ''));
            }
        }

        this.push(file);
        return next();

    });

};

module.exports = jsminer;