<template>
  <div class="hero__localization">
    <h2>{{ dataByCoordinates.name }}</h2>
    <h3 v-if="dataByCoordinates.status">
      {{ getFullDate(dataByCoordinates.current.dt) }}
    </h3>
  </div>
</template>
<script>
import store from "@/store/index.js";
import { mapGetters } from "vuex";

export default {
  store,
  data() {
    return {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  methods: {
    getFullDate(unixDate) {
      var date = new Date(unixDate * 1000);
      var dayOfWeek = this.days[date.getDay() - 1];
      var dayOfMonth = date.getDate();
      var month = this.months[date.getMonth()];
      var year = date.getFullYear();
      var fullDate = dayOfWeek + ", " + dayOfMonth + " " + month + " " + year;
      return fullDate;
    },
  },
  computed: {
    ...mapGetters(["dataByCoordinates"]),
  },
};
</script>
<style scoped>
h2,
h3 {
  margin: 0;
}
.hero__localization {
  max-width: 800px;
  padding: 1rem;
}
.hero__localization h2 {
  font-size: 3em;
  font-weight: 500;
  margin-bottom: -10px;
}
.hero__localization h3 {
  font-size: 0.8em;
  font-weight: 400;
  padding-left: 0.25em;
}
</style>