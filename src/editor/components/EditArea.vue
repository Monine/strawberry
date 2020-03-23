<template>
  <div class="edit-area" :style="editAreaStyle">
    <RenderLayer />
    <InteractionLayer v-if="hasMounted" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { MOBILE_PHONE_WIDTH, MOBILE_PHONE_HEIGHT } from '@/editor/constants';
import RenderLayer from './RenderLayer.vue';
import InteractionLayer from './InteractionLayer.vue';

export default {
  name: 'EditArea',

  components: {
    RenderLayer,
    InteractionLayer,
  },

  data() {
    return {
      hasMounted: false,
      editAreaStyle: {
        width: `${MOBILE_PHONE_WIDTH}px`,
        height: `${MOBILE_PHONE_HEIGHT}px`,
      },
    };
  },

  computed: mapState({
    components: state => state.page.components,
    activeComponentId: state => state.page.activeComponentId,
  }),

  mounted() {
    this.hasMounted = true;
  },

  methods: {
    handleResize({ target, width, height, delta }) {
      if (delta[0]) {
        target.style.width = `${width}px`;
        target.nextElementSibling.style.width = `${width}px`;
      }
      if (delta[1]) {
        target.style.height = `${height}px`;
        target.nextElementSibling.style.height = `${height}px`;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.edit-area {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0px 0px 8px 0px #000a3814;
  // overflow: hidden;
  user-select: none;
}
</style>
