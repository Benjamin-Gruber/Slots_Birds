<template>
  <v-app>
    <v-app-bar class="blue darken-1" app>
      <img src="./assets/bird.png" width="50" class="mr-3" />
      <v-toolbar-title class="white--text">BIRD WATCH</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="mr-3" to="/">Home</v-btn>
      <v-btn color="primary" class="mr-3">Gallery</v-btn>
      <v-btn color="primary" to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <v-container> <router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
