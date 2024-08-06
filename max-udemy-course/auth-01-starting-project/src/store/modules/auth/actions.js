const apiKey = process.env.VUE_APP_API_KEY;

export default {
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
          responseData.error.message || 'Failed to Submit your data.'
        );
        throw error;
      } else {
        commit('setUser', {
          token: responseData.idToken,
          userId: responseData.localId,
          tokenExpiration: responseData.expiresIn,
        });
      }
    } catch (error) {
      state.error = error.message;
    } finally {
      state.isLoading = false;
    }
  },
};
