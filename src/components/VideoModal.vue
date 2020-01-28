<template>
  <div class="col-lg-4 col-md-12 mb-4">
    <p>Click the images below!</p>
    <div
      class="modal fade"
      :id="'modal' + index"
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
              <div class="embed-responsive-item" :id="'video' + (index + 1)"></div>
            </div>
          </div>

          <!--Footer-->
          <SocialMediaFooter :button="true" />
        </div>
      </div>
    </div>

    <a>
      <img
        class="img-fluid z-depth-1"
        :src="image"
        alt="modal1"
        data-toggle="modal"
        :data-target="'#modal' + index"
      />
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
    image: String
  },
  computed: {
    index() {
      return this.$vnode.key;
    }
  }
};
</script>

<style scoped></style>
