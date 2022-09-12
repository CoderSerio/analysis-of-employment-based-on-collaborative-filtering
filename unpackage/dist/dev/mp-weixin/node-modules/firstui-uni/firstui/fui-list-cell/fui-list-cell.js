"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fui-list-cell",
  emits: ["click"],
  props: {
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx"];
      }
    },
    marginTop: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    background: {
      type: String,
      default: ""
    },
    highlight: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: Boolean,
      default: false
    },
    arrowColor: {
      type: String,
      default: "#B2B2B2"
    },
    topBorder: {
      type: Boolean,
      default: false
    },
    bottomBorder: {
      type: Boolean,
      default: true
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
      default: 32
    },
    bottomRight: {
      type: [Number, String],
      default: 0
    },
    radius: {
      type: String,
      default: "0"
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        index: this.index
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.topBorder
  }, $props.topBorder ? {
    b: $props.borderColor,
    c: $props.topLeft + "rpx",
    d: $props.topRight + "rpx",
    e: !$props.borderColor ? 1 : ""
  } : {}, {
    f: $props.bottomBorder
  }, $props.bottomBorder ? {
    g: $props.borderColor,
    h: $props.bottomLeft + "rpx",
    i: $props.bottomRight + "rpx",
    j: !$props.borderColor ? 1 : ""
  } : {}, {
    k: $props.arrow
  }, $props.arrow ? {
    l: $props.arrowColor
  } : {}, {
    m: $props.highlight ? 1 : "",
    n: !$props.background ? 1 : "",
    o: $props.padding[0] || 0,
    p: $props.padding[1] || 0,
    q: $props.padding[2] || $props.padding[0] || 0,
    r: $props.padding[3] || $props.padding[1] || 0,
    s: $props.background,
    t: $props.marginTop + "rpx",
    v: $props.marginBottom + "rpx",
    w: $props.radius,
    x: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-239493c3"], ["__file", "E:/\u524D\u7AEF/uni-app/analysis-of-employment-based-on-collaborative-filtering/node_modules/firstui-uni/firstui/fui-list-cell/fui-list-cell.vue"]]);
wx.createComponent(Component);
