<template>
  <div class="about">
    <!-- <h3 > {{ msg }} </h3> -->
          <img class="faded" src="static/19730706_0817.jpg" >

            <ui-tabs class="classy" fullwidth>
                <ui-tab title="Metrics">
                    Todo: fill this out
                </ui-tab>

                <ui-tab title="Employees">
                   Todo: add a new component
                </ui-tab>

                <ui-tab title="Offices">
                   Todo: add another...
                </ui-tab>


            </ui-tabs>
  </div>
</template>
<script>
export default {
  name: 'about',
  // props: ['answer'],
  data () {
    return {
      msg: 'About page!'
    }
  }
}
</script>

<style>
.ui-tabs__body {
  background: transparent;
}
div.half {
  width: 45%;
  display: inline-block;
}
div.third {
  min-width: 200px;
  width: 30%;
  display: inline-block;
}
div.quart {
  width: 20%;
  display: inline-block;
}

.left {
  display: grid;
  text-align: left;
}
.right {
  display: grid;
  text-align: right;
}
.center {
  display: grid;
  text-align: center;
}

</style>

<style scoped>
.ui-tabs__body {
  background-color: none !important;
  border: none !important;
}

.faded {
    position: absolute;
    left: 0;
    opacity: .1;
    width: 100%;
    z-index: -1;

}
.about {
  min-height: 100vh;
}
</style>


