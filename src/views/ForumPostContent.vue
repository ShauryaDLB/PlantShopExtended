<template>
  <div class="forum-post-content">
    <h3>{{ post.title }}</h3>
    <!--Footer-->
    <div class="modal-footer justify-content-center">
      <span class="mr-4">Spread the word!</span>
      <a type="button" class="btn-floating btn-sm btn-fb">
        <i class="fa fa-facebook-f"></i>
      </a>
      <!--Twitter-->
      <a type="button" class="btn-floating btn-sm btn-tw">
        <i class="fa fa-twitter"></i>
      </a>
      <!--Google +-->
      <a type="button" class="btn-floating btn-sm btn-gplus">
        <i class="fa fa-google-plus"></i>
      </a>
      <!--Linkedin-->
      <a type="button" class="btn-floating btn-sm btn-ins">
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
    <p class="author">Erstellt von: {{ post.author }} am {{ post.created }}</p>

    <div class="content">{{ post.content }}</div>
    <div v-for="(reply, index) in post.replies" :key="index" class="replies">
      <p class="answer-author">
        Antwort von {{ reply.author }} - {{ reply.date }}
      </p>
      <div class="reply">{{ reply.content }}</div>
    </div>

    <button class="btn btn-primary">Antworten</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ForumPostContent",
  components: {},
  data() {
    return {
      post: {}
    };
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  },
  created() {
    this.updatePost();
  },
  watch: {
    $route: "updateProduct"
  },
  methods: {
    updatePost() {
      this.post = this.posts.find(
        element => element.id == this.$route.params.id
      );
    }
  }
};
</script>

<style scoped>
.forum-post-content {
  background-color: var(--superlightgrey);
  border-radius: 10px;
  min-height: 55vh;
  background-image: url("../assets/img/flower-banner-forum.jpg");
  background-position: center;
  background-size: cover;
}
h3 {
  padding: 15px;
  color: var(--darkgrey);
}
.modal-footer {
  color: var(--orange);
  border: none;
}
.author {
  margin-left: 20px;
  margin-bottom: 0;
  padding-bottom: 0;
}
.content {
  width: 70%;
  text-align: left;
  padding: 10px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  margin: 10px 0 10px 20px;
}
.replies {
  margin-left: 40px;
}
.reply {
  border-radius: 10px;
  text-align: left;
  padding: 10px;
  width: 50%;
  background-color: white;
  margin-bottom: 15px;
}
p {
  color: var(--orange);
  text-align: left;
  padding: 10px;
  margin-bottom: 0;
}
button {
  background-color: var(--orange);
  border-color: var(--orange);
  margin-top: 10px;
  margin-bottom: 30px;
}
button:hover {
  background-color: var(--darkgrey);
  border-color: var(--darkgrey);
}
</style>
