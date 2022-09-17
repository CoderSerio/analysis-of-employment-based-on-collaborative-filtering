"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_request = require("../../utils/request.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "result",
  setup(__props) {
    let isLoading = common_vendor.ref(true);
    const handleGetThreshold = async () => {
      isLoading.value = true;
      const res = await utils_request.request.getThreshold();
      isLoading.value = false;
      console.log("\u67E5\u8BE2\u7684\u7ED3\u679C", res);
    };
    common_vendor.onMounted(() => {
      handleGetThreshold();
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/Code/\u5F00\u6E90\u9879\u76EE\u9B54\u6539/\u804C\u4E1A\u5206\u6790\u89C4\u5212\u52A9\u624B/pages/result/result.vue"]]);
wx.createPage(MiniProgramPage);
