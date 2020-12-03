<template>
  <div class="success">
    <div class="jumbotron text-center" id="suc">
      <div class="imgg">
      <img src="@/assets/img/cart_.jpg" class=""  height="250" width="250" />
      </div>
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
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.imgg {
}
#suc{
  background-color: white;
  background-image: url('../assets/img/confetti.png');
}
</style>
