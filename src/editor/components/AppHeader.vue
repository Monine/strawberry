<template>
  <el-header class="app-header" :height="HEADER_HEIGHT">
    <svg-icon filename="strawberry" />
    <div class="right">
      <svg-icon filename="save" @click.native="handleClickSave" />
      <svg-icon filename="eye" @click.native="handleClickPreview" />
    </div>
  </el-header>
</template>

<script>
import { HEADER_HEIGHT } from '../constants';
import { saveSandwichPage } from '../helper';

export default {
  name: 'AppHeader',

  data() {
    this.HEADER_HEIGHT = String(HEADER_HEIGHT);
    return {};
  },

  methods: {
    async handleClickSave() {
      await saveSandwichPage();
      this.$message.success('保存成功');
    },

    handleClickPreview() {
      this.handleClickSave();
      this.$emit('preview');
    },
  },
};
</script>

<style lang="less" scoped>
.app-header {
  flex: 0 0 64px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 8px 24px 0px #000a3805;
}

.svg-strawberry {
  font-size: 64px;
}

.right {
  display: inline-flex;
  align-items: center;

  .svg-icon {
    margin: 0 8px;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      color: @color-brand;
    }
  }
}
</style>
