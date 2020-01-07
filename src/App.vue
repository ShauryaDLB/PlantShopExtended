<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
@font-face {
  font-family: TeleGroteskMedium;
  src: url(./assets/fonts/telegrotesknext-medium.woff) format("woff"),
    url(./assets/fonts/telegrotesknext-medium.woff2) format("woff2");
}

:root {
  /* Colour Variables Telekom Brand Design */
  --magenta: rgb(226, 0, 116);
  --white: rgb(255, 255, 255);
  --black: rgb(75, 75, 75);
  --superlightgrey: rgb(238, 238, 238);
  --lightgrey: rgb(164, 164, 164);
  --darkgrey: rgb(108, 108, 108);
  --darkblue: rgb(16, 99, 173);
  --lightblue: rgb(83, 186, 242);
  --cyan: rgb(27, 173, 162);
  --green: rgb(191, 203, 68);
  --yellow: rgb(255, 211, 41);
  --orange: rgb(255, 154, 30);
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: TeleGroteskMedium !important;
  background-color: var(--white);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--darkgrey);
}

a {
  cursor: pointer;
}
</style>
