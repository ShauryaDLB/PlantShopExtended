<template>
  <div class="product">
    <ProductDetails @add-product="addProduct" :product="product" />
    <ProductDescription :product="product" />
    <ShowcaseProducts :products="products" :titleBox="translateTitleBox" />
  </div>
</template>

<script>
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
      product: {},
      products: [
        {
          id: 1,
          image: require("@/assets/img/flowers4.jpg"),
          title: "Rosen aus Hellerau",
          price: 20.0,
          description: "tolle Rosen",
          rating: 3.0,
          reviews: [
            {
              author: "Marco",
              review: "super",
              rating: 4.5
            }
          ]
        },
        {
          id: 2,
          image: require("@/assets/img/flowers10.jpg"),
          title: "Tulpen aus Neustadt",
          price: 40.0,
          description: "tolle Tulpen",
          rating: 4.5,
          reviews: [
            {
              author: "Marco",
              review: "super",
              rating: 2.5
            }
          ]
        },
        {
          id: 3,
          image: require("@/assets/img/flowers8.jpg"),
          title: "Nelken aus Radebeul",
          price: 35.99,
          description: "klasse Nelken",
          rating: 4.0,
          reviews: [
            {
              author: "Marco",
              review: "super",
              rating: 4.5
            }
          ]
        },
        {
          id: 4,
          image: require("@/assets/img/flowers9.jpg"),
          title: "Margeriten aus Striesen",
          price: 19.5,
          description: "tolle margis",
          rating: 5.0,
          reviews: [
            {
              author: "Marco",
              review: "super",
              rating: 4.5
            }
          ]
        }
      ]
    };
  },
  computed: {
    translateTitleBox: function() {
      return this.$t("product.titleBox");
    }
  },
  created() {
    this.cartProducts =
      JSON.parse(window.localStorage.getItem("products")) || new Array();
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
    },
    addProduct(newProduct, qty) {
      let foundIndex,
        product = null;
      if (
        (foundIndex = this.cartProducts.findIndex(
          product => product.id == newProduct.id
        )) !== -1
      ) {
        this.cartProducts[foundIndex].qty =
          Number(this.cartProducts[foundIndex].qty) + Number(qty);
      } else {
        product = {
          image: newProduct.image,
          title: newProduct.title,
          price: newProduct.price,
          qty: Number(qty),
          id: newProduct.id
        };
        this.cartProducts.push(product);
      }

      window.localStorage.setItem(
        "products",
        JSON.stringify(this.cartProducts)
      );
    }
  }
};
</script>
