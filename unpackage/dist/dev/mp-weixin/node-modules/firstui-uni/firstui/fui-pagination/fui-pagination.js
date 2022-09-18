"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fui-pagination",
  emits: ["change"],
  props: {
    prevText: {
      type: String,
      default: "\u4E0A\u4E00\u9875"
    },
    nextText: {
      type: String,
      default: "\u4E0B\u4E00\u9875"
    },
    width: {
      type: [Number, String],
      default: 160
    },
    height: {
      type: [Number, String],
      default: 64
    },
    borderColor: {
      type: String,
      default: "transparent"
    },
    background: {
      type: String,
      default: "#fff"
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 28
    },
    radius: {
      type: [Number, String],
      default: -1
    },
    highlight: {
      type: Boolean,
      default: true
    },
    custom: {
      type: Boolean,
      default: false
    },
    current: {
      type: [Number, String],
      default: 1
    },
    currentColor: {
      type: String,
      default: ""
    },
    pageColor: {
      type: String,
      default: ""
    },
    pageFontSize: {
      type: [Number, String],
      default: 36
    },
    isPage: {
      type: Boolean,
      default: true
    },
    total: {
      type: [Number, String],
      default: 0
    },
    pageSize: {
      type: [Number, String],
      default: 10
    }
  },
  computed: {
    maxPage() {
      let maxPage = 1;
      let total = Number(this.total);
      let pageSize = Number(this.pageSize);
      if (total && pageSize) {
        maxPage = Math.ceil(total / pageSize);
      }
      return maxPage;
    }
  },
  watch: {
    current(val) {
      this.currentIndex = +val;
    }
  },
  created() {
    this.currentIndex = +this.current;
  },
  data() {
    return {
      currentIndex: 1
    };
  },
  methods: {
    clickPrev() {
      if (Number(this.currentIndex) === 1)
        return;
      this.currentIndex -= 1;
      this.change("prev");
    },
    clickNext() {
      if (Number(this.currentIndex) === this.maxPage)
        return;
      this.currentIndex += 1;
      this.change("next");
    },
    change(e) {
      this.$emit("change", {
        type: e,
        current: this.currentIndex
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.custom
  }, !$props.custom ? {
    b: common_vendor.t($props.prevText),
    c: !$props.color ? 1 : "",
    d: $props.color,
    e: $props.size + "rpx"
  } : {}, {
    f: $data.currentIndex === 1 ? 1 : "",
    g: $data.currentIndex !== 1 && $props.highlight ? 1 : "",
    h: !$props.color ? 1 : "",
    i: $props.width + "rpx",
    j: $props.height + "rpx",
    k: $props.borderColor,
    l: $props.background,
    m: ($props.radius == -1 ? $props.height : $props.radius) + "rpx",
    n: common_vendor.o((...args) => $options.clickPrev && $options.clickPrev(...args)),
    o: $props.isPage
  }, $props.isPage ? {
    p: common_vendor.t($data.currentIndex),
    q: !$props.currentColor ? 1 : "",
    r: $props.currentColor,
    s: $props.pageFontSize + "rpx",
    t: common_vendor.t($options.maxPage || 0),
    v: !$props.pageColor ? 1 : "",
    w: $props.pageColor,
    x: $props.pageFontSize + "rpx"
  } : {}, {
    y: !$props.custom
  }, !$props.custom ? {
    z: common_vendor.t($props.nextText),
    A: !$props.color ? 1 : "",
    B: $props.color,
    C: $props.size + "rpx"
  } : {}, {
    D: $data.currentIndex === $options.maxPage ? 1 : "",
    E: $data.currentIndex !== $options.maxPage && $props.highlight ? 1 : "",
    F: !$props.color ? 1 : "",
    G: $props.width + "rpx",
    H: $props.height + "rpx",
    I: $props.borderColor,
    J: $props.background,
    K: ($props.radius == -1 ? $props.height : $props.radius) + "rpx",
    L: common_vendor.o((...args) => $options.clickNext && $options.clickNext(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6abe38a5"], ["__file", "F:/\u524D\u7AEF\u9879\u76EE/analysis-of-employment-based-on-collaborative-filtering/node_modules/firstui-uni/firstui/fui-pagination/fui-pagination.vue"]]);
wx.createComponent(Component);
