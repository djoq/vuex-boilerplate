const state = {
  connected: false
}

const mutations = {
  switchSocket (state, status) {
    let setter = state
    setter['connected'] = status
    state => setter.connected
  }
}

const actions = {
  // switchSocket: ({ commit }) => commit('switchSocket')
}

export default {
  state,
  mutations,
  actions
}
