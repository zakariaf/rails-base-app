<template>
  <BaseLayout>
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
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '../BaseLayout.vue';
import MainMenu from './MainMenu.vue';
import MainSidebar from './MainSidebar.vue';
</script>
