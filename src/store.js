import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    API_KEY: 'aad7527bbb1b49c37ed6f87a1229d050',
    API_URL: `https://api.themoviedb.org/3/search/multi?api_key=aad7527bbb1b49c37ed6f87a1229d050&query=`,
    showWindow: false,
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
                    this.showWindow = true;

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
            return url + 'gb';
        }
        return url + flag;
    },

    showCast(media) {
        const { id, media_type } = media;
        const url = `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${this.API_KEY}`
        // console.log(id, media_type, url);

        /* axios.get(url)
            .then(response => {
                // console.log(response.data);
                const max = (response.data.cast.length < 5) ? response.data.cast.length : 5;
                // console.log(max);

                let cast = '';
                if (media_type === 'movie') {
                    cast = `${media.title}: `;
                } else {
                    cast = `${media.name}: `;
                }
                if (max != 0) {
                    cast += response.data.cast[0].name;
                }
                for (let i = 1; i < max; i++) {
                    cast += ', ';
                    cast += response.data.cast[i].name;
                }
                console.log(cast);

                return 'ciao';
            })
            .catch(err => {
                console.log(err);
            }) */

        const promise = axios.get(url)
        const dataPromise = promise.then((response) => {
            // console.log(response.data);
            const max = (response.data.cast.length < 5) ? response.data.cast.length : 5;
            // console.log(max);

            let cast = '';
            if (max != 0) {
                cast += response.data.cast[0].name;
            }
            for (let i = 1; i < max; i++) {
                cast += ', ';
                cast += response.data.cast[i].name;
            }
            // console.log(cast);

            return cast;
        })
            .catch(err => {
                console.log(err);
            })
        console.log(promise, dataPromise);
        return dataPromise;
    }
})