<template>
    <div class="alert alert-primary" role="alert">
        <p>{{ randjoke }}</p>
        <form @submit.prevent="joke(jokeCategory)">
           <div class="form-group">
                <select v-model="jokeCategory" class="form-control">
                <!-- <option selected>Choose</option> -->
                <option v-for="category in categories" :key="category.id" >{{ category }}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">See new joke</button>
        </form>
    </div>
</template>

<script>

import { mapActions, mapGetters  } from 'vuex'

export default {

    data() {
        return {
            jokeCategory: ''
        }
    },

    beforeRouteEnter(to,from,next) {
       next(vm => {
           vm.joke()
           vm.jokeCategories()
       })
   },
   
   computed: {

       ...mapGetters ({
           randjoke: 'randomJoke',
           categories: 'randomCategories'
       }),

   },

    methods: {
        ...mapActions ([ 'joke', 'jokeCategories' ])
    },




}
</script>

