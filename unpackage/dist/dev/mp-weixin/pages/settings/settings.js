"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
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
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      arrow: true
    }),
    b: common_vendor.p({
      arrow: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Code/\u5F00\u6E90\u9879\u76EE\u9B54\u6539/\u804C\u4E1A\u5206\u6790\u89C4\u5212\u52A9\u624B/pages/settings/settings.vue"]]);
wx.createPage(MiniProgramPage);
