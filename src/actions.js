// actions.js
// import axios from 'axios'

import store from './store'

export const actions = {
  // fetch: () => {
    // some data
  // },
  attempt: (pick) => {
    return store.commit('attempt', pick)
  }
}
