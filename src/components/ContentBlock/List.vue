<template>
  <v-col cols="12" md="4">
    <v-card max-width="450" class="mx-auto">
      <v-list three-line v-if="filterActive">
        <v-subheader>List</v-subheader>
        <Item v-for="(item, index) in filteredUsers" :key="item.title" :item="item" :index="index" @avatar="showPopup"/>
      </v-list>
      <v-list three-line v-else>
        <v-subheader>List</v-subheader>
        <Item v-for="(item, index) in users" :key="item.title" :item="item" :index="index" @avatar="showPopup"/>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Item from './List/Item.vue'

export default {
  name: 'ContentList',
  components: {
    Item,
  },
  computed: {
    ...mapState([
      'users',
      'filteredUsers',
      'filterActive'
    ]),
    filteredUsersLength(){
      return this.filteredUsers.length
    },
    usersLength(){
      return this.users.length
    }
  },
  methods: {
    ...mapMutations([
      'setIndex',
      'setPopupStatus'
    ]),
    showPopup(index){
      this.setPopupStatus(true, index)
    }
  },
  watch: {
    filteredUsersLength(){
      this.setIndex(this.filteredUsersLength)
    }
  },
  data: () => ({}),
}
</script>