<script>
import { store } from '../store';

export default {
    name: 'MediaItem',
    props: {
        media: Object,
        index: Number
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col" v-if="(media.media_type === 'movie' || media.media_type === 'tv')">
        <div class="media">
            <div class="cover">
                <img :src="'https://image.tmdb.org/t/p/w342' + media.backdrop_path" v-if="media.backdrop_path != null">
                <img src="../assets/img/no_img.jpg" alt="" v-else>

                <div class="description p-2">
                    <!-- original title -->
                    <p>
                        <span class="fw-bold">Original title</span>: {{ media.original_title }}{{ media.original_name }}
                    </p>

                    <!-- vote -->
                    <p>
                        <span class="fw-bold">Vote</span>:
                        <i class="fa-solid fa-star" v-for=" in Math.ceil(media.vote_average / 2)"></i>
                        <i class="fa-regular fa-star" v-for=" in 5 - Math.ceil(media.vote_average / 2)"></i>
                    </p>

                    <p>
                        <span class="fw-bold">Language</span>:
                        <img :src="store.selectFlag(media.original_language)" :alt="media.original_language"
                            class="flag">
                    </p>

                    <!-- overview -->
                    <p><span class="fw-bold">Overview</span>: {{ media.overview }}</p>

                    <!-- <button type="button" class="btn">Show cast</button> -->

                    <!-- cast -->
                    <p v-if="store.castList[index] != ''">
                        <span class="fw-bold">Cast</span>: {{ store.castList[index] }}
                    </p>
                </div>
            </div>

            <div class="title">
                <h5 class="pt-2" v-if="media.title != null">{{ media.title }}</h5>
                <h5 class="pt-2" v-else>{{ media.name }}</h5>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
@use '../assets/scss/partials/variables' as *;

.media {
    .cover {
        position: relative;

        img {
            width: 100%;
        }

        .description {
            height: 100%;
            width: 100%;
            background-color: $dark;
            color: $light;
            position: absolute;
            top: 0;
            left: 0;
            overflow-y: auto;
            visibility: hidden;

            .fa-star {
                color: $star;
            }

            .flag {
                height: 15px;
                width: 30px;
            }

            /*  button {
                background-color: $primary_color;
                color: $dark;
                font-weight: 700;

                &:hover {
                    background-color: $primary_color;
                    color: $dark;
                    opacity: 75%;
                    transition: 0.3s;
                }
            } */

            &::-webkit-scrollbar {
                width: 5px;
            }

            &::-webkit-scrollbar-track {
                background: #f1f1f1;
            }

            &::-webkit-scrollbar-thumb {
                background: #888;
            }

            &::-webkit-scrollbar-thumb:hover {
                background: #555;
            }
        }

        &:hover img {
            visibility: hidden;
        }

        &:hover .description,
        &:hover .flag {
            visibility: visible;
        }
    }

    .title {
        h5 {
            color: $light;
        }
    }
}
</style>