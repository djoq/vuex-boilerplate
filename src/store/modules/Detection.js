const state = {
  detects: {}
}

const mutations = {
  listDetections (state, detects) {
    let setter = state
    setter['detects'] = detects.stat
    state => setter.detects
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
