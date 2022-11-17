<script>
import MediaList from './MediaList.vue';
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        MediaList
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <h2 class="container py-3" v-if="store.showWindow">Solo su Boolflix</h2>

        <!-- media list -->
        <MediaList />
    </main>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

main {
    min-height: 100vh;
    background-color: $gray;
    padding-top: 100px;

    h2 {
        color: $light;
        font-weight: 700;
    }
}
</style>