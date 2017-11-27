/* Ejemplo base */

(function(root, factory) { //[1]
 if(typeof define === 'function' && define.amd) { //[2]
 define(['mustache'], factory);
 } else if(typeof module === 'object' && //[3]
 typeof module.exports === 'object') {
 var mustache = require('mustache');
 module.exports = factory(mustache);
 } else { //[4]
 root.UmdModule = factory(root.Mustache);
 }
}(this, function(mustache) { //[5]
 var template = '<h1>Hello <i>{{name}}</i></h1>';
 mustache.parse(template);

 return {
 sayHello:function(toWhom) {
 return mustache.render(template, {name: toWhom});
 }
 };
}));

/* Ejemplo adicional */

 "use strict";

    (function(exports) {

        exports.StringSet = function () {
            this.data = {};
            // arguments is not an array; borrow forEach
            Array.prototype.forEach.call(arguments, function(elem) {
                this.add(elem);
            }, this); // pass "this" on to the function
        }

        exports.StringSet.prototype.add = function(elem) {
            if (typeof elem !== "string") {
                throw new TypeError("Argument is not a string: "+elem);
            }
            this.data[elem] = true;
            return this; // allow method chaining
        }

        exports.StringSet.prototype.contains = function(elem) {
            // Comparison ensures boolean result
            return this.data[elem] === true;
        }

    }(typeof exports === "undefined"
        ? (this.strset = {})
        : exports));

// En NODE JS:
var strset = require("./strset");
var s      = new strset.StringSet();

//En Browser:
<script src="strset.js"></script>
<script>
    var s = new strset.StringSet();
</script>