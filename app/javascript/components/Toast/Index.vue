<template>
  <div
    v-if="toast.isShow"
    :class="{
      toast: true,
      'toast--success': type === 'success',
      'toast--error': type === 'error',
      'toast--info': type === 'info',
      'toast--warning': type === 'warning',
      'toast--top-center': position === 'top-center',
      'toast--top-right': position === 'top-right',
      'toast--top-left': position === 'top-left',
      'toast--bottom-center': position === 'bottom-center',
      'toast--bottom-right': position === 'bottom-right',
      'toast--bottom-left': position === 'bottom-left',
    }"
  >
    <div class="toast__message">
      {{ toast.message }}
    </div>

    <button class="toast__close" @click="close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useToastStore } from '@/stores/toast.store';

const toast = useToastStore();

const type = computed(() => toast.type);

const position = computed(() => toast.configs.position);

const close = () => {
  toast.hideToast();
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 15px;
  background-color: #fafafa;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  width: 50%;
  display: flex;
  justify-content: space-between;

  &.toast--success {
    background-color: #dff0d8;
    border-color: #d0e9c6;
  }

  &.toast--error {
    background-color: #f2dede;
    border-color: #ebccd1;
  }

  &.toast--info {
    background-color: #d9edf7;
    border-color: #bce8f1;
  }

  &.toast--warning {
    background-color: #fcf8e3;
    border-color: #faebcc;
  }

  &.toast--top-center {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &.toast--top-right {
    top: 0;
    left: auto;
    right: 0;
  }

  &.toast--top-left {
    top: 0;
    left: 0;
  }

  &.toast--bottom-center {
    top: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &.toast--bottom-right {
    top: auto;
    bottom: 0;
    right: 0;
    left: auto;
  }

  &.toast--bottom-left {
    top: auto;
    bottom: 0;
    left: 0;
  }

  &__close {
    background: transparent;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    border: none;
    outline: none;

    &:hover {
      opacity: 0.5;
    }

    & svg {
      width: 24px;
      height: 24px;
      fill: #aaa;
    }
  }
}
</style>
