<template>
  <header class="page-header">
    <router-link :to="{ name: 'home' }" class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </router-link>

    <nav class="page-nav">
      <router-link :to="{ name: 'posts' }" class="page-nav__item">
        Posts
      </router-link>
      <router-link :to="{ name: 'register' }" class="page-nav__item">
        Register
      </router-link>
    </nav>
  </header>
</template>

<style lang="scss">
.page {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
    text-align: center;
    text-transform: capitalize;
    background-color: lightblue;
  }

  &-nav__item {
    margin: 0 0.5rem;
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}

.logo {
  display: block;
  width: 5rem;
  height: 5rem;
}
</style>
