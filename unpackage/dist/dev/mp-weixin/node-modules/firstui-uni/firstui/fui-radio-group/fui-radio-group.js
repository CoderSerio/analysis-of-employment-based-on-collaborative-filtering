"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fui-radio-group",
  emits: ["change", "input", "update:modelValue"],
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      val: ""
    };
  },
  watch: {
    modelValue(val) {
      this.modelChange(val);
    },
    value(val) {
      this.modelChange(val);
    }
  },
  created() {
    this.childrens = [];
  },
  methods: {
    radioChange(e) {
      this.$emit("change", e);
      this.$emit("input", e.detail.value);
      this.$emit("update:modelValue", e.detail.value);
    },
    changeValue(value, target) {
      this.val = value;
      this.childrens.forEach((item) => {
        if (item !== target) {
          item.val = false;
        }
      });
      let e = {
        detail: {
          value
        }
      };
      this.radioChange(e);
    },
    modelChange(val) {
      this.childrens.forEach((item) => {
        if (item.value === val) {
          item.val = true;
        } else {
          item.val = false;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_fui_form_field2 = common_vendor.resolveComponent("fui-form-field");
  _easycom_fui_form_field2();
}
const _easycom_fui_form_field = () => "../fui-form-field/fui-form-field.js";
if (!Math) {
  _easycom_fui_form_field();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: $props.name,
      value: $data.val
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u524D\u7AEF/uni-app/analysis-of-employment-based-on-collaborative-filtering/node_modules/firstui-uni/firstui/fui-radio-group/fui-radio-group.vue"]]);
wx.createComponent(Component);
