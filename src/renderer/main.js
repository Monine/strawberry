import Renderer from './components/Renderer.vue';

export default {
  install(Vue) {
    Vue.component(Renderer.name, Renderer);
  },
};
