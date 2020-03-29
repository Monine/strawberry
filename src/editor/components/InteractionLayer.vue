<template>
  <div class="interaction-layer">
    <Moveable
      v-for="component in components"
      :key="component.id"
      class="moveable"
      :style="{
        width: rem(component.w),
        height: rem(component.h),
        top: rem(component.y),
        left: rem(component.x),
      }"
      v-bind="toMoveableConf(component)"
      @drag="handleDrag($event, component)"
      @resize="handleResize($event, component)"
    >
      <div
        class="interactive"
        @mousedown="handleMousedownMask(component.id)"
      ></div>
    </Moveable>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Moveable from './Moveable.vue';
import moveableConf from '../moveable-conf';
import {
  UPDATE_COMPONENT,
  SET_ACTIVE_COMPONENT_ID,
} from '../store/mutation-types';
import {
  getComponentVerticalGuideLines,
  getComponentHorizontalGuideLines,
} from '../helper';
import { MOBILE_PHONE_WIDTH } from '../constants';

export default {
  name: 'InteractionLayer',

  components: {
    Moveable,
  },

  computed: {
    ...mapState({
      components: state => state.page.components,
      activeComponentId: state => state.page.activeComponentId,
    }),
    ...mapGetters(['editAreaHeight']),
  },

  methods: {
    toMoveableConf({ id, type }) {
      const config = {
        container: this.$parent.$el,
        bounds: {
          left: 0,
          top: 0,
          right: MOBILE_PHONE_WIDTH,
          bottom: this.editAreaHeight,
        },
        snappable: true, // bounds 需要 snappable 才能生效
        snapCenter: true,
        snapVertical: true,
        snapHorizontal: true,
        className: `moveable-control-box__${id} ${
          this.activeComponentId === id ? 'active' : ''
        }`,
        // throttleResize: 0,
        ...moveableConf[type],
      };
      if (this.activeComponentId === id) {
        Object.assign(config, {
          verticalGuidelines: getComponentVerticalGuideLines(id),
          horizontalGuidelines: getComponentHorizontalGuideLines(id),
        });
      }
      return config;
    },

    handleMousedownMask(id) {
      this.$store.commit(SET_ACTIVE_COMPONENT_ID, id);
    },

    handleDrag({ target, left, top }, { id }) {
      target.style.left = this.rem(left);
      target.style.top = this.rem(top);

      this.$store.commit(UPDATE_COMPONENT, {
        id,
        x: left,
        y: top,
      });
    },

    handleResize({ target, width, height, delta, direction }, { id, x, y }) {
      target.style.width = this.rem(width);
      target.style.height = this.rem(height);

      if (direction[0] < 0) {
        x -= delta[0];
      }
      if (direction[1] < 0) {
        y -= delta[1];
      }

      target.style.top = this.rem(y);
      target.style.left = this.rem(x);

      this.$store.commit(UPDATE_COMPONENT, {
        id,
        x,
        y,
        w: width,
        h: height,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.interaction-layer {
  position: absolute;
  top: 0;
  left: 0;
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
