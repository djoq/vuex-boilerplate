// mutations.spec.js
import chai, {expect} from 'chai'
import store  from '../src/store'
import { mutations } from '../src/mutations'
import { actions } from '../src/actions'

// destructure assign mutations
const { another, bump } = mutations

// destructure assign actions
const { fetch } = actions

import categories from './fixtures'
let items = JSON.parse(categories).categories

let host = 'http://localhost:9292/drugs.json?type='
let type = items[0].data


describe('[AXIOS GET]', () => {
  it('check that actions work for fetching', () => {
    // mock state
    const state = store.state

    fetch(host+type)
    console.log("Did we receive fetched result ->", state.collection)

    expect(state.collection).to.be.an("Array")
  })
})

describe('[GET DRUGS ]', () => {
  it('the first initial question loaded', () => {
    // mock state
    const state = store.state
    // assert result
    console.log('[STATE::INITIAL::QUESTION]', store.state.question )
    // expect(state.question).to.equal("What is the generic name for...")
  })
})

describe('[GET DRUGS ]', () => {
  it('question has a set of possible answers', () => {
    // mock state
    const state = store.state
    // apply mutation

    const question = "some new question"

    another(state, question)
    // assert result
    console.log('[STATE::ANOTHER::QUESTION]', state.collection )
    expect(state.question).to.equal(question)
  })
})
