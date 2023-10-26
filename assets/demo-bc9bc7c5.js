import { d as defineComponent, _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createTextVNode, b as createVNode } from "./mobile-35fd237a.js";
function createComponent(name) {
  const componentName = "sky-" + name;
  return {
    componentName,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createDemo: function(_component) {
      _component.baseName = name;
      _component.name = "demo-" + name;
      return defineComponent(_component);
    }
  };
}
const { createDemo } = createComponent("button");
const _sfc_main = createDemo({
  setup() {
  }
});
const demo_less_vue_type_style_index_0_src_true_lang = "";
const _hoisted_1 = { class: "demo button-demo" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sky_button = resolveComponent("sky-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createTextVNode(" demo "),
    createVNode(_component_sky_button, { text: "222" })
  ]);
}
const demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  demo as default
};
