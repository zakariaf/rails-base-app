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
      this.$store.dispatch('auth/logout').then(
        () => {
          window.location.href = '/';
        },
        (error) => {
          console.log('error', error);
        },
      );
    },
  },
};
</script>
