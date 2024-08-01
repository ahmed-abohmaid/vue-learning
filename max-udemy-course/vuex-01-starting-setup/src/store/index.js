import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      count: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.value;
    },
    handleLogin(state) {
      state.isLoggedIn = true;
    },
    handleLogout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    increment(context, { value }) {
      setTimeout(() => {
        // context.commit({
        //   type: 'increment',
        //   value,
        // });
        context.state.count += value;
      }, 2000);
    },
    login({ commit }) {
      commit('handleLogin');
    },
    logout({ commit }) {
      commit('handleLogout');
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
