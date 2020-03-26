import { MOBILE_PHONE_HEIGHT } from '../constants';
import {
  SET_ACTIVE_COMPONENT_ID,
  UPDATE_COMPONENT,
  SET_COMPONENTS,
  UPDATE_EDIT_AREA_DRAG_HEIGHT,
} from './mutation-types';

export default {
  state: {
    activeComponentId: '',
    meta: {
      id: 'meta',
    },
    editAreaDragHeight: MOBILE_PHONE_HEIGHT,
    components: {
      '7b1a78d94bd14771': {
        id: '7b1a78d94bd14771',
        type: 'picture',
        w: 100,
        h: 100,
        x: 0,
        y: 0,
        src: {
          url:
            'https://p3-tt.byteimg.com/img/ad-tetris-site/file/1571622616923/fa6b3c97ebaad8fb822be74e612d1a86~noop.image',
        },
      },
      '7b1a78d94bd14772': {
        id: '7b1a78d94bd14772',
        type: 'picture',
        w: 100,
        h: 100,
        x: 100,
        y: 100,
        src: {
          url:
            'https://p3-tt.byteimg.com/img/ad-tetris-site/file/1571622616923/fa6b3c97ebaad8fb822be74e612d1a86~noop.image',
        },
      },
    },
  },

  getters: {
    editAreaHeight: state =>
      Math.max(
        state.editAreaDragHeight,
        Object.values(state.components).reduce(
          (pre, cur) => Math.max(pre, cur.y + cur.h),
          MOBILE_PHONE_HEIGHT
        )
      ),
  },

  mutations: {
    [SET_COMPONENTS](state, components) {
      state.components = components;
    },

    [SET_ACTIVE_COMPONENT_ID](state, id) {
      state.activeComponentId = id;
    },

    [UPDATE_COMPONENT](state, payload) {
      Object.assign(state.components[payload.id], payload);
    },

    [UPDATE_EDIT_AREA_DRAG_HEIGHT](state, h) {
      state.editAreaDragHeight = h;
    },
  },
};
