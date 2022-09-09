"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "\u8FD9\u662F\u95EE\u5377\u9875\u9762, \u7B49\u95EE\u9898\u7684\u6570\u636E\u7ED3\u6784\u786E\u5B9A\u4E0B\u6765\u540E\u5C31\u53EF\u4EE5\u5F00\u59CB\u5199\u4E86"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Code/\u5F00\u6E90\u9879\u76EE\u9B54\u6539/\u804C\u4E1A\u5206\u6790\u89C4\u5212\u52A9\u624B/pages/questionnaire/questionnaire.vue"]]);
wx.createPage(MiniProgramPage);
