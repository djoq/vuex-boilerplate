<template>
  <div class="entry">
    <h3> {{ msg }} </h3>

  </div>
</template>

<script>

// import store from '../store'
// import { actions } from '../actions'
// const { fetch } = actions

export default {
  name: 'entry',
  data () {
    return {
      msg: 'Your Page title'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
