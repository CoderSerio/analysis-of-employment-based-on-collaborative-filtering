"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fui-button",
  emits: ["click", "getuserinfo", "contact", "getphonenumber", "error", "opensetting"],
  props: {
    type: {
      type: String,
      default: "primary"
    },
    background: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    disabledBackground: {
      type: String,
      default: ""
    },
    disabledColor: {
      type: String,
      default: ""
    },
    borderWidth: {
      type: String,
      default: "1px"
    },
    borderColor: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 0
    },
    bold: {
      type: Boolean,
      default: false
    },
    margin: {
      type: Array,
      default() {
        return ["0", "0"];
      }
    },
    radius: {
      type: String,
      default: ""
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    formType: {
      type: String,
      default: ""
    },
    openType: {
      type: String,
      default: ""
    },
    scope: {
      type: String,
      default: ""
    },
    index: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getBackground() {
      return "transparent";
    },
    getColor() {
      let color = "#fff";
      if (this.color) {
        color = this.disabled && this.disabledBackground ? this.disabledColor : this.color;
      } else {
        if (this.disabled && this.disabledBackground) {
          color = this.disabledColor || "#FFFFFF";
        } else {
          color = this.type === "gray" ? "#465CFF" : "#FFFFFF";
        }
      }
      return color;
    },
    getSize() {
      const size = common_vendor.index.$fui && common_vendor.index.$fui.fuiButton && common_vendor.index.$fui.fuiButton.size || 32;
      return `${this.size || size}rpx`;
    },
    getHeight() {
      const height = common_vendor.index.$fui && common_vendor.index.$fui.fuiButton && common_vendor.index.$fui.fuiButton.height || "96rpx";
      return this.height || height;
    },
    getBorderRadius() {
      let radius = common_vendor.index.$fui && common_vendor.index.$fui.fuiButton && common_vendor.index.$fui.fuiButton.radius || "16rpx";
      radius = this.radius || radius || "0";
      if (~radius.indexOf("rpx")) {
        radius = Number(radius.replace("rpx", "")) * 2 + "rpx";
      } else if (~radius.indexOf("px")) {
        radius = Number(radius.replace("px", "")) * 2 + "px";
      } else if (~radius.indexOf("%")) {
        radius = Number(radius.replace("%", "")) * 2 + "%";
      }
      return radius;
    },
    getRadius() {
      const radius = common_vendor.index.$fui && common_vendor.index.$fui.fuiButton && common_vendor.index.$fui.fuiButton.radius || "16rpx";
      return this.radius || radius;
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      time: 0,
      trigger: false,
      pc: false
    };
  },
  created() {
  },
  methods: {
    handleStart(e) {
      if (this.disabled)
        return;
      this.trigger = false;
      if (new Date().getTime() - this.time <= 150)
        return;
      this.trigger = true;
      this.time = new Date().getTime();
    },
    handleClick() {
      if (this.disabled || !this.trigger)
        return;
      this.time = 0;
    },
    handleTap() {
      if (this.disabled)
        return;
      this.$emit("click", {
        index: Number(this.index)
      });
    },
    handleEnd(e) {
      if (this.disabled)
        return;
      setTimeout(() => {
        this.time = 0;
      }, 150);
    },
    bindgetuserinfo({
      detail = {}
    } = {}) {
      this.$emit("getuserinfo", detail);
    },
    bindcontact({
      detail = {}
    } = {}) {
      this.$emit("contact", detail);
    },
    bindgetphonenumber({
      detail = {}
    } = {}) {
      this.$emit("getphonenumber", detail);
    },
    binderror({
      detail = {}
    } = {}) {
      this.$emit("error", detail);
    },
    bindopensetting({
      detail = {}
    } = {}) {
      this.$emit("opensetting", detail);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.text
  }, $props.text ? {
    b: common_vendor.t($props.text),
    c: !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff" ? 1 : "",
    d: $props.bold ? 1 : "",
    e: $options.getSize,
    f: $options.getSize,
    g: $props.color ? $props.disabled && $props.disabledBackground ? $props.disabledColor : $props.color : $props.type === "gray" ? "#465CFF" : "#FFFFFF"
  } : {}, {
    h: common_vendor.n($props.bold ? "fui-text__bold" : ""),
    i: common_vendor.n($data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : ""),
    j: common_vendor.n($props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""),
    k: common_vendor.n(!$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : ""),
    l: common_vendor.n(!$props.width || $props.width === "100%" || $props.width === true ? "fui-button__flex-1" : ""),
    m: common_vendor.n($data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : ""),
    n: common_vendor.n($props.disabled ? "" : "fui-button__nvue"),
    o: common_vendor.n($data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""),
    p: $props.width,
    q: $options.getHeight,
    r: $options.getHeight,
    s: $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.plain ? "transparent" : $props.background,
    t: !$props.borderColor || !$data.isNvue ? "0" : $props.borderWidth,
    v: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent",
    w: $options.getRadius,
    x: $options.getSize,
    y: $options.getColor,
    z: $props.loading,
    A: $props.formType,
    B: $props.openType,
    C: common_vendor.o((...args) => $options.bindgetuserinfo && $options.bindgetuserinfo(...args)),
    D: common_vendor.o((...args) => $options.bindgetphonenumber && $options.bindgetphonenumber(...args)),
    E: common_vendor.o((...args) => $options.bindcontact && $options.bindcontact(...args)),
    F: common_vendor.o((...args) => $options.binderror && $options.binderror(...args)),
    G: common_vendor.o((...args) => $options.bindopensetting && $options.bindopensetting(...args)),
    H: $props.disabled,
    I: $props.scope,
    J: common_vendor.o((...args) => $options.handleTap && $options.handleTap(...args)),
    K: $props.borderColor
  }, $props.borderColor ? {
    L: common_vendor.n($data.time && ($props.plain || $props.type === "link") && !$props.disabled ? "fui-button__opacity" : ""),
    M: common_vendor.n($props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""),
    N: $props.borderWidth,
    O: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent",
    P: $options.getBorderRadius
  } : {}, {
    Q: common_vendor.n(!$props.width || $props.width === "100%" || $props.width === true ? "fui-button__flex-1" : ""),
    R: $props.width,
    S: $options.getHeight,
    T: $props.margin[0] || 0,
    U: $props.margin[1] || 0,
    V: $props.margin[2] || $props.margin[0] || 0,
    W: $props.margin[3] || $props.margin[1] || 0,
    X: $options.getRadius,
    Y: $options.getBackground,
    Z: common_vendor.o((...args) => $options.handleStart && $options.handleStart(...args)),
    aa: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    ab: common_vendor.o((...args) => $options.handleEnd && $options.handleEnd(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6c80c8a5"], ["__file", "F:/\u524D\u7AEF\u9879\u76EE/analysis-of-employment-based-on-collaborative-filtering/node_modules/firstui-uni/firstui/fui-button/fui-button.vue"]]);
wx.createComponent(Component);
