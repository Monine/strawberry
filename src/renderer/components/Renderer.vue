<template>
  <div class="renderer">
    <div
      v-for="component in components"
      :id="component.id"
      :key="component.id"
      :style="{
        width: rem(component.w),
        height: rem(component.h),
      }"
      class="component-wrap"
    >
      <component
        :is="componentTypes[component.type]"
        :ref="component.id"
        :component="component"
        class="component"
        :style="{
          width: rem(component.w),
          height: rem(component.h),
          top: rem(component.y),
          left: rem(component.x),
        }"
      />
    </div>
  </div>
</template>

<script>
import { COMPONENT_TYPE } from '../constants';
import Block from './Block.vue';
import Picture from './Picture.vue';

export default {
  name: 'Renderer',

  props: {
    components: {
      type: Object,
      required: true,
    },
  },

  data() {
    this.componentTypes = {
      [COMPONENT_TYPE.block]: Block,
      [COMPONENT_TYPE.picture]: Picture,
    };
    return {};
  },
};
</script>

<style lang="less" scoped>
.renderer {
  // position: relative;

  .component-wrap {
    position: absolute;
  }

  .component {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
