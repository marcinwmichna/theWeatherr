<template>
  <div class="container">
    <div class="chart">
      <line-chart height="150px" />
    </div>
    <div class="day">
      <div class="day__single first">
        <h4 id="fontSize">MON</h4>
        <img class="image_days" src="../assets/sun.svg" alt />
        <h4>19°C</h4>
      </div>
      <div class="day__single now">
        <h4>MON</h4>
        <img class="image_days" src="../assets/sun.svg" alt />
        <h4>19°C</h4>
      </div>
      <div class="day__single">
        <h4>MON</h4>
        <img class="image_days" src="../assets/thunder_days.svg" alt />
        <h4>19°C</h4>
      </div>
      <div class="day__single">
        <h4>MON</h4>
        <img class="image_days" src="../assets/rain_days.svg" alt />
        <h4>19°C</h4>
      </div>
      <div class="day__single last">
        <h4 ref="test">MON</h4>
        <img class="image_days" src="../assets/sun_clouds_days.svg" alt />
        <h4>19°C</h4>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from "@/components/LineChart";

export default {
  components: {
    LineChart,
  },
};
</script>
<style scoped>
.chart {
  margin: auto;
  position: relative;
  max-width: 800px;
}
.day {
  justify-content: space-between;
  max-width: 800px;
  margin: 2em auto auto auto;
  display: flex;
}

.day__single {
  /* padding: 1em; */
  padding: 1em;
  /* margin: 0 auto; */
  /* background-color: #fceece; */
}
.day__single h4 {
  margin: 0.8em 0;
}
.now {
  /* border: 1px solid black; */
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
</style>
