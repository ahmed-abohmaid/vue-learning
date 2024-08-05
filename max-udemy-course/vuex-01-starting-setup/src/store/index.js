import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import counterModule from './modules/counter';

export const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
});
