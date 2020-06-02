<template>
  <div id="app" class="page">
    <the-header />

    <main class="page-main">
      <slot />
    </main>

    <the-footer />
  </div>
</template>

<script>
import TheHeader from './partials/TheHeader.vue';
import TheFooter from './partials/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &-main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1.5rem 3rem;
    background-color: #f8f8f8;
  }
}
</style>
