<template>
  <section class="on-sale">
    <div class="container">
      <TitleBox />
      <div class="row">
        <OnSaleProduct
          v-for="(product, index) in products"
          :key="index"
          :image="product.image"
          :name="product.name"
          :price="product.price"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TitleBox from "@/components/TitleBox.vue";
import OnSaleProduct from "@/components/OnSaleProduct.vue";
export default {
  name: "OnSaleProducts",
  components: {
    TitleBox,
    OnSaleProduct
  },
  data() {
    return {
      products: [
        {
          image: require("@/assets/img/flowers4.jpg"),
          name: "Margeriten",
          price: 10.0
        },
        {
          image: require("@/assets/img/flowers10.jpg"),
          name: "Rosen",
          price: 18.5
        },
        {
          image: require("@/assets/img/flowers8.jpg"),
          name: "Tulpen",
          price: 40.0
        },
        {
          image: require("@/assets/img/flowers9.jpg"),
          name: "Nelken",
          price: 28.99
        }
      ]
    };
  }
};
</script>

<style></style>
