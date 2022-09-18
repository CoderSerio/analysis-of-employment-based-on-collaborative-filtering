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
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u524D\u7AEF\u9879\u76EE/analysis-of-employment-based-on-collaborative-filtering/pages/main/main.vue"]]);
wx.createPage(MiniProgramPage);
