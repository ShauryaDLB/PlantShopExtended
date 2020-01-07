<template>
  <div class="home">
    <BreadCrump />
    <Title />
    <VideoModals />
  </div>
</template>

<script>
import BreadCrump from "@/components/BreadCrump.vue";
import Title from "@/components/Title.vue";
import VideoModals from "@/components/VideoModals.vue";

export default {
  name: "home",
  components: {
    BreadCrump,
    Title,
    VideoModals
  }
};
</script>
