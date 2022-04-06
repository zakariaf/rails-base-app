<template>
  <div>
    <MainMenu />

    <div class="container">
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
