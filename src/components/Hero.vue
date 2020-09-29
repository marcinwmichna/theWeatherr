<template>
  <div
    v-if="dataByCoordinates.status && !dataByCoordinates.pending"
    class="hero"
  >
    <div class="hero__weather">
      <div class="hero__day_night_temp_wrap">
        <div class="hero__day_night">
          <div class="hero__day">
            <h4>{{ Math.floor(dataByCoordinates.daily[0].temp.max) }}°C</h4>
            <img src="../assets/sun.svg" alt />
          </div>
          <div class="hero__night">
            <h4>{{ Math.floor(dataByCoordinates.daily[0].temp.night) }}°C</h4>
            <img src="../assets/moon.svg" alt />
          </div>
        </div>
        <div class="hero__temp">
          <h1>{{ Math.floor(dataByCoordinates.current.temp) }}°C</h1>
          <h2>{{ dataByCoordinates.current.weather[0].main }}</h2>
        </div>
      </div>
    </div>
    <div class="hero__additional">
      <div class="hero__additional_wrap">
        <div class="hero__wind">
          <img src="../assets/wind.svg" alt />
          <h4>{{ dataByCoordinates.current.wind_speed }} km/h</h4>
        </div>
        <div class="hero__rain">
          <img src="../assets/umbrella.svg" alt />
          <h4>{{ dataByCoordinates.hourly[0].pop * 100 }}%</h4>
        </div>
        <div class="hero__humidity">
          <img src="../assets/humidity.svg" alt />
          <h4>{{ dataByCoordinates.hourly[0].humidity }}%</h4>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["dataByCoordinates"]),
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

.hero__weather {
  display: flex;
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
  opacity: 0.8;
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
  margin-bottom: -0.35em;
}
.hero__temp h2 {
  font-size: 2.5em;
  text-align: center;
  justify-content: flex-end;
  opacity: 0.8;
}
.hero__additional {
  display: flex;
  margin: auto;
}
.hero__additional_wrap {
  display: flex;
  flex-direction: row;
  margin: auto;
  opacity: 0.8;
}
.hero__additional_wrap div h4 {
  text-align: center;
}

.hero__wind,
.hero__rain,
.hero__humidity {
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
}
.hero__wind img {
  margin: auto;
}
.hero__wind h4 {
  white-space: nowrap;
}
@media (min-width: 376px) {
  .hero__temp h1 {
    font-size: 6rem;
  }
}
@media (min-width: 1200px) {
  .hero {
    padding-right: 3rem;
  }
}
</style>
