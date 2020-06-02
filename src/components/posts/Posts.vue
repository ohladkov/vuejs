<template>
  <section class="posts" v-if="posts.length">
    <post-card v-for="post in posts" :key="post.id" :post="post" />
  </section>

  <empty v-else :title="postsEmptyTitle" />
</template>

<script>
import Empty from '@/components/Empty.vue';
import PostCard from './PostCard.vue';

export default {
  components: {
    PostCard,
    Empty,
  },
  data() {
    return {
      posts: [],
      loading: false,
    };
  },
  computed: {
    postsEmptyTitle() {
      return this.loading ? 'Loading...' : 'No posts found!';
    },
  },
  async created() {
    this.loading = true;
    this.posts = (await (await fetch(`${process.env.VUE_APP_API_BASE_URL}/posts`)).json()).data;
    this.loading = false;
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
