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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
