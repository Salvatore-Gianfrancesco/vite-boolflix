import { reactive } from 'vue';

export const store = reactive({
    API_KEY: 'aad7527bbb1b49c37ed6f87a1229d050',
    searchedMedia: '',
    mediaList: null,
    castList: [],
    showWindow: false,
    nothingFound: false,
    movieGenres: [],
    tvGenres: [],
    selectedMovieGenre: 0,
    selectedTVGenre: 0
})