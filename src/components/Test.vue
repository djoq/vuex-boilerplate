<template>
  <div class="test">
    <h3 > {{ msg }} </h3>
  </div>
</template>

<script>

// import store from '../store'
// import { actions } from '../actions'
// const { fetch } = actions

export default {
  name: 'test',
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
