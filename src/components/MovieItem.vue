<script>

export default {
    name: 'MovieItem',
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="movie">
            <h4>{{ movie.title }}</h4>
            <h5>{{ movie.original_title }}</h5>
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang='scss'>
.movie {
    height: 400px;
    border: 1px solid black;
    padding: 1rem;
}
</style>