<template>
  <div class="hero">
    <div class="hero__localization">
      <h2>Rzeszow</h2>
      <h3>Friday, 14 August 2020</h3>
    </div>
    <div class="hero__weather">
      <div class="hero__day_night_temp_wrap">
        <div class="hero__day_night">
          <div class="hero__day">
            <h4>32°C</h4>
            <img src="../assets/sun.svg" alt />
          </div>
          <div class="hero__night">
            <h4>19°C</h4>
            <img src="../assets/moon.svg" alt />
          </div>
        </div>
        <div class="hero__temp">
          <h1>28°C</h1>
          <h2>Sunny</h2>
        </div>
      </div>
    </div>
    <div class="hero__additional">
      <div class="hero__additional_wrap">
        <div class="hero__wind">
          <img src="../assets/wind.svg" alt />
          <h4>10km/h</h4>
        </div>
        <div class="hero__rain">
          <img src="../assets/umbrella.svg" alt />
          <h4>0%</h4>
        </div>
        <div class="hero__humidity">
          <img src="../assets/humidity.svg" alt />
          <h4>50%</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Vuex from "vuex";
import store from "../store/index";
export default {
  store,
  mounted() {
    console.log(this.$store.state.weather.coordinates);
    store.dispatch("getCoordinatesData");
  },
};
</script>
<style scoped>
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}

.hero__additional_wrap div img {
  width: 3em;
  height: 3em;
}
.hero__day_night div img {
  width: 1.4em;
  height: 1.4em;
  align-self: center;
}
.hero__localization {
  margin: auto;
  max-width: 800px;
}
.hero__localization h2 {
  font-size: 4em;
  font-weight: 500;
  margin-bottom: -10px;
}
.hero__localization h3 {
  font-size: 1.2em;
  font-weight: 400;
  padding-left: 0.25em;
}
.hero__weather {
  display: flex;
  /* margin-top: 4em; */
  margin: 4em auto 0 auto;
}
.hero__day,
.hero__night {
  padding: 0.2em 0;
  display: flex;
  font-size: 1.2em;
}
.hero__day h4,
.hero__night h4 {
  margin: 0 1rem 0 0;
  font-size: 1.5em;
  opacity: 80%;
}
.hero__day_night {
  align-self: center;
  margin-top: -1.5em;
}
.hero__day_night_temp_wrap {
  display: flex;
  margin: auto;
}
.hero__temp h1 {
  font-size: 5.5em;
  justify-content: flex-end;
  margin: 0 1.5rem;
  /* padding-left: 0.2em; */
  margin-bottom: -0.35em;
}
.hero__temp h2 {
  font-size: 2.5em;
  text-align: center;
  justify-content: flex-end;
  opacity: 80%;
}
.hero__additional {
  display: flex;
  margin: auto;
}
.hero__additional_wrap {
  display: flex;
  flex-direction: row;
  margin: auto;
  opacity: 80%;
}
.hero__additional_wrap div h4 {
  text-align: center;
}

.hero__wind,
.hero__rain,
.hero__humidity {
  padding: 1em 2em;
}
@media (min-width: 376px) {
  .hero__temp h1 {
    font-size: 8em;
  }
}
</style>
