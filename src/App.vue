<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
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
  background-color: #fbf4e4;
}
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  opacity: 80%;
  padding: 1em;
  font-size: 14px;
  height: 100%;
  // min-height: 100vh;
  // width: 100vw;
  min-width: 260px;
}
@media (min-width: 576px) {
  #app {
    font-size: 18px;
  }
}
@media (min-width: 768px) {
  #app {
    font-size: 20px;
    padding: 0;
  }
}
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
