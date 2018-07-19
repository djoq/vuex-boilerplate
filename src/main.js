// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './router'
import store from './store/index.js'

import VueSocketio from 'vue-socket.io'

import {UiIcon, UiSelect, UiButton, UiIconButton, UiModal, UiTab, UiTabs, UiTextbox} from 'keen-ui'
import '../node_modules/keen-ui/dist/keen-ui.min.css'

import imported from './components/'
import config from '../env.js'

const socketUri = config('SOCKET_URL')
Vue.use(VueSocketio, socketUri)


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
  sockets: {
    connect: () => {
      store.commit('switchSocket', true)
      console.log('socket connected')
    },
    disconnect: () => {
      store.commit('switchSocket', false)
      console.log('the server closed the socket connection')
    },
    initialize: (detectors) => {
      // console.log('incoming message', detectors)
      store.commit('listDetections', JSON.parse(detectors))
    }
  },

  mounted: () => {
    console.log('[MAIN::MOUNTED]', window.location)
    // zif (location.hash.includes('type')) store.commit('setName', location.hash.split('=')[1])
    // fetch()
  },
  router,
  template: '<App/>',
  components: { App, UiTab, UiTabs }
})
