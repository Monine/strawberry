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
