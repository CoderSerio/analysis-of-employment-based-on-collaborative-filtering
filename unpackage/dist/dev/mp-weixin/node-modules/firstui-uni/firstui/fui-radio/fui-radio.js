"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fui-radio",
  emits: ["change"],
  options: {
    virtualHost: true
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: "#ccc"
    },
    borderRadius: {
      type: String,
      default: "50%"
    },
    isCheckMark: {
      type: Boolean,
      default: false
    },
    checkMarkColor: {
      type: String,
      default: "#fff"
    },
    scaleRatio: {
      type: [Number, String],
      default: 1
    }
  },
  created() {
    this.val = this.checked;
    this.group = this.getParent();
    if (this.group) {
      this.group.childrens.push(this);
      if (this.group.value) {
        this.val = this.value === this.group.value;
      }
      if (this.group.modelValue) {
        this.val = this.value === this.group.modelValue;
      }
    }
    this.label = this.getParent("fui-label");
    if (this.label) {
      this.label.childrens.push(this);
    }
  },
  watch: {
    checked(newVal) {
      this.val = newVal;
    },
    val(newVal) {
      if (newVal && this.group) {
        this.group.changeValue(this.value, this);
      }
    }
  },
  data() {
    let isNvue = false;
    return {
      val: false,
      isNvue
    };
  },
  methods: {
    getBackgroundColor(val, isCheckMark) {
      let color = val ? this.color : "#fff";
      if (isCheckMark) {
        color = "transparent";
      }
      return color;
    },
    getBorderColor(val, isCheckMark) {
      let color = val ? this.color : this.borderColor;
      if (isCheckMark) {
        color = "transparent";
      }
      return color;
    },
    radioChange(e) {
      if (this.disabled || this.val)
        return;
      this.val = true;
      this.$emit("change", {
        checked: this.val,
        value: this.value
      });
    },
    getParent(name = "fui-radio-group") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    labelClick() {
      this.radioChange();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.val
  }, $data.val ? {
    b: $props.checkMarkColor,
    c: $props.checkMarkColor
  } : {}, {
    d: $props.color,
    e: $props.disabled,
    f: $props.value,
    g: $data.val,
    h: $props.disabled ? 1 : "",
    i: !$props.color && $data.val && !$props.isCheckMark ? 1 : "",
    j: $options.getBackgroundColor($data.val, $props.isCheckMark),
    k: $options.getBorderColor($data.val, $props.isCheckMark),
    l: $data.isNvue ? 1 : $props.scaleRatio,
    m: `scale(${$data.isNvue ? $props.scaleRatio : 1})`,
    n: $props.borderRadius,
    o: common_vendor.o((...args) => $options.radioChange && $options.radioChange(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f0ad0552"], ["__file", "F:/\u524D\u7AEF\u9879\u76EE/analysis-of-employment-based-on-collaborative-filtering/node_modules/firstui-uni/firstui/fui-radio/fui-radio.vue"]]);
wx.createComponent(Component);
