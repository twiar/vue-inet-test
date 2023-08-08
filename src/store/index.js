import Vue from 'vue'
import Vuex from 'vuex'
import users from './components/users';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...users.state,
  },
  getters: {
    ...users.getters,
  },
  mutations: {
    ...users.mutations,
  },
  actions: {
    ...users.actions,
  },
})