<template>
  <div class="forum">
    <button class="btn btn-primary">Neuer Beitrag</button>
    <div class="container">
      <div class="row header-row">
        <div class="col-1"></div>
        <div class="col-3">Titel</div>
        <div class="col-2">Autor</div>
        <div class="col-2">Ansichten</div>
        <div class="col-2">Antworten</div>
        <div class="col-2">Letzter Beitrag</div>
      </div>

      <ForumPost v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ForumPost from "@/components/ForumPost.vue";

export default {
  name: "Forum",
  components: {
    ForumPost
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  }
};
</script>

<style scoped>
.forum {
  min-height: 70vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/img/flower-banner-forum.jpg");
  background-position: center;
  background-size: cover;
}
button {
  background-color: var(--orange);
  border-color: var(--orange);
  margin-bottom: 20px;
  margin-top: 30px;
}
button:hover {
  background-color: var(--darkgrey);
  border-color: var(--darkgrey);
}
.header-row div {
  color: var(--cyan) !important;
  font-weight: bold;
  background: var(--white);
  margin: 5px 0;
  color: var(--darkgrey);
  font-size: 1.2em;
  text-align: left;
}
</style>
