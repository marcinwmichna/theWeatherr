import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apikey: process.env.VUE_APP_API_KEY,
    weather: {
      city: null,
      wind: null,
      rain: null,
      humidity: null,
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
