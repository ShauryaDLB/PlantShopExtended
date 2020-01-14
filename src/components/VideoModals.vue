<template>
  <!-- Video Modals -->
  <div class="row video-modals">
    <VideoModal
      v-for="(image, index) in images"
      :key="index"
      :image="image"
      :index="index"
    />
  </div>
</template>

<script>
import VideoModal from "@/components/VideoModal.vue";

export default {
  name: "VideoModals",
  components: {
    VideoModal
  },
  data() {
    return {
      images: [
        require("@/assets/img/modal1.jpg"),
        require("@/assets/img/modal2.jpg"),
        require("@/assets/img/modal3.jpg")
      ]
    };
  }
  //   mounted() {
  //     let webtrekkMediaTracking = document.createElement("script");
  //     webtrekkMediaTracking.setAttribute(
  //       "src",
  //       "./webtrekk_mediaTracking.min.js"
  //     );
  //     document.head.appendChild(webtrekkMediaTracking);
  //     let webtrekkYoutubeMediaTracking = document.createElement("script");
  //     webtrekkYoutubeMediaTracking.setAttribute(
  //       "src",
  //       "./webtrekk_youtubeMediaTracking.js"
  //     );
  //     document.head.appendChild(webtrekkYoutubeMediaTracking);
  //   }
};
</script>

<style scoped>
.video-modals {
  margin-right: 50px;
  margin-left: 50px;
}
</style>
