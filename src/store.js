import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=aad7527bbb1b49c37ed6f87a1229d050&language=en-US&query=',
    movies: null,
    searchedMovie: '',

    /* methods */
    callApi(movie) {
        if (this.searchedMovie.length != '') {
            console.log("Searching ", movie);

            const url = `${this.API_URL}${movie}`;
            console.log(url);

            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.movies = response.data.results;
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