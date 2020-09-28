<template>
  <div class="container">
    <ul class="day">
      <div
        v-for="(day, index) in dataByCoordinates.daily"
        :key="day.dt"
        class="day__single "
        v-bind:class="[index == 0 ? '--current' : '']"
      >
        <div>
          <h4 class="weekDay" v-if="index == 0">
            TODAY
          </h4>
          <h4 class="weekDay" v-else>
            {{ days[getDayOfWeek(dataByCoordinates.daily[index].dt)] }}
          </h4>
          <img
            class="image_days"
            :src="
              `http://openweathermap.org/img/wn/${dataByCoordinates.daily[index].weather[0].icon}@2x.png`
            "
            alt
          />
          <h4 class="temp">
            {{ Math.floor(dataByCoordinates.daily[index].temp.max) }}°
          </h4>
        </div>
      </div>
    </ul>
  </div>
</template>
<script>
import store from "@/store/index.js";
import { mapGetters } from "vuex";

export default {
  store,
  props: {
    name: String,
  },
  data() {
    return {
      days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    };
  },
  methods: {
    getDayOfWeek(unixDate) {
      var date = new Date(unixDate * 1000);
      return date.getDay();
    },
  },
  mounted() {
    // console.log(this.dataByCoordinates.daily);
    // console.log(this.$store.state.weather.byCoordinates);
  },
  computed: {
    ...mapGetters(["dataByCoordinates"]),
  },
};
</script>
<style scoped>
.day {
  justify-content: space-between;
  max-width: 1000px;
  display: flex;
  /* overflow-x: hidden; */
  overflow-x: auto;
  scrollbar-width: none;
}
.day::-webkit-scrollbar {
  display: none;
}

.day__single {
  padding: 1em;
}
.day__single div h4 {
  white-space: nowrap;
  margin: 0.8em 0;
}
.weekDay,
.temp {
  text-align: center;
}

.now {
  background-color: #fceece;
  border-radius: 20px;
}
.--current {
  border: 1px solid #8a867d;
  border-radius: 20px;
  /* background-color: #fceece; */
}
.image_days {
  width: 60px;
  height: 60px;
  display: flex;
  margin: 0 auto;
  justify-self: center;
  align-self: center;
}
@media only screen and (min-width: 1200px) {
  .day {
    display: block;
    align-items: center;
    align-content: center;
    border-left: 1px solid #8a867d;
  }
  .day__single {
    display: flex;
    padding: 0.5em;
    margin-left: 30px;
  }
  .day__single div {
    display: flex;
  }

  .day__single div h4 {
    padding: 0 1em;
  }

  .weekDay {
    text-align: right;
    width: 6rem;
  }
  .temp {
    width: 80px;
    text-align: left;
  }
  .container {
    margin: auto;
    align-self: center;
  }
}
</style>
