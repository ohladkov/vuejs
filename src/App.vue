<template>
  <the-layout>
    Vue JS mounted successfully
  </the-layout>
</template>

<script>
import TheLayout from './layout/Default.vue';

export default {
  components: {
    TheLayout,
  },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
}
</style>
