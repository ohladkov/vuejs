<template>
  <section class="posts">
    <post-card v-for="post in posts" :key="post.id" :title="post.title" :description="post.body" />
  </section>
</template>

<script>
import PostCard from './PostCard.vue';

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = (await (await fetch(`${process.env.VUE_APP_API_BASE_URL}/posts`)).json()).data;
  },
};
</script>

<style lang="scss">
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
