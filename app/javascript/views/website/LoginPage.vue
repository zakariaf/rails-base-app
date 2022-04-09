<template>
  <div class="form">
    <div class="form-box pt-25">
      <div class="form-bg py-30 px-50">
        <span class="header pb-25">Sign in to your account</span>

        <span v-if="showMessage" class="header pb-25"> You've clicked on Submit button </span>

        <form @submit.prevent="submit">
          <div class="field pb-25">
            <label for="email">Email</label>
            <input v-model="user.email" type="email" />
          </div>

          <div class="field pb-25">
            <label for="password">Password</label>
            <input v-model="user.password" type="password" />
          </div>

          <div class="field pb-25">
            <input class="submit" type="submit" name="submit" value="Continue" />
          </div>
        </form>

        <div class="footer pt-25 text-center">
          <span>
            Don't have an account? <router-link :to="{ name: 'signup' }">Sign up</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      showMessage: false,
    };
  },
  methods: {
    submit() {
      this.showMessage = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
