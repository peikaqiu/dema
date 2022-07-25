import {
  createApp
} from 'vue'
import App from './App.vue'
import router from "./router";

// 引入全局样式
import './styles/index.scss';

import dema from "../packages/index";

import Preview from './components/Preview.vue';

import hljs from "highlight.js";
import "highlight.js/styles/gml.css";

const app = createApp(App);
app.use(router)
app.component('Preview', Preview)
app.use(dema)
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.mount('#app')