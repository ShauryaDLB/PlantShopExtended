<template>
  <div class="col-lg-4 col-md-12 mb-4">
    <div
      class="modal fade"
      :id="'modall' + id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <!--Content-->
        <div class="modal-content">
          <!--Body-->
          <div class="modal-body mb-0 p-0">
            <div
              class="embed-responsive embed-responsive-16by9 z-depth-1-half"
              id="video_wrapper_1"
            >
              <div class="m-video__wrapper">
                <video
                  :src="video"
                  type="video/mp4"
                  width="900"
                  height="600"
                  controls
                  autobuffer="autobuffer"
                ></video>
              </div>
            </div>
          </div>

          <!--Footer-->
          <SocialMediaFooter :button="true" />
        </div>
      </div>
    </div>
    <a class="imageContainer" id="videos">
      <img
        class="img-fluid z-depth-1"
        :src="image"
        :alt="'modal' + id"
        data-toggle="modal"
        :data-target="'#modall' + id"
      />
      <div class="text-block">
        <p>Click Me!</p>
      </div>
    </a>
  </div>
  <!-- Grid column -->
</template>

<script>
import SocialMediaFooter from "@/components/SocialMediaFooter.vue";
//import $ from "jquery";
export default {
  name: "HtmlVideo",
  components: {
    SocialMediaFooter
  },
  props: {
    id: Number,
    image: String,
    video: String
  }
};
</script>
<style scoped>
#def {
  height: 400px;
  width: 450px;
}
/* Container holding the image and the text */
.imageContainer {
  position: relative;
}

/* Bottom right text */
.text-block {
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: var(--cyan);
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
