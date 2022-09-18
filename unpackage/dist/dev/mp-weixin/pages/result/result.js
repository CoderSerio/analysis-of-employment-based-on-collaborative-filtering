"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_request = require("../../utils/request.js");
var pages_result_resultData = require("./resultData.js");
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  _easycom_fui_button2();
}
const _easycom_fui_button = () => "../../node-modules/firstui-uni/firstui/fui-button/fui-button.js";
if (!Math) {
  _easycom_fui_button();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "result",
  setup(__props) {
    const store = common_vendor.useStore();
    let isLoading = common_vendor.ref(true);
    let isShow = common_vendor.ref(true);
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
    const showToast = () => {
      common_vendor.index.showToast({
        title: "\u611F\u8C22\u60A8\u7684\u4F7F\u7528\uFF01",
        duration: 2e3
      });
    };
    const storeData = common_vendor.toRaw(store.state.questionnaireResult);
    const satisfied = () => {
      showToast();
      threshold.result.data.forEach((res) => {
        let num = Math.floor(Math.random() * 6);
        let id = pages_result_resultData.idlist[num];
        let res1 = Object.assign({}, res);
        console.log(res1.name);
        console.log(num);
        console.log(id);
        console.log(res1.threshold[id]);
        res1.threshold[id]++;
        utils_request.request.setThreshold(res.name, res1.threshold);
      });
    };
    const dissatisfied = () => {
      isShow.value = false;
    };
    const updateData = (id) => {
      threshold.result.data.forEach((res) => {
        let res1 = Object.assign({}, res);
        console.log(res.name);
        console.log(id);
        console.log(res1.threshold[id]);
        debugger;
        res1.threshold[id]--;
        utils_request.request.setThreshold(res.name, res1.threshold);
      });
    };
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
      return common_vendor.e({
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
        }),
        d: common_vendor.unref(isShow),
        e: common_vendor.unref(isShow)
      }, common_vendor.unref(isShow) ? {
        f: common_vendor.o(satisfied),
        g: common_vendor.p({
          background: "#00B98D",
          color: "#fff"
        }),
        h: common_vendor.o(dissatisfied),
        i: common_vendor.p({
          background: "#00B98D",
          color: "#fff"
        })
      } : {}, {
        j: !common_vendor.unref(isShow),
        k: !common_vendor.unref(isShow)
      }, !common_vendor.unref(isShow) ? {
        l: common_vendor.f(common_vendor.unref(pages_result_resultData.list), (answer, index, i0) => {
          return common_vendor.e(!common_vendor.unref(isShow) ? {
            a: common_vendor.t(answer.text),
            b: common_vendor.o(($event) => updateData(answer.id)),
            c: "77d1ead4-2-" + i0,
            d: common_vendor.p({
              background: "#00B98D",
              color: "#fff"
            })
          } : {}, {
            e: answer.id
          });
        }),
        m: !common_vendor.unref(isShow)
      } : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u524D\u7AEF\u9879\u76EE/analysis-of-employment-based-on-collaborative-filtering/pages/result/result.vue"]]);
wx.createPage(MiniProgramPage);
