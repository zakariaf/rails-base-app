<template>
  <div>
    <nav class="navbar">
      <h2 class="navbar-logo">Rails 7 Vuejs</h2>
      <ul class="navbar-nav">
        <li v-for="item in menuItems" :key="item.routeName" @click="goTo(item)" class="nav-item">
          {{ item.title }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    const menuItems = [
      { title: 'Index', routeName: 'index' },
      { title: 'About', routeName: 'about' },
      { title: 'Sign in', routeName: 'login' },
      { title: 'Sign up', routeName: 'signup' },
    ];
    return {
      menuItems,
    };
  },
  methods: {
    goTo(item) {
      this.$router.push({ name: item.routeName });
    },
  },
};
</script>
