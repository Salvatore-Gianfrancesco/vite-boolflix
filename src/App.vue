<script>
import SearchItem from './components/SearchItem.vue';
import MoviesList from './components/MoviesList.vue';

export default {
  name: 'App',
  components: {
    SearchItem,
    MoviesList
  }
}
</script>

<template>
  <!-- search -->
  <SearchItem />

  <!-- movies list -->
  <MoviesList />
</template>

<style lang='scss'>

</style>