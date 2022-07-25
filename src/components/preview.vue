<template>
  <div class="pre-code-box">
    <transition name="slide-fade">
      <pre
        class="language-html"
        v-if="showCode"
        v-highlight
      >
        <code class="language-html">{{ sourceCode }}</code>
      </pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <i :class="iconClass"></i>
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  compName: {
    type: String,
    default: "",
    require: true,
  },
  demoName: {
    type: String,
    default: "",
    require: true,
  },
});

const showCode = ref(false);
const sourceCode = ref("");
const isDev = import.meta.env.MODE === 'development';

const iconClass = computed(() => {
  return [
    'iconfont',
    showCode.value ? 'icon-arrow-up-filling' : 'icon-arrow-down-filling'
  ]
})

const showOrhideCode = () => {
  showCode.value = !showCode.value;
}

const getSourceCode = async () => {
  if(isDev) {

    sourceCode.value = (
          //加 @vite-ignore 的注释是因为 Vite 基于 Rollup，在 Rollup 当中动态 import 是被要求传入确定的路径，不能是这种动态拼接的路径。具体原因和其静态分析有关
          await import(/* @vite-ignore */ `../../packages/components/${props.compName}/doc/${props.demoName}.vue?raw`)
        ).default;
    // let msg = await import(/* @vite-ignore */ `/packages/components/${props.compName}/doc/${props.demoName}.vue?raw`)
    // sourceCode.value = msg.default
  } else {
    sourceCode.value = await fetch(`/dema/components/${props.compName}/doc/${props.demoName}.vue`).then(res => res.text());
  }
}

onMounted(() => {
  getSourceCode()
})

</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}
.pre-code-box{
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  position: relative;
  transition: all 0.15s ease-out;
  &:hover {
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
  }
  pre{
    margin-top: -15px;
    margin-bottom: 0;
  }
  .showCode{
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    background: #f9f9f9;
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #f9f9f9;
      color: #0e80eb;
    }
    span{
      margin-left: 10px;
    }
  }
}
</style>
