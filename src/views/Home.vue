<template>
  <div class="home">
    <BreadCrump />
    <Title />
    <VideoModals />
    <CarouselSlider />
    <FeaturedCategories />
    <ShowcaseProducts :title="translateTitleBox" />
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
  }
};
</script>
