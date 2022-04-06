<template>
  <div class="form">
    <div class="form-box pt-25">
      <div class="form-bg py-30 px-50">
        <span class="header pb-25">Create your account</span>

        <span v-if="showMessage" class="header pb-25"> You've clicked on Submit button </span>

        <form @submit.prevent="submit">
          <div class="field pb-25">
            <label for="email">Email</label>
            <input v-model="user.email" type="email" />
          </div>

          <div class="field pb-25">
            <label for="password">Password</label>
            {{ user.com }}
            <input v-model="user.password" type="password" />
          </div>

          <div class="field pb-25">
            <label for="password">Verify Password</label>
            <input v-model="user.password_confirmation" type="password" />
          </div>

          <div class="field pb-25">
            <input class="submit" type="submit" name="submit" value="Continue" />
          </div>
        </form>

        <div class="footer pt-25 text-center">
          <span>
            Do you already have an account? <router-link :to="{ name: 'login' }">Login</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      user: {
        email: '',
        password: '',
        password_confirmation: '',
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

<style></style>
