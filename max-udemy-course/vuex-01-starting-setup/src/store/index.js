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
  actions: {
    increment(context, { value }) {
      setTimeout(
        () => {
          // context.commit({
          //   type: 'increment',
          //   value,
          // });
          context.state.count += value
        },

        2000
      );
    },
  },
  getters: {
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
  },
});
