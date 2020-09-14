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
    apikey: process.env.VUE_APP_API_KEY,
    weather: {
      byCoordinates: {
        lon: null,
        lat: null,
        name: null,
        current: {},
        hourly: [{}],
        daily: [{}],
      },
      byName: {
        name: "rzeszow",
        lon: null,
        lat: null,
      },
    },
  },
  mutations: {
    SET_DATA_BYNAME: (state, data) => (
      (state.weather.byName.lon = data.coord.lon),
      (state.weather.byName.lat = data.coord.lat),
      (state.weather.byName.name = data.name)
    ),
    // SET_WEATHER_BYNAME(state, data) {

    // },

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
        await axios
          .get(
            this.state.BY_NAME_API_URL +
              this.state.weather.byName.name +
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
                  "&appid=" +
                  this.state.apikey,
              )
              .then(response => {
                commit("SET_DATA_BYCOORDINATES", response.data);
              });
          });
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
});
