import './element-ui';
import Vue from 'vue';
import store from './store/index';
import App from './App.vue';
import SvgIcon from '@/common/svg-icon/index';
import Renderer from '@/renderer/main';
import { STRAWBERRY_JSON_DATA, MOBILE_PHONE_HEIGHT } from './constants';
import {
  SET_COMPONENTS,
  UPDATE_EDIT_AREA_DRAG_HEIGHT,
} from './store/mutation-types';

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

let knobing = '';
window.addEventListener('mousedown', e => {
  if (e.target.dataset.knob) {
    knobing = e.target.dataset.knob;
  }
});

window.addEventListener('mousemove', e => {
  let h = store.getters.editAreaHeight;
  if ('top' === knobing) {
    h -= e.movementY;
  } else if ('bottom' === knobing) {
    h += e.movementY;
  }
  if (h > MOBILE_PHONE_HEIGHT) {
    store.commit(UPDATE_EDIT_AREA_DRAG_HEIGHT, h);
  }
});

window.addEventListener('mouseup', () => {
  if (knobing) knobing = '';
});
