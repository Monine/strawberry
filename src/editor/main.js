import './element-ui';
import './register-rem';
import Vue from 'vue';
import store from './store/index';
import App from './App.vue';
import SvgIcon from '@/common/svg-icon/index';
import Renderer from '@/renderer/main';
import { STRAWBERRY_JSON_DATA } from './constants';
import { SET_COMPONENTS } from './store/mutation-types';

Vue.use(SvgIcon);
Vue.use(Renderer);

const data = window.localStorage.getItem(STRAWBERRY_JSON_DATA);
if (data) {
  const { components } = JSON.parse(data);
  store.commit(SET_COMPONENTS, components);
}

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
