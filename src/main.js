import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import { router } from './router.js'
import { chuckStore } from './store/chuckStore.js'
import { triviaStore } from './store/triviaStore.js'

Vue.config.productionTip = false

Vue.use(Vuex)

//u konstanti store smo dodali module

const store = new Vuex.Store({
  modules: {
    chuckStore,
    triviaStore
  }
})

//prosledili instanci Vue 

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
