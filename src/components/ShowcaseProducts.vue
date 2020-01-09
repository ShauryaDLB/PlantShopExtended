<template>
  <section class="on-sale">
    <div class="container">
      <TitleBox :title="title" />
      <div class="row">
        <ShowcaseProduct
          v-for="(product, index) in products"
          :key="index"
          :id="product.id"
          :image="product.image"
          :name="product.title"
          :price="product.price"
          class="col-md-3"
        />
      </div>
    </div>
  </section>
</template>

<script>
import products from "@/assets/products.json";
import TitleBox from "@/components/TitleBox.vue";
import ShowcaseProduct from "@/components/ShowcaseProduct.vue";

export default {
  name: "ShowcaseProducts",
  components: {
    TitleBox,
    ShowcaseProduct
  },
  props: {
    title: String
  },
  data() {
    return {
      products: []
    };
  },
  created: function() {
    this.products = products;
  }
};
</script>

<style></style>
