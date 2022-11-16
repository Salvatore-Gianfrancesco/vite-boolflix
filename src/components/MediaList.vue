<script>
import MediaItem from './MediaItem.vue';
import { store } from '../store.js';

export default {
    name: 'MediaList',
    components: {
        MediaItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="media_list">
        <div class="container">
            <!-- row -->
            <div class="row row-cols-1 row-cols-md-5 g-3" v-if="!store.nothingFound">
                <MediaItem v-for="media in store.mediaList" :media="media" />
            </div>

            <!-- no media found -->
            <div class="text-center" v-else> No media found! </div>
        </div>
    </section>
</template>

<style lang='scss'>

</style>