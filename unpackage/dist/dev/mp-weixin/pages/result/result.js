"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_request = require("../../utils/request.js");
var pages_result_resultData = require("./resultData.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "result",
  setup(__props) {
    const store = common_vendor.useStore();
    let isLoading = common_vendor.ref(true);
    let threshold = common_vendor.reactive({
      result: {
        data: []
      }
    });
    let result = common_vendor.reactive({
      type: "",
      value: -999,
      description: ""
    });
    const storeData = common_vendor.toRaw(store.state.questionnaireResult);
    const handleGetThreshold = async () => {
      isLoading.value = true;
      threshold = await utils_request.request.getThreshold();
      threshold.result.data = threshold.result.data.filter((one) => {
        return storeData.R >= one.threshold.R && storeData.E >= one.threshold.E && storeData.S >= one.threshold.S && storeData.I >= one.threshold.I && storeData.C >= one.threshold.C && storeData.A >= one.threshold.A;
      });
      if (!threshold.result.data.length) {
        threshold.result.data.push({
          name: "\u5176\u4ED6\u804C\u4E1A",
          description: "\u662F\u975E\u5E38\u7279\u6B8A\u7684\u6027\u683C"
        });
      }
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
      result.description = pages_result_resultData.resultDescription[result.type];
      result.type = pages_result_resultData.translateToCN[result.type];
      console.log("threshold", threshold);
      isLoading.value = false;
    };
    common_vendor.onMounted(() => {
      handleGetThreshold();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(result).type),
        b: common_vendor.f(common_vendor.unref(result).description, (desc, k0, i0) => {
          return {
            a: common_vendor.t(desc)
          };
        }),
        c: common_vendor.f(common_vendor.unref(threshold).result.data, (one, k0, i0) => {
          return {
            a: common_vendor.t(one.name),
            b: common_vendor.t(one.description)
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/Code/\u5F00\u6E90\u9879\u76EE\u9B54\u6539/\u804C\u4E1A\u5206\u6790\u89C4\u5212\u52A9\u624B/pages/result/result.vue"]]);
wx.createPage(MiniProgramPage);
