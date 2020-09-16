<script>
import { Line } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

// console.log("MAX: " + suggestedMax);
// let data = "";
let data = [22, 28, 32, 26, 20];
let labels = ["9:00", "NOW", "15:00", "18:00", "21:00"];
let suggestedMax = Math.max(...data);
// let fontSize = document.getElementById(fontSize);
// console.log(fontSize);

export default {
  extends: Line,
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  methods: {},

  data() {
    return {
      chartData: {
        labels: labels,
        datasets: [
          {
            data: data,
            fill: false,
            borderColor: "#2C3E50",
            backgroundColor: "#2C3E50",
            borderWidth: 1,
            datalabels: {
              color: "#655F50",
              align: "end",
              display: "auto",
            },
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: false,
                suggestedMax: suggestedMax + 2,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontSize: 16,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        layout: {
          padding: {
            left: 14,
            right: 14,
            top: 14,
            bottom: 14,
          },
        },
        legend: {
          display: false,
        },
        // responsive: true,
        // maintainAspectRatio: true,
      },
    };
  },
};
</script>
