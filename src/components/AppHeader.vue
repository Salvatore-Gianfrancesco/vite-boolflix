<script>
import SearchItem from './SearchItem.vue';
import FilterItem from './FilterItem.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchItem,
        FilterItem
    }
}
</script>

<template>
    <header class="d-flex justify-content-between align-items-center p-2">
        <!-- logo -->
        <section class="logo">
            <img src="../assets/img/logo.png" alt="">
        </section>

        <div class="d-flex align-items-center gap-4">
            <!-- filter -->
            <FilterItem />

            <!-- search -->
            <SearchItem />
        </div>

    </header>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

header {
    height: 100px;
    width: 100%;
    background-color: $dark;
    position: fixed;
    z-index: 999999;

    .logo {
        img {
            height: 70px;
        }
    }
}
</style>