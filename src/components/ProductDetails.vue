<template>
  <div class="product-detail">
    <div class="single-product container">
      <div class="row">
        <div class="col-md-5">
          <SmallCarouselSlider />
        </div>
        <div class="col-md-7">
          <p class="new-arrival text-center">New</p>
          <h2 id="title-product">{{ name }}</h2>
          <p>Bestell-Nr.: 72098</p>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <p class="price">€ 40,00</p>
          <p><b>Verfügbarkeit: </b>verfügbar</p>
          <p><b>Zustand: </b>neu</p>
          <label for="productQuantity">Quantity: </label>
          <input id="productQuantity" type="text" value="1" />
          <button
            class="btn btn-primary add-to-cart"
            id="add-to-cart"
            data-id="1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmallCarouselSlider from "@/components/SmallCarouselSlider.vue";
export default {
  name: "ProductDetails",
  props: {
    name: String
  },
  components: {
    SmallCarouselSlider
  }
};
</script>

<style scoped>
.product-detail {
  margin-top: 70px;
  margin-bottom: 50px;
}
.product-detail .single-product p.new-arrival {
  background: var(--cyan);
  width: 50px;
  color: var(--white);
  font: 12px bold;
  margin-top: 20px;
}

.product-detail .single-product .col-md-7 h2,
p {
  color: var(--darkgrey);
}
.product-detail .single-product i.fa {
  color: var(--cyan);
}
.product-detail .single-product p.price {
  color: var(--cyan);
  font: 30px bold;
  padding-top: 20px;
}
.product-detail .single-product input[type="text"] {
  border: 1px solid var(--lightgrey);
  font-weight: bold;
  height: 33px;
  text-align: center;
  width: 30px;
}
.product-detail .single-product button.btn-primary {
  background: var(--cyan) !important;
  color: var(--white);
  font-size: 15px;
  margin-left: 10px;
  border: none;
  box-shadow: none !important;
}
</style>
