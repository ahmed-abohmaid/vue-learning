import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return { isLoggedIn: false };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});
