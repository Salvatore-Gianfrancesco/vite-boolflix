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
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3" v-if="!store.nothingFound">
                <MediaItem v-for="(media, index) in store.mediaList" :media="media" :index="index" />
            </div>

            <!-- no media found -->
            <div class="nothing_found text-center" v-else> No media found! </div>
        </div>
    </section>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.media_list {
    .nothing_found {
        color: $light;
    }
}
</style>