"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fui-form-field",
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.hidden ? 1 : ""
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-745c9076"], ["__file", "E:/\u524D\u7AEF/uni-app/analysis-of-employment-based-on-collaborative-filtering/node_modules/firstui-uni/firstui/fui-form-field/fui-form-field.vue"]]);
wx.createComponent(Component);
