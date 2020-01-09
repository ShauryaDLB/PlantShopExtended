<template>
  <div class="product">
    <ProductDetails />
    <OnSaleProducts />
  </div>
</template>

<script>
import ProductDetails from "@/components/ProductDetails.vue";
import OnSaleProducts from "@/components/OnSaleProducts.vue";
export default {
  components: {
    ProductDetails,
    OnSaleProducts
  }
};
</script>
