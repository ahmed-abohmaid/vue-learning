export default {
  setUser(state, { token, userId, tokenExpiration }) {
    state.token = token;
    state.userId = userId;
    state.tokenExpiration = tokenExpiration;
  },
  resetAuthError(state) {
    state.error = null;
  }
};
