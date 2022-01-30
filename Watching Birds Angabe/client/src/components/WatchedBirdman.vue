<template>
  <div>
    <v-alert color="red darken-3 white--text text-center"> Last watched: {{ vogel }}</v-alert>
  </div>
</template>

<script>
export default {
  props: {
    vogel: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
