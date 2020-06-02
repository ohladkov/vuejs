<template>
  <layout>
    <home />
  </layout>
</template>

<script>
import Home from './views/Home.vue';
import Layout from './layout/Default.vue';

export default {
  components: {
    Layout,
    Home,
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

img {
  max-width: 100%;
}
</style>
