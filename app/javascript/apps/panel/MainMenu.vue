<template>
  <nav>
    <ul class="navbar-nav">
      <li v-for="item in menuItems" :key="item.routeName" class="nav-item" @click="goTo(item)">
        {{ item.title }}
      </li>
    </ul>
  </nav>
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
