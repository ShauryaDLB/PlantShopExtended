<template>
  <div class="product-detail">
    <div class="single-product container">
      <div class="row">
        <div class="col-md-5">
          <SmallCarouselSlider />
        </div>
        <div class="col-md-7">
          <p class="new-arrival text-center">New</p>
          <h2 id="title-product">Blaue Lilien aus Radebeul</h2>
          <p>Bestell-Nr.: 72098</p>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <p class="price">€ 40,00</p>
          <p><b>Verfügbarkeit: </b>verfügbar</p>
          <p><b>Zustand: </b>neu</p>
          <label for="productQuantity">Quantity: </label>
          <input id="productQuantity" type="text" value="1" />
          <button
            class="btn btn-primary add-to-cart"
            id="add-to-cart"
            data-id="1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div class="product-description">
      <br />
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
          <br />
          <h3>Description</h3>
          <p>
            Frisch aus Radebeul geschnitten als Strauß oder als Buquet. Lilien
            sind ausdauernde, aufrecht wachsende Zwiebelpflanzen mit oft
            auffälligen Blüten. Aufgrund ihres attraktiven Erscheinungsbilds
            wurden und werden sie in vielen Kulturen als Zierpflanzen geschätzt.
            Einige Arten zählen zu den ältesten Zierpflanzen überhaupt und
            fanden auch Verwendung als religiöse Symbole. Erst im 20.
            Jahrhundert erlangten sie jedoch industrielle Bedeutung als
            Zuchtpflanzen und Schnittblumen. Insbesondere in Asien finden sie
            bis heute auch Verwendung als Lebensmittel sowie als Heilpflanzen.
            Die Gattung ist – ausgehend von ihrem evolutionären Ursprung im
            Himalaya – auf allen Kontinenten der Nordhalbkugel zu finden,
            vorzugsweise in klimatisch gemäßigten Zonen. Hauptverbreitungsgebiet
            ist China, Nebenzentren sind Japan, Nordamerika sowie Europa und der
            Kaukasus. Mit den Lilien am nächsten verwandt ist die Gattung der
            Schachbrettblumen.
          </p>
        </div>
        <div id="reviews" class="container tab-pane fade">
          <br />
          <h3>Reviews</h3>
          <p>
            No reviews yet.
          </p>
        </div>
        <div id="make-review" class="container tab-pane fade">
          <br />
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
  </div>
</template>

<script>
import SmallCarouselSlider from "@/components/SmallCarouselSlider.vue";
export default {
  name: "ProductDetails",
  components: {
    SmallCarouselSlider
  }
};
</script>

<style scoped>
.product-detail {
  margin-top: 70px;
  margin-bottom: 50px;
}
.product-detail .single-product p.new-arrival {
  background: var(--cyan);
  width: 50px;
  color: var(--white);
  font: 12px bold;
  margin-top: 20px;
}

.product-detail .single-product .col-md-7 h2,
p {
  color: var(--darkgrey);
}
.product-detail .single-product i.fa {
  color: var(--cyan);
}
.product-detail .single-product p.price {
  color: var(--cyan);
  font: 30px bold;
  padding-top: 20px;
}
.product-detail .single-product input[type="text"] {
  border: 1px solid var(--lightgrey);
  font-weight: bold;
  height: 33px;
  text-align: center;
  width: 30px;
}
.product-detail .single-product button.btn-primary {
  background: var(--cyan) !important;
  color: var(--white);
  font-size: 15px;
  margin-left: 10px;
  border: none;
  box-shadow: none !important;
}
.product-detail .product-description {
  width: 60%;
  margin: 20px 20%;
}
.product-detail .product-description p {
  margin-top: 30px;
  text-align: justify;
}

.product-detail .product-description a,
h3 {
  color: var(--cyan);
}

.product-detail .product-description input[type="submit"] {
  margin-top: 30px;
  border: none;
  background-color: var(--cyan);
  color: var(--white);
  height: 40px;
  width: 100px;
  font-size: 14px;
}
.product-detail .product-description .review-form {
  width: 400px;
  padding: 20px;
  border: 1px solid var(--lightgrey);
}

.product-detail .product-description textarea {
  width: 100%;
  height: 60px;
}
#similar-products {
  margin-top: 100px;
}
@media only screen and (max-width: 760px) {
  .product-detail .product-description {
    width: 90%;
    margin: 20px 5%;
  }
}
</style>
