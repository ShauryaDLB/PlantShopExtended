<template>
  <div class="home">
    <BreadCrump />
    <Title />
    {{ count }}
    <VideoModals />
    <CarouselSlider />
    <FeaturedCategories />
    <ShowcaseProducts :products="products" :titleBox="translateTitleBox" />
  </div>
</template>

<script>
import BreadCrump from "@/components/BreadCrump.vue";
import Title from "@/components/Title.vue";
import VideoModals from "@/components/VideoModals.vue";
import CarouselSlider from "@/components/CarouselSlider.vue";
import FeaturedCategories from "@/components/FeaturedCategories.vue";
import ShowcaseProducts from "@/components/ShowcaseProducts.vue";

export default {
  components: {
    BreadCrump,
    Title,
    VideoModals,
    CarouselSlider,
    FeaturedCategories,
    ShowcaseProducts
  },
  computed: {
    translateTitleBox: function() {
      return this.$t("home.titleBox");
    }
  },
  data() {
    return {
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
  }
};
</script>
