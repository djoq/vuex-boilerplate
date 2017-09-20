<template>
  <div class="entry">
    <h3 > {{ msg }} </h3>
      <about ></about>
  </div>
</template>

<script>

import store from '../store'
// import { actions } from '../actions'
// const { fetch } = actions

export default {
  name: 'entry',
  computed: {
    random () {
      return store.state.random
    }
  },
  data () {
    return {
      msg: 'Collision explorer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.entry {
  /*background: url('/static/logo.png');*/
  background-repeat: no-repeat;
  background-position: center top;
  padding-top: 100px;
  max-height: 40px;
}
.ceil-left {
  left: 12px;
  top: 24px;
  position: fixed;
}
.topper {
  left: 36px;
  top: 5px;
}
.ceil-right {
  right: 12px;
  top: 12px;
  position:fixed;
}
.floor-right {
  right: 12px;
  bottom: 12px;
  position:fixed;
}
/*h1, h2 {
  margin-top: -36px;
  font-weight: normal;
}*/
a, h3 {
  color: #42b983;
}

</style>

<style lang="scss">

</style>



