import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    backendResponse: {},
    showBackendMessage: false,
    user: {
      auth_token: null,
      id: null
    }
  },
  mutations: {
    //eslint-disable-next-line
    updateBackendMessage: (state, backendResponse) => {
      state.backendResponse.message = backendResponse.message;
      state.backendResponse.status = backendResponse.status;
    },
    updateShowBackendMessage: (state, showState) => {
      state.showBackendMessage = showState;
    },
    authUser(state, userData) {
      state.user = { ...userData };
    },
    clearAuthData(state) {
      state.user.auth_token = null;
      state.user.id = null;
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
          const user = { ...res.data.user };
          const userToken = {
            token: res.data.auth_token
          };
          //eslint-disable-next-line
          console.log(res)
          commit("authUser", userToken);
          localStorage.setItem("auth_token", user.auth_token);
          localStorage.setItem("userId", user.id);
          commit("updateShowBackendMessage", true);
          commit("updateBackendMessage", {
            message: res.data.message,
            status: res.data.status
          });
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error)
          commit("updateShowBackendMessage", true);
          commit("updateBackendMessage", {
            message: error.response.data.message,
            status: error.response.data.status
          });
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
          console.log('Message: ' + res.data.message)

          //eslint-disable-next-line
          console.log('Status: ' + res.data.status)
          // Set the JWT to Vuex and store it as cookie
          commit("authUser", user);
          localStorage.setItem("auth_token", user.auth_token);
          localStorage.setItem("userId", user.id);
          commit("updateShowBackendMessage", true);
          commit("updateBackendMessage", {
            message: res.data.message,
            status: res.data.status
          });
          router.push({ name: "home" });
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error)
          commit("updateShowBackendMessage", true);
          commit("updateBackendMessage", {
            message: error.response.data.message,
            status: error.response.data.status
          });
        });
    },
    logout({ commit }) {
      commit("clearAuthData");
      router.replace({ name: "login" });
    },

    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("auth_token");
      if (token) {
        const userId = localStorage.getItem("userId");
        const path = "/user/" + userId;
        axios.get(path).then(res => {
          const user = res.data.user;
          commit("authUser", user);
          //eslint-disable-next-line
          console.log(res)
        });
      }
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user.auth_token !== null;
    }
  }
});
