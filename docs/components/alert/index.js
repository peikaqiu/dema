import hAlert from './index.vue';

hAlert.install = (Vue) => {
  Vue.component(hAlert.name,hAlert)
}

export default hAlert;
