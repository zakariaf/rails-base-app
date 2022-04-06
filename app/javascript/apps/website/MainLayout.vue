<template>
  <div>
    <div class="header-bar">
      <MainMenu />
    </div>

    <div class="container mt-15">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';

export default {
  components: {
    MainMenu,
  },
  data() {
    return {};
  },
};
</script>
