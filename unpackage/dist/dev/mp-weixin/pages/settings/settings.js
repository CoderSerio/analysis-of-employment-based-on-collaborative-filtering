"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "\u6211\u662F\u8BBE\u7F6E\u9875\u9762"
    };
  }
};
if (!Array) {
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_list2 = common_vendor.resolveComponent("fui-list");
  (_easycom_fui_list_cell2 + _easycom_fui_list2)();
}
const _easycom_fui_list_cell = () => "../../node-modules/firstui-uni/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_list = () => "../../node-modules/firstui-uni/firstui/fui-list/fui-list.js";
if (!Math) {
  (_easycom_fui_list_cell + _easycom_fui_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.p({
      arrow: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u524D\u7AEF/uni-app/analysis-of-employment-based-on-collaborative-filtering/pages/settings/settings.vue"]]);
wx.createPage(MiniProgramPage);
