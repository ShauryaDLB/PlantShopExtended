<template>
  <div class="product">
    <ProductDetails :product="product" />
    <ProductDescription :product="product" />
    <ShowcaseProducts :products="products" :titleBox="translateTitleBox" />
  </div>
</template>

<script>
import { mapState } from "vuex";
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
      product: {}
    };
  },
  computed: {
    ...mapState({
      products: state => state.products
    }),
    translateTitleBox: function() {
      return this.$t("product.titleBox");
    }
  },
  created() {
    this.updateProduct();
  },
  watch: {
    $route: "updateProduct"
  },
  methods: {
    updateProduct() {
      this.product = this.products.find(
        element => element.id == this.$route.params.id
      );
    }
  }
};
</script>
