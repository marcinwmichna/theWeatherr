<template>
  <div class="container">
    <ul class="day">
      <div v-for="day in days" :key="day.name" class="day__single">
        <h4>{{ day.name }}</h4>
        <img class="image_days" src="../assets/sun.svg" alt />
        <h4>19°C</h4>
      </div>
    </ul>
  </div>
</template>
<script>
import store from "@/store/index.js";

export default {
  store,
  props: {
    name: String,
  },
  data() {
    return {
      days: [
        { name: this.$store.state.weather.byCoordinates.name },
        { name: this.$store.state.weather.byCoordinates.name },
        { name: this.$store.state.weather.byCoordinates.name },
        { name: this.$store.state.weather.byCoordinates.name },
        { name: this.$store.state.weather.byCoordinates.name },
        { name: this.$store.state.weather.byCoordinates.name },
      ],
    };
  },
  mounted() {
    console.log(this.$store.state.weather.byCoordinates.daily);
  },
};
</script>
<style scoped>
.day {
  justify-content: space-between;
  max-width: 800px;
  display: flex;
}

.day__single {
  padding: 1em;
}
.day__single h4 {
  margin: 0.8em 0;
}
.now {
  background-color: #fceece;
  border-radius: 20px;
}
.first {
  padding-left: 0;
}
.last {
  padding-right: 0;
}
.image_days {
  width: 31px;
  height: 31px;
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
  }
  .day__single {
    display: flex;
    padding: 1em;
  }
  .day__single h4 {
    padding: 0 1em;
  }
  .container {
    margin: auto;
    align-self: center;
  }
}
</style>
