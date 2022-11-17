<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'FilterItem',
    data() {
        return {
            store
        }
    },
    methods: {
        createGenresList() {
            console.log('Genre lists created');

            let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${store.API_KEY}`;
            axios.get(url)
                .then(response => {
                    // console.log(response);
                    store.movieGenres = response.data.genres;
                    // console.log(store.movieGenres);
                })
                .catch(err => {
                    console.log(err);
                })

            url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${store.API_KEY}`;
            axios.get(url)
                .then(response => {
                    // console.log(response);
                    store.tvGenres = response.data.genres;
                    // console.log(store.tvGenres);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    mounted() {
        this.createGenresList();
    }
}
</script>

<template>
    <section class="filter d-flex align-items-center gap-2">
        <select class="form-select" v-model="store.selectedMovieGenre">
            <option value="0">Select Movie genre</option>
            <option :value="genre.id" v-for="genre in store.movieGenres">{{ genre.name }}</option>
        </select>

        <select class="form-select" v-model="store.selectedTVGenre">
            <option value="0">Select TV genre</option>
            <option :value="genre.id" v-for="genre in store.tvGenres">{{ genre.name }}</option>
        </select>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.filter {
    div {
        color: $primary_color;
    }

    select {
        width: 200px;
    }
}
</style>