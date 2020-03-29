<template>
  <el-main>
    <section class="top-blank" :style="blankStyle"></section>

    <div class="edit-area-wrap" :style="{ height: `${editAreaHeight}px` }">
      <EditArea />
      <div
        class="knob knob-bottom"
        data-knob="bottom"
        :style="knobStyle"
        @dblclick="handleDblclickBottomKnob"
      ></div>
    </div>

    <section class="bottom-blank" :style="blankStyle"></section>
  </el-main>
</template>

<script>
import { mapGetters } from 'vuex';
import EditArea from './EditArea.vue';
import { BLANK_HEIGHT, KNOB_HEIGHT } from '../constants';
import { UPDATE_EDIT_AREA_DRAG_HEIGHT } from '../store/mutation-types';

export default {
  name: 'AppMain',

  components: {
    EditArea,
  },

  data() {
    this.blankStyle = { height: `${BLANK_HEIGHT}px` };
    this.knobStyle = { height: `${KNOB_HEIGHT}px` };
    return {};
  },

  computed: {
    ...mapGetters(['editAreaHeight']),
  },

  methods: {
    handleDblclickBottomKnob() {
      this.$store.commit(
        UPDATE_EDIT_AREA_DRAG_HEIGHT,
        this.$store.getters.componentsHeight
      );
    },
  },
};
</script>

<style lang="less" scoped>
.el-main {
  overflow: auto;
  height: 100%;
}

.edit-area-wrap {
  position: relative;
}

.knob {
  position: absolute;
  left: 50%;
  width: 64px;
  height: 16px;
  background-color: #fff;
  transform: translateX(-50%);
  .flex-center();
  cursor: ns-resize;

  &::after {
    content: '';
    display: block;
    width: 26px;
    height: 3px;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
}

.knob-top {
  top: -16px;
  border-radius: 64px 64px 0 0;
  box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);
}

.knob-bottom {
  bottom: -16px;
  border-radius: 0 0 64px 64px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
</style>
