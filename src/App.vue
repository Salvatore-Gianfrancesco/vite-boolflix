<script>
import SearchItem from './components/SearchItem.vue';
import MediaList from './components/MediaList.vue';

export default {
  name: 'App',
  components: {
    SearchItem,
    MediaList
  }
}
</script>

<template>
  <!-- search -->
  <SearchItem />

  <!-- movies list -->
  <MediaList />
</template>

<style lang='scss'>

</style>