<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <Logo />
      <ContentFilter 
        @countryFilter="changeCountryFilter"
        @scoreFilter="changeScoreFilter" 
        @url="fetchList"
        @resetBtn="resetList"
      />
      <ContentList />
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Logo from './ContentBlock/Logo.vue'
import ContentFilter from './ContentBlock/Filter.vue'
import ContentList from './ContentBlock/List.vue'
import data from '../assets/data.json'

export default {
  name: 'ContentBlock',
  components: {
    Logo,
    ContentFilter,
    ContentList,
  },

  methods: {
    ...mapActions([
      'fetchList'
    ]),
    ...mapMutations([
      'setApi',
      'setLocalList',
      'setCountryFilter',
      'setScoreFilter',
      'setFilteredUsers',
      'setFilterStatus'
    ]),
    
    fetchList(apiUrl) {
      this.setApi(apiUrl)
      this.fetchList()
    },

    resetList() {
      this.setLocalList(data)
    },

    changeScoreFilter(score) {
      this.setScoreFilter(score)
      this.setFilterStatus()
      this.setFilteredUsers()
    },

    changeCountryFilter(country) {
      this.setCountryFilter(country)
      this.setFilterStatus()
      this.setFilteredUsers()
    },
  },

  data: () => ({}),
  
  created() {
    this.resetList();
  }
}
</script>