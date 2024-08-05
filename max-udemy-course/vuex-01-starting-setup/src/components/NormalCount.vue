<template>
  <h3>{{ finalCount }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // count() {
    //   return this.$store.getters.finalCount;
    // },
    ...mapGetters('counter', ['finalCount']),
  },
};
</script>
