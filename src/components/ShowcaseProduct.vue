<template>
  <div class="showcase-product">
    <div class="product-top">
      <router-link :to="'/' + $i18n.locale + '/product' + '/' + id"
        ><img :src="image"
      /></router-link>
      <div class="overlay-right">
        <router-link
          :to="'/' + $i18n.locale + '/product' + '/' + id"
          class="btn btn-secondary"
          title="Quick Shop"
          ><i class="fa fa-eye"></i
        ></router-link>
        <button type="button" class="btn btn-secondary" title="Add to Wishlist">
          <i class="fa fa-heart-o"></i>
        </button>
        <button type="button" class="btn btn-secondary" title="Add to Cart">
          <i class="fa fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <div class="product-bottom text-center">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star-half-o"></i>
      <i class="fa fa-star-o"></i>
      <h3>{{ name }}</h3>
      <h5>€ {{ price }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcaseProduct",
  props: {
    product: Object,
    id: Number,
    image: String,
    name: String,
    price: Number
  }
};
</script>

<style scoped>
.product-top img {
  width: 100%;
}
.overlay-right {
  width: 100%;
  display: block;
  opacity: 0;
  position: absolute;
  top: 10%;
  margin-left: 0;
  width: 70px;
}
.overlay-right .fa {
  cursor: pointer;
  background-color: var(--white);
  color: var(--darkgrey);
  height: 35px;
  width: 35px;
  font-size: 20px;
  padding: 7px;
  margin-top: 5%;
  margin-bottom: 5%;
}
.overlay-right .btn-secondary {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}
.product-top:hover .overlay-right {
  opacity: 1;
  margin-left: 5%;
  transition: 0.5s;
}
.product-bottom .fa {
  color: var(--cyan);
  font-size: 10px;
}
.product-bottom h3 {
  font-size: 20px;
  font-weight: bold;
}
.product-bottom h5 {
  font-size: 15px;
}
</style>
