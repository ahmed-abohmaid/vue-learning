<template>
  <base-container title="Vuex" v-if="isAuthenticated">
    <NormalCount />
    <FavoriteCount />
    <button @click="addOne">Add One</button>
    <button @click="increase({ value: 2 })">Add Two</button>
  </base-container>

  <Auth />
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import NormalCount from './components/NormalCount.vue';
import FavoriteCount from './components/FavoriteCount.vue';
import { mapActions } from 'vuex';
import Auth from './components/Auth/Auth.vue';

export default {
  components: {
    BaseContainer,
    NormalCount,
    FavoriteCount,
    Auth,
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    addOne() {
      // this.$store.commit('increment', 1);
      this.$store.commit({
        type: 'counter/increment',
        value: 1,
      });
    },
    // addTwo() {
    //   // this.$store.commit('increment', { value: 2 });
    //   this.$store.dispatch('increment', { value: 2 });
    // },
    // ...mapActions(['increment']),
    ...mapActions('counter', {
      increase: 'increment',
    }),
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
