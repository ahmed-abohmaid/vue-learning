import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.value;
    },
  },
  getters: {
    finalCount(state) {
      return state.count * 2;
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
  },
});
