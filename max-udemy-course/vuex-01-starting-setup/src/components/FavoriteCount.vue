<template>
  <h3>{{ count }} (Favorite)</h3>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.normalizedCount;
    },
  },
};
</script>
