<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    // store.createGenresList();
  }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Main -->
  <AppMain />
</template>

<style lang='scss'>

</style>