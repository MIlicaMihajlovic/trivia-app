//imamo jedan store a ovo je jedan njegov modul

import { chuckService } from '../service/ChuckService.js'

export const chuckStore = {
    state: {
        joke: '',
        categories: []
    },

    actions: {
        async joke({ commit }, categ) {
            try{
                const response = await chuckService.getRandomJoke(categ)

                commit('JOKE', response.value)
                console.log(response)
               
            } catch (error) {
                console.log(error)
              }
        },

        async jokeCategories({ commit }) {
            try{
                const response = await chuckService.getRandomCategories()

                commit('CATEGORIES', response)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        
        
    },

    mutations: {
        JOKE(state, joke) {
            state.joke = joke
        },

        CATEGORIES(state, category) {
            state.categories = category
        }
    },
    
    getters: {
        randomJoke(state) {
            return state.joke
        }, 

        randomCategories(state) {
            return state.categories
        } 
    }
}