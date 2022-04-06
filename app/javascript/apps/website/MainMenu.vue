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

<style lang="scss" scoped>
.navbar {
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff !important;
  box-shadow: 0px 5px 20px -17px rgba(0, 0, 0, 0.34);

  .navbar-logo {
    display: inline-block;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  .navbar-nav {
    display: flex;
    list-style: none;

    .nav-item {
      font-size: 13px;
      padding: 20px;
      color: #333333;
      text-transform: uppercase;
      letter-spacing: 1px;

      &:hover {
        color: #fec771;
        cursor: pointer;
      }
    }
  }
}
</style>
