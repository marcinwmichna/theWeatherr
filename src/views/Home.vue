<template>
  <div class="home">
    <Nav></Nav>
    <div class="wrap">
      <div>
        <Hero></Hero>
        <!-- <LineChart></LineChart> -->
      </div>
      <AdditionalInfo></AdditionalInfo>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
// import LineChart from "@/components/LineChart.vue";
import AdditionalInfo from "@/components/AdditionalInfo.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Hero,
    AdditionalInfo,
    // LineChart,
  },
};
</script>
<style >
.home {
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.wrap {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}
.chart {
  margin: auto;
  position: relative;
  max-width: 800px;
}
@media screen and (min-width: 1200px) {
  .wrap {
    display: flex;
    flex-direction: row;
  }
}
</style>
