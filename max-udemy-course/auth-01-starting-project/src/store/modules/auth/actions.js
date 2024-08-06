import router from '../../../router';

const apiKey = process.env.VUE_APP_API_KEY;

export default {
  async login({ commit, state }, { email, password }) {
    try {
      state.isLoading = true;
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.error.message || 'Failed to submit your data.'
        );
        throw error;
      } else {
        commit('setUser', {
          token: responseData.idToken,
          userId: responseData.localId,
          tokenExpiration: responseData.expiresIn,
        });
        router.replace('/coaches');
      }
    } catch (error) {
      state.error = error.message;
    } finally {
      state.isLoading = false;
    }
  },
  async signup({ commit, state }, { email, password }) {
    try {
      state.isLoading = true;
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.error.message || 'Failed to submit your data.'
        );
        throw error;
      } else {
        commit('setUser', {
          token: responseData.idToken,
          userId: responseData.localId,
          tokenExpiration: responseData.expiresIn,
        });
        router.replace('/coaches');
      }
    } catch (error) {
      state.error = error.message;
    } finally {
      state.isLoading = false;
    }
  },
  logout({ commit }) {
    commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
    router.replace('/');
  },
};
