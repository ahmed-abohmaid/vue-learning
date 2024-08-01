<template>
  <base-container title="Vuex">
    <NormalCount />
    <FavoriteCount />
    <button @click="addOne">Add One</button>
    <button @click="addTwo">Add Two</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import NormalCount from './components/NormalCount.vue';
import FavoriteCount from './components/FavoriteCount.vue';

export default {
  components: {
    BaseContainer,
    NormalCount,
    FavoriteCount,
  },
  methods: {
    addOne() {
      // this.$store.commit('increment', 1);
      this.$store.commit({
        type: 'increment',
        value: 1,
      });
    },
    addTwo() {
      this.$store.commit('increment', { value: 2 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
