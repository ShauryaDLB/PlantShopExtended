<template>
  <div class="home">
    <BreadCrump />
    <div style="color: red;font-size:40px;">{{ info[2].name }}</div>
    <Title />
    <VideoModals />
    <CarouselSlider />
    <FeaturedCategories />
    <ShowcaseProducts :products="products" :titleBox="translateTitleBox" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import BreadCrump from "@/components/BreadCrump.vue";
import Title from "@/components/Title.vue";
import VideoModals from "@/components/VideoModals.vue";
import CarouselSlider from "@/components/CarouselSlider.vue";
import FeaturedCategories from "@/components/FeaturedCategories.vue";
import ShowcaseProducts from "@/components/ShowcaseProducts.vue";

export default {
  name: "Home",
  data() {
    return {
      info: null
    };
  },
  components: {
    BreadCrump,
    Title,
    VideoModals,
    CarouselSlider,
    FeaturedCategories,
    ShowcaseProducts
  },
  mounted() {
    axios
      .get("http://localhost:3000/subscribers")
      .then(response => (this.info = response.data));
  },
  computed: {
    ...mapState({
      products: state => state.products
    }),
    translateTitleBox() {
      return this.$t("home.titleBox");
    }
  }
};
</script>
