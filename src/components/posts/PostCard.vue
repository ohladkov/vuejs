<template>
  <article class="post">
    <h2 class="post__title">
      <router-link :to="{ name: 'post', params: { id: post.id } }">
        {{ post.title }}
      </router-link>
    </h2>

    <div class="post__description">
      <p>
        {{ post.body }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.post {
  width: 30%;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #000;

  &__title {
    margin: 0 0 0.5rem;
    text-transform: capitalize;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__description {
    p {
      margin-bottom: 0;
    }
  }
}
</style>
