<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
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
  --magenta: #e20074 !important;
  --white: #ffffff !important;
  --black: #4b4b4b !important;
  --superlightgrey: #eeeeee !important;
  --lightgrey: #a4a4a4 !important;
  --darkgrey: #6c6c6c !important;
  --darkblue: #1063ad !important;
  --lightblue: #53baf2 !important;
  --cyan: #1bada2 !important;
  --green: #bfcb44 !important;
  --yellow: #ffd329 !important;
  --orange: #ff9a1e !important;
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
