<script>
import SearchItem from './SearchItem.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchItem
    }
}
</script>

<template>
    <header class="d-flex justify-content-between align-items-center p-2">
        <!-- logo -->
        <section class="logo">
            <img src="../assets/img/logo.png" alt="">
        </section>

        <!-- search -->
        <SearchItem />
    </header>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

header {
    height: 65px;
    width: 100%;
    background-color: $dark;
    position: fixed;
    z-index: 999999;

    .logo {
        img {
            height: 50px;
        }
    }
}
</style>