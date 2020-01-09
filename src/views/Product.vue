<template>
  <div class="product">
    <ProductDetails :name="product.title" />
    <ProductDescription />
    <ShowcaseProducts :title="translateTitleBox" />
  </div>
</template>

<script>
import products from "@/assets/products.json";
import ProductDetails from "@/components/ProductDetails.vue";
import ProductDescription from "@/components/ProductDescription.vue";
import ShowcaseProducts from "@/components/ShowcaseProducts.vue";

export default {
  components: {
    ProductDetails,
    ProductDescription,
    ShowcaseProducts
  },
  data: function() {
    return {
      product: []
    };
  },
  computed: {
    translateTitleBox: function() {
      return this.$t("product.titleBox");
    },
    productTitle: function() {
      return this.$route.params.id;
    }
  },
  created() {
    this.product = products.find(
      element => element.id == this.$route.params.id
    );
  }
};
</script>
