<template>
  <h3>{{ normalizedCount }} (Favorite)</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // count() {
    //   return this.$store.getters.normalizedCount;
    // },
    ...mapGetters('counter', ['normalizedCount']),
  },
};
</script>
