<template>
  <div class="forum">
    <!-- bootstrap grid test -->
    <div class="container">
      <div class="row header-row">
        <div class="col-1"></div>
        <div class="col-4">Titel</div>
        <div class="col-2">Ansichten</div>
        <div class="col-2">Antworten</div>
        <div class="col-3">Letzter Beitrag</div>
      </div>

      <div class="row">
        <div class="col-1"><i class="fa fa-envelope"></i></div>
        <div class="col-4">Lilien aus Hellerau</div>
        <div class="col-2">8</div>
        <div class="col-2">1</div>
        <div class="col-3">
          <div>Arvid Strauß</div>
          <div>vor 40 Minuten</div>
        </div>
      </div>

      <div class="row">
        <div class="col-1"><i class="fa fa-envelope"></i></div>
        <div class="col-4">Rosen aus Pieschen</div>
        <div class="col-2">48</div>
        <div class="col-2">11</div>
        <div class="col-3">
          <div>Marco Krause</div>
          <div>vor 6 Minuten</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div[class*="col"] {
  background: var(--superlightgrey);
  margin: 5px 0;
  color: var(--darkgrey);
  font-size: 1.2em;
}

.header-row div {
  color: var(--cyan) !important;
  font-weight: bold;
}
</style>
