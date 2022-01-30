<template>
  <div>
    <v-container class="text-center">
      <h1>Our Birds</h1>
      <v-carousel hide-delimiters height="600">
        <v-carousel-item v-for="(item, i) in birds" :key="i" :src="item.pic"></v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    birds: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
