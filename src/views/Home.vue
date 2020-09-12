<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Hero></Hero>
    <AdditionalInfo></AdditionalInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import AdditionalInfo from "@/components/AdditionalInfo.vue";

export default {
  name: "Home",
  components: {
    Hero,
    AdditionalInfo,
  },
};
</script>
<style scoped>
.home {
  max-width: 800px;
  margin: auto;
}
</style>
