import store from './store/index';
import { STRAWBERRY_JSON_DATA } from './constants';

/**
 * 保存页面数据到本地
 */
export const saveSandwichPage = () => {
  window.localStorage.setItem(
    STRAWBERRY_JSON_DATA,
    JSON.stringify({
      version: process.env.VUE_APP_VERSION,
      components: store.state.page.components,
    })
  );
};

export const getMoveableControlBoxEl = id =>
  document.querySelector(`.moveable-control-box__${id}`);

export const getActiveMoveableControlBoxEl = () =>
  document.querySelector(`.moveable-control-box.active`);
