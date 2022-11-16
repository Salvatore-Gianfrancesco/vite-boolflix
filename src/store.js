import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    API_URL: 'https://api.themoviedb.org/3/search/multi?api_key=aad7527bbb1b49c37ed6f87a1229d050&query=',
    mediaList: null,
    searchedMedia: '',
    imgUrl: 'https://image.tmdb.org/t/p/w342',
    nothingFound: false,

    /* methods */
    callApi(media) {
        if (this.searchedMedia != '') {
            console.log("Searching ", media);

            const url = `${this.API_URL}${media}`;
            console.log(url);

            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.mediaList = response.data.results;
                    this.searchedMedia = '';

                    if (this.mediaList.length === 0 || this.mediaList[0].media_type === 'person') {
                        console.log('Nothing found');
                        this.nothingFound = true;
                    } else {
                        this.nothingFound = false;
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },

    selectFlag(flag) {
        let url = 'https://countryflagsapi.com/svg/';

        if (flag === 'en') {
            return url + 'gb-eng';
        }
        return url + flag;
    }
})