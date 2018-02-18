// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './router'

import {UiIcon, UiSelect, UiButton, UiIconButton, UiModal, UiTab, UiTabs, UiTextbox} from 'keen-ui'
import '../node_modules/keen-ui/dist/keen-ui.min.css'

import imported from './components/'

Vue.config.productionTip = false

Vue.component('About', imported.overVue)
Vue.component('Carousel', imported.carousel)
Vue.component('Test', imported.Test)
Vue.component('Test', imported.Test)
// componentAdditions

Vue.component('side-bar', imported.sideBar)
Vue.component('ui-button', UiButton)
Vue.component('ui-modal', UiModal)
Vue.component('ui-tab', UiTab)
Vue.component('ui-tabs', UiTabs)
Vue.component('ui-textbox', UiTextbox)
Vue.component('ui-icon', UiIcon)
Vue.component('ui-select', UiSelect)
Vue.component('ui-icon-button', UiIconButton)


Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mounted: () => {
    console.log('[MAIN::MOUNTED]', window.location)
    // zif (location.hash.includes('type')) store.commit('setName', location.hash.split('=')[1])
    // fetch()
  },
  router,
  template: '<App/>',
  components: { App, UiTab, UiTabs }
})
