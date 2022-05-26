<template>
  <BaseLayout>
    <div>
      <div class="header-bar">
        <MainMenu />
      </div>

      <div class="container mt-15">
        <router-view />
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '../BaseLayout.vue';
import MainMenu from './MainMenu.vue';
</script>
