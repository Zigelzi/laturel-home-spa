import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    backendResponse: {},
    showBackendMessage: false
  },
  mutations: {
    updateBackendMessage: (state, backendResponse) => {
      state.backendResponse = backendResponse;
    },
    updateShowBackendMessage: (state, showState) => {
      state.showBackendMessage = showState;
    }
  }
});
