<template>
  <div class="product-description">
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
        <form class="review-form">
          <div class="text-input">
            <label for="name">Name:</label>
            <input id="name" />
          </div>

          <p>
            <label for="review">Review:</label>
            <textarea id="review"></textarea>
          </p>

          <p>
            <label for="rating">Rating:</label>
            <select id="rating">
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </p>

          <p>Would you recommend this product?</p>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              No
            </label>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDescription",
  props: {
    product: Object
  }
};
</script>

<style scoped>
.product-description {
  width: 60%;
  margin: 50px auto;
}
.product-description p {
  margin-top: 30px;
  text-align: justify;
}

.product-description a,
h3 {
  color: var(--cyan);
}

.product-description input[type="submit"] {
  margin-top: 30px;
  border: none;
  background-color: var(--cyan);
  color: var(--white);
  height: 40px;
  width: 100px;
  font-size: 14px;
}
.product-description .review-form {
  width: 400px;
  padding: 20px;
  border: 1px solid var(--lightgrey);
}

.product-description textarea {
  width: 100%;
  height: 60px;
}
#similar-products {
  margin-top: 100px;
}
@media only screen and (max-width: 760px) {
  .product-description {
    width: 90%;
    margin: 20px 5%;
  }
}
</style>
