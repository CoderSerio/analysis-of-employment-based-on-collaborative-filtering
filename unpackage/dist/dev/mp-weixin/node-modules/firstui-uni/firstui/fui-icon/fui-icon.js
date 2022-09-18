"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fui-icon",
  emits: ["click"],
  options: {
    addGlobalClass: true
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 64
    },
    unit: {
      type: String,
      default: "rpx"
    },
    color: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    params: {
      type: [Number, String],
      default: 0
    },
    customPrefix: {
      type: String,
      default: ""
    },
    primary: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      icons: common_vendor.icons
    };
  },
  methods: {
    handleClick() {
      if (this.disabled)
        return;
      this.$emit("click", {
        params: this.params
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.icons[$props.name] || ""),
    b: $props.color,
    c: $props.size + $props.unit,
    d: $props.fontWeight,
    e: common_vendor.n(!$props.color && !$props.primary ? "fui-icon__color" : ""),
    f: common_vendor.n($props.primary && !$props.color ? "fui-icon__active-color" : ""),
    g: common_vendor.n($props.disabled ? "fui-icon__not-allowed" : ""),
    h: common_vendor.n($props.customPrefix),
    i: common_vendor.n($props.customPrefix ? $props.name : ""),
    j: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ec55dbf6"], ["__file", "F:/\u524D\u7AEF\u9879\u76EE/analysis-of-employment-based-on-collaborative-filtering/node_modules/firstui-uni/firstui/fui-icon/fui-icon.vue"]]);
wx.createComponent(Component);
