<template>
  <div class="home">
    <BreadCrump />
    <Title />
    <VideoModals />
    <CarouselSlider />
    <FeaturedCategories />
    <OnSaleProducts />
  </div>
</template>

<script>
import BreadCrump from "@/components/BreadCrump.vue";
import Title from "@/components/Title.vue";
import VideoModals from "@/components/VideoModals.vue";
import CarouselSlider from "@/components/CarouselSlider.vue";
import FeaturedCategories from "@/components/FeaturedCategories.vue";
import OnSaleProducts from "@/components/OnSaleProducts.vue";

export default {
  name: "home",
  components: {
    BreadCrump,
    Title,
    VideoModals,
    CarouselSlider,
    FeaturedCategories,
    OnSaleProducts
  }
};
</script>
