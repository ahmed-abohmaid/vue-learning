export default {
  handleLogin(state) {
    state.isLoggedIn = true;
  },
  handleLogout(state) {
    state.isLoggedIn = false;
  },
};
