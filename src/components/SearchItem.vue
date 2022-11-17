<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SearchItem',
    data() {
        return {
            store,
        }
    },
    methods: {
        callApi(media) {
            console.log("Searching", media);

            const url = `https://api.themoviedb.org/3/search/multi?api_key=${store.API_KEY}&query=${media}`;
            console.log(url);

            axios.get(url)
                .then(response => {
                    console.log(response);
                    store.mediaList = response.data.results;
                    store.searchedMedia = '';
                    store.showWindow = true;

                    if (store.mediaList.length === 0 || store.mediaList[0].media_type === 'person') {
                        console.log('Nothing found');
                        store.nothingFound = true;
                    } else {
                        store.nothingFound = false;
                        this.createCastList();
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

        createCastList() {
            console.log('Created cast list');
            store.castList = [];

            store.mediaList.forEach(media => {
                const url = `https://api.themoviedb.org/3/${media.media_type}/${media.id}/credits?api_key=${store.API_KEY}`
                // console.log(media.media_type, media.id, url);

                axios.get(url)
                    .then(response => {
                        // console.log(response);
                        let cast = '';

                        let max = 0;
                        if (response.data.cast.length < 5) {
                            max = response.data.cast.length;
                        } else {
                            max = 5
                        }

                        if (max != 0) {
                            cast = response.data.cast[0].name;
                            for (let i = 1; i < max; i++) {
                                cast += ', ';
                                cast += response.data.cast[i].name;
                            }
                        }
                        // console.log(cast);

                        store.castList.push(cast);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            });
        }
    }
}
</script>

<template>
    <section class="search">
        <div class="container d-flex gap-2">
            <input type="search" class="form-control" placeholder="Search a media" v-model.trim="store.searchedMedia"
                @keydown.enter="callApi(store.searchedMedia)">
            <button type="button" class="btn" @click="callApi(store.searchedMedia)">Search</button>
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.search {

    input,
    button {
        color: $dark;
        font-weight: 700;
        transition: 0.3s;
    }

    input {
        width: 200px;
        background-color: $light;

        &:focus {
            border-color: $primary_color;
            box-shadow: 0 0 0 0.25rem rgb(210 9 19 / 25%);
        }
    }

    button {
        background-color: $primary_color;

        &:hover {
            background-color: $primary_color;
            color: $dark;
            opacity: 75%;
        }
    }
}
</style>