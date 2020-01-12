import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    backendResponse: {},
    showBackendMessage: false,
    userData: {
      idToken: null
      // userId: null
    }
  },
  mutations: {
    updateBackendMessage: (state, backendResponse) => {
      state.backendResponse = backendResponse;
    },
    updateShowBackendMessage: (state, showState) => {
      state.showBackendMessage = showState;
    },
    authUser(state, userData) {
      state.userData.idToken = userData.token;
      //state.userData.userId = userData.userId;
    }
  },
  actions: {
    //eslint-disable-next-line
    signup({ commit }, authData) {
      // Post the sign up data to backend
      const path = "/auth/signup";
      const payload = {
        name: authData.name,
        email: authData.email,
        password: authData.password
      };

      axios
        .post(path, payload)
        .then(res => {
          const userToken = {
            token: res.data.auth_token
          };
          //eslint-disable-next-line
          console.log(res)
          commit("authUser", userToken);
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error)
        });
    },
    //eslint-disable-next-line
    login({ commit }, authData) {
      const path = "/auth/login";
      const payload = {
        email: authData.email,
        password: authData.password
      };

      // Post the sign up data to backend
      axios
        .post(path, payload)
        .then(res => {
          const userToken = {
            token: res.data.auth_token
          };
          //eslint-disable-next-line
          console.log(res)
          commit("authUser", userToken);
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error)
        });
    }
  }
});
