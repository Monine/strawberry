<template>
  <div class="render-layer">
    <Renderer :components="components" />
  </div>
</template>

<script>
export default {
  name: 'RenderLayer',

  computed: {
    components() {
      return this.$store.state.page.components;
    },
  },
};
</script>

<style lang="less" scoped>
.render-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
