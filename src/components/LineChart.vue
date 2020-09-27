<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { Chart } from "highcharts-vue";

// let data = [22, 28, 32, 26, 20];
// let labels = ["9:00", "NOW", "15:00", "18:00", "21:00"];
// let suggestedMax = Math.max(...data);

export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3], // sample data
          },
        ],
      },
    };
  },
};
</script>