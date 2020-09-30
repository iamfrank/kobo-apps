"use strict";

require("core-js/modules/es.array.concat");

var idx = 0,
    o = 3,
    set_color = 'green';
var colorpicker_template = "\n    <div class=\"colorpicker\">\n        <button :class=\"colorpicker--btn colorpicker--btn-".concat(idx, " colorpicker--btn-set").concat(set_color, "\" onclick=\"showColorPicker()\">").concat(set_color, "</button>\n        <div class=\"colorpicker--menu\" v-if=\"colorpicker_visible\">\n            <div v-for=\"o in options\" class=\"colorpicker--pick\">\n                <span :class=\"colorpicker--pick-").concat(o, "\" onclick=\"pickColor(o)\">").concat(o, "</span>\n            </div>\n        </div>\n    </div>\n");

var showContent = function showContent() {
  document.getElementById("test").style.display = 'block';
  document.body.appendChild(colorpicker_template);
};