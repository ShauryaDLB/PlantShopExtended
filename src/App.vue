<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link :to="'/' + $i18n.locale">{{
        $t("header.nav.shop")
      }}</router-link>
      |
      <router-link :to="'/' + $i18n.locale + '/login'">{{
        $t("header.nav.login")
      }}</router-link>
    </div>
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
  src: url(@/assets/fonts/telegrotesknext-medium.woff) format("woff"),
    url(@/assets/fonts/telegrotesknext-medium.woff2) format("woff2");
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  cursor: pointer;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
