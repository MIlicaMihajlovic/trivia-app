import Vue from 'vue'
import VueRouter from 'vue-router'

import TriviaApp from './components/TriviaApp.vue'
import Chuck from './components/Chuck.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/trivia-app'},
    {path: '/trivia-app', component: TriviaApp, name: 'trivia-app'},
    {path: '/chuck', component: Chuck, name: 'chuck'}
]


export const router = new VueRouter({
    mode: 'history',
    routes
})