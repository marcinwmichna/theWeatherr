<template>
  <div class="home">
    <Nav></Nav>
    <div class="wrap">
      <div>
        <Hero></Hero>
        <Hours></Hours>
      </div>
      <WeekDays></WeekDays>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import WeekDays from "@/components/WeekDays.vue";
import Nav from "@/components/Nav.vue";
import Hours from "@/components/Hours.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Hero,
    WeekDays,
    Hours,
  },
};
</script>
<style >
.home {
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
@media screen and (min-width: 768px) {
  .home {
    margin-top: 5rem;
  }
}
@media screen and (min-width: 1200px) {
  .wrap {
    display: flex;
    flex-direction: row;
  }
}
</style>
