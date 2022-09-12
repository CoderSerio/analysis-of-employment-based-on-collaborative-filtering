"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fui-list",
  props: {
    marginTop: {
      type: [Number, String],
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#7F7F7F"
    },
    size: {
      type: [Number, String],
      default: 28
    },
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx", "20rpx", "32rpx"];
      }
    },
    background: {
      type: String,
      default: "transparent"
    },
    footer: {
      type: String,
      default: ""
    },
    footerColor: {
      type: String,
      default: "#7F7F7F"
    },
    footerSize: {
      type: [Number, String],
      default: 28
    },
    footerPadding: {
      type: Array,
      default() {
        return ["20rpx", "32rpx", "0"];
      }
    },
    topBorder: {
      type: Boolean,
      default: true
    },
    bottomBorder: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: ""
    },
    topLeft: {
      type: [Number, String],
      default: 0
    },
    topRight: {
      type: [Number, String],
      default: 0
    },
    bottomLeft: {
      type: [Number, String],
      default: 0
    },
    bottomRight: {
      type: [Number, String],
      default: 0
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.title
  }, $props.title ? {
    b: common_vendor.t($props.title),
    c: $props.color,
    d: $props.size + "rpx",
    e: $props.padding[0] || 0,
    f: $props.padding[1] || 0,
    g: $props.padding[2] || $props.padding[0] || 0,
    h: $props.padding[3] || $props.padding[1] || 0,
    i: $props.background
  } : {}, {
    j: $props.topBorder
  }, $props.topBorder ? {
    k: $props.borderColor,
    l: $props.topLeft + "rpx",
    m: $props.topRight + "rpx",
    n: !$props.borderColor ? 1 : ""
  } : {}, {
    o: $props.bottomBorder
  }, $props.bottomBorder ? {
    p: $props.borderColor,
    q: $props.bottomLeft + "rpx",
    r: $props.bottomRight + "rpx",
    s: !$props.borderColor ? 1 : ""
  } : {}, {
    t: $props.footer
  }, $props.footer ? {
    v: common_vendor.t($props.footer),
    w: $props.footerColor,
    x: $props.footerSize + "rpx",
    y: $props.footerPadding[0] || 0,
    z: $props.footerPadding[1] || 0,
    A: $props.footerPadding[2] || $props.footerPadding[0] || 0,
    B: $props.footerPadding[3] || $props.footerPadding[1] || 0
  } : {}, {
    C: $props.marginTop + "rpx"
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-17e1c8b6"], ["__file", "E:/\u524D\u7AEF/uni-app/analysis-of-employment-based-on-collaborative-filtering/node_modules/firstui-uni/firstui/fui-list/fui-list.vue"]]);
wx.createComponent(Component);
