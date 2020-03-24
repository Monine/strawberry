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

export const getComponentVerticalGuideLines = id =>
  Object.values(store.state.page.components).reduce((pre, cur) => {
    if (id !== cur.id) {
      pre.push(...[cur.x, cur.x + cur.w]);
    }
    return pre;
  }, []);

export const getComponentHorizontalGuideLines = id =>
  Object.values(store.state.page.components).reduce((pre, cur) => {
    if (id !== cur.id) {
      pre.push(...[cur.y, cur.y + cur.h]);
    }
    return pre;
  }, []);
