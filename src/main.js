import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import { router } from './router.js'
import { chuckStore } from './chuckStore.js'
import { triviaStore } from './triviaStore.js'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    chuckStore,
    triviaStore
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
