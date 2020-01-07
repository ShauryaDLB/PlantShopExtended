<template>
  <!-- Video Modals -->
  <div class="row">
    <!-- Grid column -->
    <div class="col-lg-4 col-md-12 mb-4">
      <!--Modal: Name-->
      <div
        class="modal fade"
        id="modal1"
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
              >
                <div class="embed-responsive-item" id="video1"></div>
              </div>
            </div>

            <!--Footer-->
            <div class="modal-footer justify-content-center">
              <span class="mr-4">Spread the word!</span>
              <a type="button" class="btn-floating btn-sm btn-fb"
                ><i class="fa fa-facebook-f"></i
              ></a>
              <!--Twitter-->
              <a type="button" class="btn-floating btn-sm btn-tw"
                ><i class="fa fa-twitter"></i
              ></a>
              <!--Google +-->
              <a type="button" class="btn-floating btn-sm btn-gplus"
                ><i class="fa fa-google-plus"></i
              ></a>
              <!--Linkedin-->
              <a type="button" class="btn-floating btn-sm btn-ins"
                ><i class="fa fa-linkedin"></i
              ></a>

              <button
                type="button"
                class="btn btn-outline-primary btn-rounded btn-md ml-4"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
          <!--/.Content-->
        </div>
      </div>
      <!--Modal: Name-->

      <a
        ><img
          class="img-fluid z-depth-1"
          src="img/modal1.jpg"
          alt="modal1"
          data-toggle="modal"
          data-target="#modal1"
      /></a>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-4 col-md-6 mb-4">
      <!--Modal: Name-->
      <div
        class="modal fade"
        id="modal6"
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
              >
                <div class="embed-responsive-item" id="video2"></div>
              </div>
            </div>

            <!--Footer-->
            <div class="modal-footer justify-content-center">
              <span class="mr-4">Spread the word!</span>
              <a type="button" class="btn-floating btn-sm btn-fb"
                ><i class="fa fa-facebook-f"></i
              ></a>
              <!--Twitter-->
              <a type="button" class="btn-floating btn-sm btn-tw"
                ><i class="fa fa-twitter"></i
              ></a>
              <!--Google +-->
              <a type="button" class="btn-floating btn-sm btn-gplus"
                ><i class="fa fa-google-plus"></i
              ></a>
              <!--Linkedin-->
              <a type="button" class="btn-floating btn-sm btn-ins"
                ><i class="fa fa-linkedin"></i
              ></a>

              <button
                type="button"
                class="btn btn-outline-primary btn-rounded btn-md ml-4"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
          <!--/.Content-->
        </div>
      </div>
      <!--Modal: Name-->

      <a
        ><img
          class="img-fluid z-depth-1"
          src="img/modal2.jpg"
          alt="modal2"
          data-toggle="modal"
          data-target="#modal6"
      /></a>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-4 col-md-6 mb-4">
      <!--Modal: Name-->
      <div
        class="modal fade"
        id="modal4"
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
              >
                <div class="embed-responsive-item" id="video3"></div>
              </div>
            </div>

            <!--Footer-->
            <div class="modal-footer justify-content-center">
              <span class="mr-4">Spread the word!</span>
              <a type="button" class="btn-floating btn-sm btn-fb"
                ><i class="fa fa-facebook-f"></i
              ></a>
              <!--Twitter-->
              <a type="button" class="btn-floating btn-sm btn-tw"
                ><i class="fa fa-twitter"></i
              ></a>
              <!--Google +-->
              <a type="button" class="btn-floating btn-sm btn-gplus"
                ><i class="fa fa-google-plus"></i
              ></a>
              <!--Linkedin-->
              <a type="button" class="btn-floating btn-sm btn-ins"
                ><i class="fa fa-linkedin"></i
              ></a>

              <button
                type="button"
                class="btn btn-outline-primary btn-rounded btn-md ml-4"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
          <!--/.Content-->
        </div>
      </div>
      <!--Modal: Name-->

      <a
        ><img
          class="img-fluid z-depth-1"
          src="img/modal3.jpg"
          alt="modal3"
          data-toggle="modal"
          data-target="#modal4"
      /></a>
    </div>
    <!-- Grid column -->
  </div>
</template>

<script>
export default {
  name: "VideoModals"
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

<style></style>
