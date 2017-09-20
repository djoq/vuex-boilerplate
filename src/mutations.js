// mutations.js
export const mutations = {
  another: (state, question) => {
    state.question = question
  },
  bump: (state, collection) => {
    let setter = state
    setter['collection'] = collection
    state => setter.collection
  }
}
