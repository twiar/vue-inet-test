<template>
  <v-col cols="12" md="4">
    <v-select 
      v-model="country" 
      :items="countries" 
      clearable 
      label="Filter by country"
      @click:clear="$emit('countryFilter')"
      @change="$emit('countryFilter', country)" 
    ></v-select>

    <v-select 
      v-model="score" 
      :items="ranges" 
      clearable 
      label="Filter by score"
      @click:clear="$emit('scoreFilter')"
      @change="$emit('scoreFilter', score)" 
    ></v-select>

    <v-row align="center" justify="center" class="ma-0">
      <v-text-field label="URL" v-model="apiUrl"></v-text-field>
      <v-btn class="ml-4" @click="$emit('url', apiUrl)" color="#E3F2FD">Get</v-btn>
      <v-btn class="ml-4" @click="$emit('resetBtn')">Reset</v-btn>
    </v-row>
  </v-col>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ContentFilter',

  computed: {
    ...mapState([
      'api',
      'countries',
      'ranges',
    ]),
  },

  data: () => ({
    apiUrl: '',
    country: '',
    score: ''
  }),
}
</script>