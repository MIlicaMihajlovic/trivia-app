import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/trivia-app'},
    {path: '/trivia-app', component: TriviaApp, name: 'trivia-app'}
]


export const router = new VueRouter({
    mode: 'history',
    routes
})