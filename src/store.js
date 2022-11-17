import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    API_KEY: 'aad7527bbb1b49c37ed6f87a1229d050',
    searchedMedia: '',
    mediaList: null,
    castList: [],
    showWindow: false,
    nothingFound: false,
    /* genreList: [],
    selectedGenre: '', */

    selectFlag(flag) {
        let url = 'https://countryflagsapi.com/svg/';

        if (flag === 'en') {
            return url + 'gb';
        }
        return url + flag;
    }
})