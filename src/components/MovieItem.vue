<script>
import { store } from '../store';

export default {
    name: 'MovieItem',
    props: {
        movie: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="movie">
            <h4>{{ movie.title }}</h4>
            <h5>{{ movie.original_title }}</h5>
            <img :src="store.selectFlag(movie.original_language)" :alt="movie.original_language">
            <p>{{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang='scss'>
.movie {
    height: 400px;
    border: 1px solid black;
    padding: 1rem;

    img {
        height: 50px;
    }
}
</style>