<template>
  <base-container title="Auth">
    <button @click="login" v-if="!isAuthenticated">Login</button>
    <button @click="logout" v-else>Logout</button>
  </base-container>
</template>

<script>
import BaseContainer from '../BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
