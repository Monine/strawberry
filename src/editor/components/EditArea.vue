<template>
  <div class="edit-area" :style="editAreaStyle">
    <RenderLayer />
    <InteractionLayer v-if="hasMounted" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { MOBILE_PHONE_WIDTH } from '@/editor/constants';
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
    };
  },

  computed: {
    ...mapState({
      components: state => state.page.components,
      activeComponentId: state => state.page.activeComponentId,
    }),

    ...mapGetters(['editAreaHeight']),

    editAreaStyle() {
      return {
        width: `${MOBILE_PHONE_WIDTH}px`,
        height: `${this.editAreaHeight}px`,
      };
    },
  },

  mounted() {
    this.hasMounted = true;
  },
};
</script>

<style lang="less" scoped>
.edit-area {
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0px 0px 8px 0px #000a3814;
}
</style>
