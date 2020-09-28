<template>
  <div class="col-lg-4 col-md-12 mb-4">
    <div
      class="modal fade"
      :id="'modal' + id"
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
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <iframe
                class="embed-responsive-item"
                :src="
                  'https://www.youtube.com/embed/' +
                    this.video +
                    '?enablejsapi=1'
                "
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <!--Footer-->
          <SocialMediaFooter :button="true" />
        </div>
      </div>
    </div>

    <a class="imageContainer">
      <img
        class="img-fluid z-depth-1"
        :src="image"
        :alt="'modal' + id"
        data-toggle="modal"
        :data-target="'#modal' + id"
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

export default {
  name: "VideoModal",
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
