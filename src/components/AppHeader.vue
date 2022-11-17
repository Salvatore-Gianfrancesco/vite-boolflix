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
    <header class="d-flex justify-content-between p-2">
        <!-- logo -->
        <section class="logo">
            <img src="../assets/img/logo.png" alt="">
        </section>

        <div class="d-flex align-items-center gap-4">


            <!-- search -->
            <SearchItem />
        </div>

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