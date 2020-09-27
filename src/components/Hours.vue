<template>
  <div class="container">
    <ul>
      <li
        v-for="(hour, index) in dataByCoordinates.hourly"
        :key="hour.dt"
        class="hourItem"
        v-bind:class="[index == 0 ? '--current' : '']"
      >
        <h4 class="temperature">
          {{ Math.floor(dataByCoordinates.hourly[index].temp) }}°C
        </h4>
        <img
          class="image_days"
          :src="
            `http://openweathermap.org/img/wn/${dataByCoordinates.hourly[index].weather[0].icon}@2x.png`
          "
          alt
        />
        <link />
        <h4 class="hour">
          {{ getHour(dataByCoordinates.hourly[index].dt) }}:00
        </h4>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["dataByCoordinates"]),
  },
  methods: {
    getHour(unixDate) {
      var date = new Date(unixDate * 1000);
      return date.getHours();
    },
  },
};
</script>
<style scoped>
.image_days {
  width: 60px;
  height: 60px;
  display: flex;
  margin: 0 auto;
  justify-self: center;
  align-self: center;
}
.container ul {
  justify-content: space-between;
  max-width: 1000px;
  /* overflow-x: hidden; */
  display: flex;
  overflow-x: auto;
  margin-bottom: 1em;
  /* scrollbar-width: thin; */
}
.container ul::-webkit-scrollbar {
  display: none;
}
.hourItem {
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  margin: 0 0.2rem;
}
.--current {
  /* border: 1px solid #8a867d; */
  border-radius: 20px;
  background-color: #fceece;
}
.temperature,
.hour {
  margin: auto;
  padding: 0.7rem;
}
@media (min-width: 1200px) {
  .container ul {
    max-width: 600px;
    margin-top: 4rem;
  }
  .hourItem {
    /* margin: 0 0.1rem; */
    margin: 0;
    padding: 0.5rem;
  }
}
</style>