<script>
import { store } from '../store';

export default {
    name: 'MediaItem',
    props: {
        media: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col" v-if="media.media_type === 'movie' || media.media_type === 'tv'">
        <div class="media">
            <h4>{{ media.title }}</h4>
            <h5>{{ media.original_title }}</h5>
            <img :src="store.selectFlag(media.original_language)" :alt="media.original_language">
            <p>{{ media.vote_average }}</p>
        </div>
    </div>
</template>

<style lang='scss'>
.media {
    height: 400px;
    border: 1px solid black;
    padding: 1rem;

    img {
        height: 50px;
    }
}
</style>