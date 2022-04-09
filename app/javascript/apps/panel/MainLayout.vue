<template>
  <div class="wrapper">
    <div class="section">
      <div class="top_navbar">
        <MainMenu />
      </div>
      <div class="container">
        <router-view />
      </div>
    </div>
    <div class="sidebar">
      <MainSidebar />
    </div>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';
import MainSidebar from './MainSidebar.vue';

export default {
  components: {
    MainMenu,
    MainSidebar,
  },
  data() {
    return {};
  },
};
</script>
