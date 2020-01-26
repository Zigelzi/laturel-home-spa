import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    backendResponse: {},
    showBackendMessage: false,
    userData: {
      auth_token: null
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
      state.userData = { ...userData };
    },
    clearAuthData(state) {
      state.userData.auth_token = null;
      localStorage.removeItem("auth_token");
    }
  },
  actions: {
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
          commit("updateShowBackendMessage", true);
          commit("updateBackendMessage", res.data);
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error)
          commit("updateShowBackendMessage", true);
          commit("updateBackendMessage", error.response.data);
        });
    },
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
          const user = { ...res.data.user };
          //eslint-disable-next-line
          console.log(res)
          // Set the JWT to Vuex and store it as cookie
          commit("authUser", user);
          localStorage.setItem("auth_token", JSON.stringify(user.auth_token));
          commit("updateShowBackendMessage", true);
          commit("updateBackendMessage", res.data);
          router.push({ name: "home" });
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error)
          commit("updateShowBackendMessage", true);
          commit("updateBackendMessage", error.response.data);
        });
    },
    logout({ commit }) {
      commit("clearAuthData");
      router.replace({ name: "login" });
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.userData.auth_token !== null;
    }
  }
});
