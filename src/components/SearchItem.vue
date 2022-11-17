<script>
import { store } from '../store.js';

export default {
    name: 'SearchItem',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="search">
        <div class="container d-flex gap-2">
            <input type="search" class="form-control" placeholder="Search a media" v-model.trim="store.searchedMedia"
                @keydown.enter="store.callApi(store.searchedMedia)">
            <button type="button" class="btn" @click="store.callApi(store.searchedMedia)">Search</button>
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