<template>
  <h2>You are visiting the {{ pageName }} page!</h2>
</template>

<script>
export default {
  data() {
    return {
      pageName: 'About',
    };
  },
  props: {
    qoli: Array,
  },
};
</script>

<style></style>
