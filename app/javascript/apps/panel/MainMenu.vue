<template>
  <ul class="navbar-nav">
    <li class="nav-item">Profile</li>
    <li class="nav-item" @click="logout">Logout</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      window.location.href = '/';
    },
  },
};
</script>
