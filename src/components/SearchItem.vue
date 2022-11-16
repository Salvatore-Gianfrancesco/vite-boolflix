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
    <section class="search my-4">
        <div class="container d-flex gap-2">
            <input type="search" class="form-control" placeholder="Search a film" v-model.trim="store.searchedMovie">
            <button type="button" class="btn btn-primary" @click="store.callApi(store.searchedMovie)">Search</button>
        </div>
    </section>
</template>

<style lang='scss'>

</style>