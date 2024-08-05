export default {
  finalCount(state) {
    return state.count + ' clicks';
  },
  normalizedCount(_, getters) {
    const finalCount = getters.finalCount;
    if (finalCount < 0) {
      return 0;
    } else if (finalCount > 100) {
      return 100;
    } else {
      return finalCount;
    }
  },
};
