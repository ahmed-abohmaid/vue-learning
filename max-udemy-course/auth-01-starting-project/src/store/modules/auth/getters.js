export default {
  userId(state) {
    return state.userId;
  },
  isAuthLoading(state) {
    return state.isLoading;
  },
  authError(state) {
    return state.error;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  }
};
