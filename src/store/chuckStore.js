//imamo jedan store a ovo je jedan njegov modul

import { chuckService } from '../service/ChuckService.js'

export const chuckStore = {
    state: {
        joke: ''
    },

    actions: {
        async joke( {commit} ) {
            try{
                const response = await chuckService.getRandomJoke();

                commit('JOKE', response)
                console.log(response)
               
            } catch (error) {
                console.log(error)
              }
        }      
    },

    mutations: {
        JOKE(state, joke) {
            state.joke = joke
        }
    },
    
    getters: {
        randomJoke: state => state.joke
    }
}