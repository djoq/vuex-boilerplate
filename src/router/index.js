import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
// importAdditions

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: Entry
    },
    // routeAdditions
  ]
})
