<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import store from "./store/index";
export default {
  store,
  mounted() {
    store.dispatch("fetchCityCoordinates");
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #fefefe;
}
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  opacity: 80%;
  font-size: 14px;
  height: 100%;
  min-width: 260px;
  justify-self: center;
}
@media (min-width: 576px) {
  #app {
    font-size: 18px;
  }
}
</style>
