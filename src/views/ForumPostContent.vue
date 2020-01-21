<template>
  <div class="forum-post-content container">
    <p>{{ post.content }}</p>
    <div
      v-for="(reply,index) in post.replies"
      :key="index"
      class="reply container"
    >{{ reply.content }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ForumPostContent",
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
  min-height: 55vh;
  margin-top: 30px;
}
.reply {
  border-radius: 10px;
  height: 40px;
  width: 50%;
  background-color: white;
  margin-bottom: 10px;
}
</style>