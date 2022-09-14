"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_questionnaire_questionsData = require("./questionsData.js");
require("./types.js");
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_radio2 = common_vendor.resolveComponent("fui-radio");
  const _easycom_fui_label2 = common_vendor.resolveComponent("fui-label");
  const _easycom_fui_radio_group2 = common_vendor.resolveComponent("fui-radio-group");
  const _easycom_fui_pagination2 = common_vendor.resolveComponent("fui-pagination");
  const _easycom_fui_bottom_popup2 = common_vendor.resolveComponent("fui-bottom-popup");
  const _easycom_fui_toast2 = common_vendor.resolveComponent("fui-toast");
  (_easycom_fui_icon2 + _easycom_fui_radio2 + _easycom_fui_label2 + _easycom_fui_radio_group2 + _easycom_fui_pagination2 + _easycom_fui_bottom_popup2 + _easycom_fui_toast2)();
}
const _easycom_fui_icon = () => "../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _easycom_fui_radio = () => "../../node-modules/firstui-uni/firstui/fui-radio/fui-radio.js";
const _easycom_fui_label = () => "../../node-modules/firstui-uni/firstui/fui-label/fui-label.js";
const _easycom_fui_radio_group = () => "../../node-modules/firstui-uni/firstui/fui-radio-group/fui-radio-group.js";
const _easycom_fui_pagination = () => "../../node-modules/firstui-uni/firstui/fui-pagination/fui-pagination.js";
const _easycom_fui_bottom_popup = () => "../../node-modules/firstui-uni/firstui/fui-bottom-popup/fui-bottom-popup.js";
const _easycom_fui_toast = () => "../../node-modules/firstui-uni/firstui/fui-toast/fui-toast.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_radio + _easycom_fui_label + _easycom_fui_radio_group + _easycom_fui_pagination + _easycom_fui_bottom_popup + _easycom_fui_toast)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "questionnaire",
  setup(__props) {
    const answers = ["\u975E\u5E38\u7B26\u5408\u6211\u7684\u60C5\u51B5", "\u6BD4\u8F83\u7B26\u5408\u6211\u7684\u60C5\u51B5", "\u4E0D\u592A\u7B26\u5408\u6211\u7684\u60C5\u51B5", "\u975E\u5E38\u4E0D\u7B26\u5408\u6211\u7684\u60C5\u51B5"];
    let currentQuestion = common_vendor.ref(pages_questionnaire_questionsData.questions[0]);
    let currentPage = 1;
    let checkedAnswer = common_vendor.ref(null);
    let showMenu = common_vendor.ref(false);
    let submit = common_vendor.ref(null);
    let submitCheck = common_vendor.ref(false);
    const answerCheck = (event) => {
      console.log(typeof event, event);
      pages_questionnaire_questionsData.questions[currentQuestion.value.id - 1].value = Number(event.detail.value);
    };
    const changePage = (page) => {
      currentPage = page.current;
      currentQuestion.value = pages_questionnaire_questionsData.questions[currentPage - 1];
      checkedAnswer.value = pages_questionnaire_questionsData.questions[currentPage - 1].value;
    };
    const flyPage = (page) => {
      currentPage = page;
      currentQuestion.value = pages_questionnaire_questionsData.questions[currentPage - 1];
      checkedAnswer.value = pages_questionnaire_questionsData.questions[currentPage - 1].value;
      showMenu.value = false;
    };
    const submitData = () => {
      let isok = true;
      for (let i = 0; i < pages_questionnaire_questionsData.questions.length; i++) {
        if (pages_questionnaire_questionsData.questions[i].value == void 0) {
          isok = false;
          break;
        }
      }
      submitCheck.value = isok;
      submit.value.show({});
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          name: "menu"
        }),
        b: common_vendor.o(($event) => common_vendor.isRef(showMenu) ? showMenu.value = true : showMenu = true),
        c: common_vendor.o(submitData),
        d: common_vendor.t(common_vendor.unref(currentQuestion).id),
        e: common_vendor.t(common_vendor.unref(currentQuestion).title),
        f: common_vendor.f(answers, (answer, index, i0) => {
          return {
            a: common_vendor.t(answer),
            b: "6ae934ce-3-" + i0 + "," + ("6ae934ce-2-" + i0),
            c: common_vendor.p({
              value: String(index + 1),
              scaleRatio: "1.2"
            }),
            d: index,
            e: "6ae934ce-2-" + i0 + ",6ae934ce-1"
          };
        }),
        g: common_vendor.o(answerCheck),
        h: common_vendor.o(($event) => common_vendor.isRef(checkedAnswer) ? checkedAnswer.value = $event : checkedAnswer = $event),
        i: common_vendor.p({
          modelValue: common_vendor.unref(checkedAnswer)
        }),
        j: common_vendor.o(changePage),
        k: common_vendor.p({
          total: 10 * common_vendor.unref(pages_questionnaire_questionsData.questions).length,
          size: "32",
          prevText: "\u4E0A\u4E00\u9898",
          nextText: "\u4E0B\u4E00\u9898",
          current: common_vendor.unref(currentPage),
          color: "white",
          background: "rgb(0, 185, 141)"
        }),
        l: common_vendor.f(common_vendor.unref(pages_questionnaire_questionsData.questions).length, (num, k0, i0) => {
          return {
            a: common_vendor.t(num),
            b: common_vendor.o(($event) => flyPage(num)),
            c: common_vendor.n("question-button " + (common_vendor.unref(pages_questionnaire_questionsData.questions)[num - 1].value ? "question-button-active" : "question-button-normal")),
            d: num
          };
        }),
        m: common_vendor.o(($event) => common_vendor.isRef(showMenu) ? showMenu.value = false : showMenu = false),
        n: common_vendor.p({
          show: common_vendor.unref(showMenu)
        }),
        o: common_vendor.unref(submitCheck)
      }, common_vendor.unref(submitCheck) ? {
        p: common_vendor.p({
          name: "checkbox",
          color: "#fff"
        })
      } : {
        q: common_vendor.p({
          name: "clear",
          color: "#fff"
        })
      }, {
        r: common_vendor.sr(submit, "6ae934ce-6", {
          "k": "submit"
        })
      });
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6ae934ce"], ["__file", "F:/Code/\u5F00\u6E90\u9879\u76EE\u9B54\u6539/\u804C\u4E1A\u5206\u6790\u89C4\u5212\u52A9\u624B/pages/questionnaire/questionnaire.vue"]]);
wx.createPage(MiniProgramPage);
