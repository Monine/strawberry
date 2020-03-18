<template>
  <div class="component__block" :style="component.style"></div>
</template>

<script>
export default {
  name: 'ComponentBlock',

  props: {
    component: {
      type: Object,
      required: true,
    },
  },
};
</script>
