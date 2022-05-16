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

<script setup lang="ts">
import MainMenu from './MainMenu.vue';
import MainSidebar from './MainSidebar.vue';
</script>
