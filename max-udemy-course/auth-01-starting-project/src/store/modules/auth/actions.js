import router from '../../../router';

const apiKey = process.env.VUE_APP_API_KEY;
let timer;

export default {
  async login({ dispatch }, { email, password }) {
    return dispatch('authLogic', { email, password, isLogin: true });
  },
  async signup({ dispatch }, { email, password }) {
    return dispatch('authLogic', { email, password, isLogin: false });
  },
  async authLogic({ commit, dispatch, state }, payload) {
    try {
      state.isLoading = true;
      const { email, password, isLogin } = payload;
      let url = isLogin
        ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.error.message ||
            'Failed to authenticate. Check your login data.'
        );
        throw error;
      } else {
        const expiresIn = +responseData.expiresIn * 1000; // convert to milliseconds
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(() => {
          dispatch('logout');
        }, expiresIn);

        commit('setUser', {
          token: responseData.idToken,
          userId: responseData.localId,
          tokenExpiration: expirationDate,
        });

        const redirectUrl =
          '/' + router.currentRoute.value.query.redirect || '/coaches';
        router.replace(redirectUrl);
      }
    } catch (error) {
      state.error = error.message;
    } finally {
      state.isLoading = false;
    }
  },
  tryLogin({ commit, dispatch }) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      dispatch('logout');
    }, expiresIn);

    commit('setUser', {
      token,
      userId,
    });
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    commit('setUser', {
      token: null,
      userId: null,
    });
    clearTimeout(timer);

    router.replace('/');
  },
};
