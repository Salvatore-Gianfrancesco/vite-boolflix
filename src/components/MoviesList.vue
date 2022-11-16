<script>
import MovieItem from './MovieItem.vue';
import { store } from '../store.js';

export default {
    name: 'MoviesList',
    components: {
        MovieItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="movies">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-5 g-3">
                <MovieItem v-for="movie in store.movies" :movie="movie" />
            </div>
        </div>
    </section>
</template>

<style lang='scss'>

</style>