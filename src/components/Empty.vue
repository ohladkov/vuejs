<template>
  <div class="empty">
    <h1>{{ title }}</h1>
    <p v-if="description">{{ desctription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return 'Empty Page';
      },
    },
    description: {
      type: String,
    },
  },
};
</script>

<style></style>
