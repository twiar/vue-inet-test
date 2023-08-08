<template>
  <div>
    <v-list-item>
      <v-menu v-model="showMenu" absolute offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item-avatar v-bind="attrs" v-on="on">
            <v-img :src="item.avatar" class="profile"></v-img>
          </v-list-item-avatar>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>{{ item.address }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle class="text--primary">{{ item.subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider v-if="index < index" inset></v-divider>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ContentListItem',
  props: {
    item: {},
    index: {}
  },
  computed: {
    ...mapGetters([
      'dynamicIndex'
    ]),
  },
  methods: {
    ...mapMutations([
      'setPopupStatus'
    ])
  },
  data: () => ({
    showMenu: false,
  }),
}
</script>

<style scoped>
  .profile {
    cursor: pointer;
  }
</style>