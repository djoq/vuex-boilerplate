// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {UiButton, UiModal, UiTab, UiTabs, UiTextbox} from 'keen-ui'
import '../node_modules/keen-ui/dist/keen-ui.min.css'


import imported from './components/'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

Vue.component('About', imported.about)
Vue.component('Carousel', imported.carousel)
// componentAdditions

Vue.component('ui-button', UiButton)
Vue.component('ui-modal', UiModal)
Vue.component('ui-tab', UiTab)
Vue.component('ui-tabs', UiTabs)
Vue.component('ui-textbox', UiTextbox)
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
