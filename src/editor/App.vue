<template>
  <el-container id="app" direction="vertical">
    <AppHeader @preview="showPreview = true" />

    <el-container>
      <!-- 主体区域 -->
      <AppMain />
    </el-container>

    <!-- 预览窗口 -->
    <Preview v-if="showPreview" @clickMask="showPreview = false" />
  </el-container>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import registerMouseEvent from './register-mouse-event';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      showPreview: false,
    };
  },

  mounted() {
    registerMouseEvent(this.$store);
  },
};
</script>

<style src="normalize.css"></style>
<style lang="less" src="./styles/app.less"></style>

<style lang="less" scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;

  > .el-container {
    flex: 100%;
    overflow: hidden;
  }
}
</style>
