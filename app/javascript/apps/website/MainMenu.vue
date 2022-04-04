<template>
  <div class="container">
    <div class="header-bar">
      <h1 class="logo">RailsViteVue</h1>
      <ul class="slider-menu">
        <li v-for="item in menuItems" :key="item.routeName" @click="goTo(item)">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const menuItems = [
      { title: 'Index', routeName: 'index' },
      { title: 'About', routeName: 'about' },
      { title: 'Sign in', routeName: 'login' },
      { title: 'Sign up', routeName: 'registration' },
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

<style scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.header-bar {
  position: relative;
  width: 50%;
  min-width: 100px;
  height: 50px;
}
.header-bar > .logo {
  top: calc(50% - 20px);
  left: 10px;
  transform: translateY(-50%);
  cursor: default;
  user-select: none;
}
.slider-menu {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
}
.slider-menu > li {
  display: inline-flex;
  padding: 14px;
  margin-left: 2px;
  font-family: 'Quicksand', sans-serif;
  cursor: pointer;
  transition: 0.3s linear all;
  user-select: none;
}
.slider-menu > li:hover {
  color: #faa;
}
</style>
