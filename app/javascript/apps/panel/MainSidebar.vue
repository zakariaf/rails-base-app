<template>
  <nav>
    <div class="profile">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"
        alt="profile_picture"
      />
      <h3>Ruby on Rails</h3>
      <p>Vue.js</p>
    </div>
    <ul>
      <li class="active" @click="$router.push({ name: 'index' })">
        <span class="item">My Dashboard</span>
      </li>
      <li>
        <span class="item">Posts</span>
      </li>
      <li>
        <span class="item">Categories</span>
      </li>
      <li>
        <span class="item">Messages</span>
      </li>
      <li>
        <span class="item">Companies</span>
      </li>
      <li>
        <span class="item">Users</span>
      </li>
      <li>
        <span class="item">Settings</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    const menuItems = [
      { title: 'Index', routeName: 'index' },
      { title: 'About', routeName: 'about' },
      { title: 'Sign in', routeName: 'login' },
      { title: 'Sign up', routeName: 'signup' },
    ];
    return {
      menuItems,
    };
  },
  methods: {
    goTo(item) {
      this.$router.push({ name: item.routeName });
    },
  },
};
</script>
