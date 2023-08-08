import axios from 'axios'
import localData from '../../assets/data.json'

export default {
  state: {
    countries: [
      'russia',
      'usa',
    ],
    ranges: [
      '> 20',
      '< 10',
    ],
    variant: 'default',
    users: [{
      avatar: "",
      title: "",
      subtitle: "",
      country: "",
      score: 0,
      address: ""
    }],

    dynamicIndex: 0,
    filteredUsers: [],
    filterActive: false,
    api: '',
    countryFilter: '',
    scoreRangeFilter: '',
  },

  getters: {
    dynamicIndex(state) {
      return state.dynamicIndex
    },
  },

  actions: {
    fetchList({ state, commit }) {
      return new Promise((resolve, reject) => {
        axios.get(state.api)
          .then((response) => {
            commit('setIndex', response.length)
            commit('setList', response)
            resolve(localData) // resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },

  mutations: {
    setList: (state, payload) => {
      state.users = payload
      state.filteredUsers = [...state.users]
    },
    setLocalList: (state, payload) => {
      state.users = payload
      state.filteredUsers = [...state.users]
    },

    setApi: (state, payload) => {
      state.api = payload
    },
    setIndex: (state, payload) => {
      state.dynamicIndex = payload - 1
    },

    setCountryFilter: (state, payload) => {
      state.countryFilter = payload
    },
    setScoreFilter: (state, payload) => {
      state.scoreRangeFilter = payload
    },

    setFilterStatus: (state) => {
      if (state.countryFilter || state.scoreRangeFilter) {
        state.filterActive = true
      }
      else state.filterActive = false
    },
    setFilteredUsers: (state) => {
      state.filteredUsers = [...state.users]
      if (state.countryFilter) state.filteredUsers = state.filteredUsers.filter(user => user.country === state.countryFilter)
      if (state.scoreRangeFilter === '< 10') state.filteredUsers = state.filteredUsers.filter(user => user.score < 10)
      else if (state.scoreRangeFilter === '> 20') {
        state.filteredUsers = state.filteredUsers.filter(user => user.score > 20)
      }
    }
  },
}