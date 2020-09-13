import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    COORDINATES_API_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
    WEATHER_API_URL:
      "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely",
    apikey: process.env.VUE_APP_API_KEY,
    weather: {
      city: {
        pending: false,
        status: false,
        name: null,
        wind: null,
        rain: null,
        humidity: null,
      },
      coordinates: {
        pending: false,
        status: false,
        name: null,
        lon: null,
        lat: null,
      },
    },
  },
  mutations: {
    SET_WEATHER_COORDINATES_DATA(state, data) {
      state.weather.coordinates.lon = data.coord.lon;
      state.weather.coordinates.lat = data.coord.lat;
    },
    SET_WEATHER_COORDINATES_PENDING(state, bool) {
      state.weather.coordinates.pending = bool;
    },
    SET_WEATHER_COORDINATES_STATUS(state, bool) {
      state.weather.coordinates.status = bool;
    },
    SET_WEATHER_COORDINATES_NAME(state, data) {
      state.weather.coordinates.name = data.name;
    },
    SET_WEATHER_CITY_PENDING(state, bool) {
      state.weather.city.pending = bool;
    },
    SET_WEATHER_CITY_STATUS(state, bool) {
      state.weather.city.status = bool;
    },
    SET_WEATHER_CITY_STATUS(state, bool) {
      state.weather.city.status = bool;
    },
    SET_WEATHER_CITY_STATUS(state, bool) {
      state.weather.city.status = bool;
    },
  },
  actions: {
    async getCoordinatesData(context) {
      try {
        context.commit("SET_WEATHER_COORDINATES_PENDING", true);

        await axios
          .get(
            this.state.COORDINATES_API_URL +
              "rzeszow" +
              "&appid=" +
              this.state.apikey,
          )
          .then(response => {
            console.log(response.data);
            context.commit("SET_WEATHER_COORDINATES_DATA", response.data);
            context.commit("SET_WEATHER_COORDINATES_PENDING", false);
            context.commit("SET_WEATHER_COORDINATES_STATUS", true);
          });
      } catch (error) {
        console.log(error);
      }
    },

    async getWeatherData(context) {
      try {
        context.commit("");
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
