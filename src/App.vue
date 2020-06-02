<template>
  <layout>
    <router-view />
  </layout>
</template>

<script>
import Layout from '@/layout/Default.vue';

export default {
  components: {
    Layout,
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
