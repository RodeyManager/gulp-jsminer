"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var r=new(function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SYST";n(this,r),this.name=e,this.version="1.0.0"}var t,o,i;return t=r,(o=[{key:"version",value:function(){return"this SYST current version: ".concat(this.version)}}])&&e(t.prototype,o),i&&e(t,i),r}())("GULP-JSMINER");console.log(r.version());