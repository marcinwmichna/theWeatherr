import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BY_NAME_API_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
    BY_COORDINATES_API_URL:
      "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely",
    apikey: process.env.VUE_APP_APIKEY,
    weather: {
      byCoordinates: {
        status: false,
        pending: false,
        lon: null,
        lat: null,
        name: null,
        current: '',
        hourly: '',
        daily: '',
      },
      byName: {
        name: "rzeszow",
        lon: null,
        lat: null,
      },
    },
    weatherImgs: {

    }
  },
  mutations: {
    SET_DATA_BYNAME: (state, data) => (
      (state.weather.byName.lon = data.coord.lon),
      (state.weather.byName.lat = data.coord.lat),
      (state.weather.byName.name = data.name)
    ),
    SET_DATA_STATUS: (state, bool) =>
      (state.weather.byCoordinates.status = bool),

    SET_DATA_PENDING: (state, bool) =>
      (state.weather.byCoordinates.pending = bool),

    SET_DATA_BYCOORDINATES(state, data) {
      state.weather.byCoordinates.name = this.state.weather.byName.name;
      state.weather.byCoordinates.lon = data.lon;
      state.weather.byCoordinates.lat = data.lat;
      state.weather.byCoordinates.current = data.current;
      state.weather.byCoordinates.hourly = data.hourly;
      state.weather.byCoordinates.daily = data.daily;
    },
  },
  actions: {
    async fetchCityCoordinates({ commit }) {
      try {
        commit("SET_DATA_PENDING", true);
        await axios
          .get(
            this.state.BY_NAME_API_URL +
            this.state.weather.byName.name +
            "&units=metric" +
            "&appid=" +
            this.state.apikey,
          )
          .then(async response => {
            commit("SET_DATA_BYNAME", response.data);
            await axios
              .get(
                this.state.BY_COORDINATES_API_URL +
                "&lat=" +
                this.state.weather.byName.lat +
                "&lon=" +
                this.state.weather.byName.lon +
                "&units=metric" +
                "&appid=" +
                this.state.apikey,
              )
              .then(response => {
                commit("SET_DATA_BYCOORDINATES", response.data);
                commit("SET_DATA_STATUS", true);
              });
          });
      } catch (error) {
        commit("SET_DATA_PENDING", false);
        commit("SET_DATA_STATUS", false);

        console.log(error);
      }
    },

  },

  modules: {},
  getters: {
    dataByCoordinates: state => {
      console.log(state.weather.byCoordinates);
      return state.weather.byCoordinates
    }
  }

});
