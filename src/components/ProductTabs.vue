<template>
  <div class="product-tabs">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#description"
          >Description</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#reviews">Reviews</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#make-review"
          >Write a Review</a
        >
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div id="description" class="container tab-pane active">
        <h3>Description</h3>
        <p>
          {{ product.description }}
        </p>
      </div>
      <div id="reviews" class="container tab-pane fade">
        <h3>Reviews</h3>
        <p>
          No reviews yet.
        </p>
      </div>
      <div id="make-review" class="container tab-pane fade">
        <h3>Write A Review</h3>
        <MakeReview />
      </div>
    </div>
  </div>
</template>

<script>
import MakeReview from "@/components/MakeReview.vue";

export default {
  name: "ProductTabs",
  props: {
    product: Object
  },
  components: {
    MakeReview
  }
};
</script>

<style scoped>
p {
  margin-top: 30px;
  text-align: justify;
}

a,
h3 {
  margin-top: 10px;
  color: var(--cyan);
}
</style>
