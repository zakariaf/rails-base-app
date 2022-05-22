<template>
  <div v-if="!loggedIn" class="form">
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
  <div class="text-center">Redirecting to panel</div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, computed } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import { IUserLogin } from '@/types/general';
import { showToast } from '@/utils/showToast';

const authStore = useAuthStore();

const user = reactive<IUserLogin>({
  email: '',
  password: '',
});

const redirectToPanel = () => {
  window.location.href = '/panel/';
};

const showMessage = ref(false);

const loggedIn = computed(() => authStore.isAuthenticated);

onMounted(() => {
  if (loggedIn.value) {
    redirectToPanel();
  }
});

const submit = () => {
  authStore
    .login(user)
    .then(() => {
      redirectToPanel();
    })
    .catch((error) => {
      showToast(error, 'error');
    });
};
</script>
