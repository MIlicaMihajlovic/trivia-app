<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <router-link class="navbar-brand" :to="{name: 'trivia-app'}">
                Trivia app
            </router-link>
             <router-link class="navbar-brand" :to="{name: 'chuck'}">
                Chuck Noris
            </router-link>
        </nav>    
    </div>
</template>

<script>
export default {
    
}
</script>
