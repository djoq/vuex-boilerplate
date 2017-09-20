// Make sure to call Vue.use(Vuex) first if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { mutations } from './mutations'

const store = new Vuex.Store({
  state: {
    random: 0,
    kind: 'someType'
  },
  mutations: mutations,
  getters: {
    activated: state => {
      // state.available[state.kind]
      return
    }
  }
})

export default store


