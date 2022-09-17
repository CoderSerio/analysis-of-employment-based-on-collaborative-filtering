"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_request = require("../../utils/request.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "result",
  setup(__props) {
    const store = common_vendor.useStore();
    let isLoading = common_vendor.ref(true);
    let result = common_vendor.reactive({
      type: "",
      value: -999
    });
    const storeData = common_vendor.toRaw(store.state.questionnaireResult);
    const handleGetThreshold = async () => {
      isLoading.value = true;
      const threshold = await utils_request.request.getThreshold();
      Object.keys(storeData).forEach((key) => {
        if (!result.type) {
          result.value = storeData[key];
          result.type = key;
        } else {
          if (storeData[key] > result.value) {
            result.value = storeData[key];
            result.type = key;
          }
        }
      });
      switch (result.type) {
        case "R":
          result.type = "\u73B0\u5B9E\u578B";
          break;
        case "E":
          result.type = "\u4F01\u4E1A\u578B";
          break;
        case "S":
          result.type = "\u793E\u4F1A\u578B";
          break;
        case "I":
          result.type = "\u79D1\u6280\u578B";
          break;
        case "C":
          result.type = "\u7EFC\u5408\u578B";
          break;
        case "A":
          result.type = "\u827A\u672F\u578B";
          break;
      }
      console.log("threshold", threshold);
      isLoading.value = false;
    };
    common_vendor.onMounted(() => {
      handleGetThreshold();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(result).type)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/Code/\u5F00\u6E90\u9879\u76EE\u9B54\u6539/\u804C\u4E1A\u5206\u6790\u89C4\u5212\u52A9\u624B/pages/result/result.vue"]]);
wx.createPage(MiniProgramPage);
