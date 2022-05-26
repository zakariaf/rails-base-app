<template>
  <nav class="navbar">
    <h2 class="navbar-logo">Rails 7 Vuejs</h2>
    <ul class="navbar-nav">
      <li v-for="item in menuItems" :key="item.routeName" class="nav-item">
        <router-link
          :to="{
            name: item.routeName,
          }"
        >
          {{ item.title }}
        </router-link>
      </li>
      <li class="nav-item">
        <a href="/panel/"></a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const menuItems = [
  { title: 'Index', routeName: 'index' },
  { title: 'About', routeName: 'about' },
  { title: 'Sign in', routeName: 'login' },
  { title: 'Sign up', routeName: 'signup' },
];
</script>
