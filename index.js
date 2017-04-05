/**
 * Created by Rodey on 2017/4/5.
 */
var fs          = require('fs'),
    util        = require('util'),
    through2    = require('through2'),
    UglifyJS    = require("uglify-js"),
    PluginError = require('gulp-util').PluginError;

var PLUGIN_NAME = 'gulp-html-inline';

//获取文件内容
var getFileContent = function(file){
    if(!fs.existsSync(file)) return '';
    return fs.readFileSync(file, { encoding: 'utf8' });
};

var jsminer = function(options){
    var option = util._extend({
        fromString: true
    }, options || {});
    return through2.obj(function(file, enc, next){

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Stream content is not supported'));
            return next(null, file);
        }
        if (file.isBuffer() && /\.(js|es)$/i.test(file.path)) {
            try {
                var content = getFileContent(file.path);
                var result = UglifyJS.minify(content, option);
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