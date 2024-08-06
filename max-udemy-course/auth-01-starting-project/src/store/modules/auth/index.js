import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state() {
    return {
      token: null,
      userId: null,
      tokenExpiration: null,
      isLoading: false,
      error: null,
    };
  },
  actions,
  mutations,
  getters,
};
