<template>
  <div class="interaction-layer">
    <Moveable
      v-for="component in components"
      :key="component.id"
      class="moveable"
      :style="{
        width: `${component.w}px`,
        height: `${component.h}px`,
        top: `${component.y}px`,
        left: `${component.x}px`,
      }"
      v-bind="toMoveableConf(component)"
      @drag="handleDrag($event, component)"
    >
      <div
        class="interactive"
        @mousedown="handleMousedownMask(component.id)"
      ></div>
    </Moveable>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Moveable from './Moveable.vue';
import moveableConf from '../moveable-conf';
import {
  UPDATE_COMPONENT,
  SET_ACTIVE_COMPONENT_ID,
} from '../store/mutation-types';
import {
  getMoveableControlBoxEl,
  getActiveMoveableControlBoxEl,
} from '../helper';

export default {
  name: 'InteractionLayer',

  components: {
    Moveable,
  },

  computed: mapState({
    components: state => state.page.components,
    activeComponentId: state => state.page.activeComponentId,
  }),

  methods: {
    toMoveableConf(component) {
      return {
        ...moveableConf[component.type],
        container: this.$el,
        className: `moveable-control-box__${component.id}`,
      };
    },

    handleMousedownMask(id) {
      let elControlBox = getActiveMoveableControlBoxEl();
      if (elControlBox) elControlBox.classList.remove('active');

      this.$store.commit(SET_ACTIVE_COMPONENT_ID, id);

      elControlBox = getMoveableControlBoxEl(id);
      if (elControlBox) elControlBox.classList.add('active');
    },

    handleDrag(drag, { id, x, y }) {
      drag.target.style.left = `${x + drag.delta[0]}px`;
      drag.target.style.top = `${y + drag.delta[1]}px`;

      this.$store.commit(UPDATE_COMPONENT, {
        id,
        x: x + drag.delta[0],
        y: y + drag.delta[1],
      });
    },
  },
};
</script>

<style lang="less" scoped>
.interaction-layer {
  position: relative;
  width: 100%;
  height: 100%;
}

.moveable {
  position: absolute;
  width: 100%;
  height: 100%;
}

.interactive {
  width: 100%;
  height: 100%;

  &:hover {
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }

    &::before {
      border: 1px solid rgba(0, 0, 0, 0.15);
    }

    &::after {
      border: 1px dashed #fff;
    }
  }
}
</style>
