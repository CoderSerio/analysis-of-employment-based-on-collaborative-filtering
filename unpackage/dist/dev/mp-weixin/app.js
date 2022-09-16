"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
require("./store/index.js");
if (!Math) {
  "./pages/main/main.js";
  "./pages/questionnaire/questionnaire.js";
  "./pages/apesk/apesk.js";
  "./pages/result/result.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/Code/\u5F00\u6E90\u9879\u76EE\u9B54\u6539/\u804C\u4E1A\u5206\u6790\u89C4\u5212\u52A9\u624B/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
