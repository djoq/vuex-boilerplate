<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   width: 100%;
   margin: 0;
   padding: 0;
   background-color: #000;
   top: 0;
   left: 0;
}
/**,
*::before,
*::after {
    box-sizing: border-box;
}*/

html {
    font-size: 100%;
}
body {
  overflow-y: scroll;
  padding: 0;
  margin: 0;
  top: 0;
}
</style>
