<template>
    <div class="alert alert-primary" role="alert">
        <p>{{ randJoke }}</p>
    </div>
</template>

<script>


export default {
    beforeRouteEnter(to,from,next) {
       next(vm => {
           vm.$store.dispatch('joke')
       })
   },
   
   computed: {
       randJoke() {
           return this.$store.getters.randomJoke.value //ovde smo iz getera dovukli
       }
   },
}
</script>

