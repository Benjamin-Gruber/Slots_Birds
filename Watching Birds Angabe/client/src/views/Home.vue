<template>
  <div>
    <div class="mt-3">
      <h3>Our Endangered Birds</h3>
      <v-row>
        <v-col cols="4">
          <v-text-field label="Vorname" v-model="vorname"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field label="Nachname" v-model="nachname"></v-text-field>
        </v-col>
      </v-row>
      <span class="font-italic"
        >Click on the <b class="red--text">Eye</b> icon if you have observed that bird!</span
      >
    
    </div>
    <v-data-table :headers="headers" :items="birds" class="elevation-1 mt-5">
      <!-- eslint-disable-next-line -->
      <template v-slot:item.pic="{ item }">
        <img :src="item.pic" alt="" width="150" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Home',

  props: {
    birds: {
      type: Array,
    },
  },

  data() {
    return {
      vorname: '',
      nachname: '',
      vogelname: '',
      show: false,
      headers: [
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'Image',
          value: 'pic',
        },
        {
          text: 'Common Name',
          value: 'commonName',
        },
        {
          text: 'Scientific Name',
          value: 'scientificName',
        },
        {
          text: 'Observed',
          value: 'count',
        },
        {
          text: 'Actions',
          value: 'actions',
        },
      ],
    };
  },
};
</script>
