"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fui-label",
  props: {
    padding: {
      type: Array,
      default() {
        return [];
      }
    },
    margin: {
      type: Array,
      default() {
        return [];
      }
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.childrens = [];
  },
  methods: {
    onClick() {
      if (this.childrens && this.childrens.length > 0) {
        for (let child of this.childrens) {
          child.labelClick();
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.full ? 1 : "",
    b: $props.padding[0] || 0,
    c: $props.padding[1] || 0,
    d: $props.padding[2] || $props.padding[0] || 0,
    e: $props.padding[3] || $props.padding[1] || 0,
    f: $props.margin[0] || 0,
    g: $props.margin[1] || 0,
    h: $props.margin[2] || $props.margin[0] || 0,
    i: $props.margin[3] || $props.margin[1] || 0,
    j: common_vendor.o((...args) => $options.onClick && $options.onClick(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d3cdf1ee"], ["__file", "F:/Code/\u5F00\u6E90\u9879\u76EE\u9B54\u6539/\u804C\u4E1A\u5206\u6790\u89C4\u5212\u52A9\u624B/node_modules/firstui-uni/firstui/fui-label/fui-label.vue"]]);
wx.createComponent(Component);
