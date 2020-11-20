<template>
  <div class="success">
    <div class="jumbotron text-center" id="suc">
      <h1 class="display-3">Vielen Dank für Ihren Einkauf!</h1>
      <p class="lead">
        <strong>Überprüfen Sie Ihren E-Mail Ordner</strong> für weitere Details.
      </p>
      <hr />
      <p>Haben Sie Probleme? <a href="">Kontaktieren Sie uns</a></p>
      <p class="lead">
        <router-link
          class="btn btn-primary"
          :to="'/' + $i18n.locale"
          role="button"
          >Zurück zur Startseite</router-link
        >
      </p>
      <CarouselSlider />
    </div>
  </div>
</template>
<script>
import CarouselSlider from "@/components/CarouselSlider.vue";
export default {
  name: "Success",
  components:{
  CarouselSlider
  }
}
</script>
<style scoped>

</style>
