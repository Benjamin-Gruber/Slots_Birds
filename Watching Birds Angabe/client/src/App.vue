<template>
  <v-app>
    <v-app-bar class="blue darken-1" app>
      <img src="./assets/bird.png" width="50" class="mr-3" />
      <v-toolbar-title class="white--text">BIRD WATCH</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="mr-3" to="/">Home</v-btn>
      <v-btn color="primary" class="mr-3" to="/gallery">Gallery</v-btn>
      <v-btn color="primary" to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view :birds="birds" @getBirds="getBirds()" @Observed="Observed" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',

  data() {
    return {
      birds: [],
    };
  },

  created() {
    this.getBirds();
  },

  methods: {
    async getBirds() {
      try {
        const { data } = await axios({
          url: 'http://127.0.0.1:3000/birds',
          method: 'GET',
        });
        this.birds = data;
      } catch (error) {
        console.error(error);
      }
    },

    async Observed(bird){
      await axios({
        url: `http://127.0.0.1:3000/birds/${bird.id}`,
        method: 'PATCH',
        data: {
          count: (bird.count += 1),
          observer: bird.name,
        }
      })
    }
  },
};
</script>
