<template>
  <div>
    <ul class="breadcrumb">
      <li><a href="index.html">Home</a></li>
      <li><a href="#">On Sale</a></li>
      <li><a href="#">Lilien</a></li>
      <li>Radebeul</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
ul.breadcrumb {
  padding: 10px 16px;
  margin-top: 20px;
  list-style: none;
  background-color: var(--superlightgrey);
}
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}
ul.breadcrumb li + li:before {
  padding: 8px;
  color: var(--darkgrey);
  content: "/\00a0";
}
ul.breadcrumb li {
  color: var(--darkgrey);
}
ul.breadcrumb li a {
  color: var(--orange);
  text-decoration: none;
}
ul.breadcrumb li a:hover {
  color: var(--cyan);
  text-decoration: underline;
}
@media only screen and (max-width: 1030px) {
  ul.breadcrumb {
    margin-top: 40px;
  }
}
@media only screen and (max-width: 536px) {
  ul.breadcrumb {
    margin-top: 60px;
  }
}
</style>
