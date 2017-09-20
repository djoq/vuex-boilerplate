<template>
  <div class="carousel">

      <div class="container">
        <div class="carousel ORcarousel--vertical">

          <div class="carousel__container">
            <transition-group name="list-complete" >
              <div class="carousel-item" v-for="item in items" v-bind:key="item">
                <slot :name="item"></slot>
                
              </div>
            </transition-group>
          </div>
          <div class="carousel__controll">
              <a href="#/"><i @click="prev" class="material-icons left-arrow" >keyboard_arrow_left</i></a>
              <a href="#/">
                <i @click="next" class="material-icons right-arrow" >keyboard_arrow_right</i>
              </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'carousel',
  props: {
    length: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      items: Array.from({ length: this.length }, (v, k) => k + 1),
      nextNum: this.$slots.length + 1
    }
  },
  methods: {
    prev: function () {
      var last = this.items.pop()
      this.items.splice(0, 0, last)
    },
    next: function () {
      var first = this.items.shift()
      this.items.push(first)
    }
  }
}
</script>

<style scoped>
.left-arrow {
  position: inline-flex;
  font-size: 48px;
  left: 5%;
  bottom: 20vh;
}
.right-arrow {
  position: inline-flex;
  font-size: 48px;
  bottom: 20vh;
  right: 5%;
}
.container {
  width: 80%;
  margin: 15px auto;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 20px;
}

.carousel--vertical .carousel-item {
  display: block;
  width: 100%;
  border: 1px solid #008000;
}
.carousel--vertical .carousel-item:first-child {
  margin-left: 0;
  margin-top: -50px;
}
.carousel__container {
  display: block;
  white-space: nowrap;
  overflow: hidden;
}
.carousel-item {
  transition: all 0.3s;
  display: inline-flex;
  width: 100%;
  line-height: 50px;
  text-align: center;
}

/*.carousel-item:first-child {
  margin-left: -50%;
}*/
.carousel-enter,
.carousel-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.carousel-leave-active {
  position: absolute;
}


</style>



