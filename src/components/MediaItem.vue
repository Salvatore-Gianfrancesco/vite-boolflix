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
            <img :src="store.imgUrl + media.backdrop_path" class="cover">
            <h4>{{ media.title }}</h4>
            <h5>{{ media.original_title }}</h5>
            <img :src="store.selectFlag(media.original_language)" :alt="media.original_language" class="flag">
            <p>
                <i class="fa-solid fa-star" v-for=" in Math.ceil(media.vote_average / 2)"></i>
                <i class="fa-regular fa-star" v-for=" in 5 - Math.ceil(media.vote_average / 2)"></i>
            </p>
        </div>
    </div>
</template>

<style lang='scss'>
.media {
    height: 400px;
    border: 1px solid black;
    padding: 1rem;

    .cover {
        width: 100%;
    }

    .flag {
        height: 20px;
    }
}
</style>