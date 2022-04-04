<template>
  <v-list>
    <v-list-item-group>
      <v-list-item v-for="item in items" :key="item.route" @click="goTo(item)">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    const items = [
      {
        title: 'Languages',
        icon: 'mdi-earth',
        route: 'languages-list',
      },
      {
        title: 'Item Types',
        icon: 'mdi-format-list-bulleted-type',
        route: 'item-types-list',
      },
      {
        title: 'Item Styles',
        icon: 'mdi-format-line-style',
        route: 'item-styles-list',
      },
      {
        title: 'Pages',
        icon: 'mdi-book-open-page-variant',
        route: 'pages-list',
      },
      {
        title: 'Social Networks',
        icon: 'mdi-instagram',
        route: 'social-networks-list',
      },
    ];
    return {
      items,
      title: 'Menu',
    };
  },
  methods: {
    goTo(item) {
      this.$emit('change-title', item.title);

      this.$router.push({ name: item.route });
    },
  },
};
</script>
