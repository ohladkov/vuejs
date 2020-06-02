<template>
  <article class="post">
    <h2 class="post__title">
      <a href="#">
        {{ title }}
      </a>
    </h2>

    <div class="post__description">
      <p>
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
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
