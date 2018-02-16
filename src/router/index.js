import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
// importAdditions

Vue.use(Router)

let menu = [
  {
    path: '/',
    name: 'Entry',
    component: Entry
  },
  // routeAdditions
]
let router = new Router({
  routes: menu
})

export { menu, router }


