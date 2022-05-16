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

<script setup lang="ts">
import MainMenu from './MainMenu.vue';
</script>
