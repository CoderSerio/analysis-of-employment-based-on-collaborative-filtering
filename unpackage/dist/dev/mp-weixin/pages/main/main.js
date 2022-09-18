"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  _easycom_fui_button2();
}
const _easycom_fui_button = () => "../../node-modules/firstui-uni/firstui/fui-button/fui-button.js";
if (!Math) {
  _easycom_fui_button();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "main",
  setup(__props) {
    const toQuestionnaire = () => {
      common_vendor.index.navigateTo({
        url: "/pages/questionnaire/questionnaire"
      });
    };
    const toApeskTest = () => {
      common_vendor.index.navigateTo({
        url: "/pages/apesk/apesk"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toQuestionnaire),
        b: common_vendor.o(toApeskTest)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/Code/\u5F00\u6E90\u9879\u76EE\u9B54\u6539/\u804C\u4E1A\u5206\u6790\u89C4\u5212\u52A9\u624B/pages/main/main.vue"]]);
wx.createPage(MiniProgramPage);
