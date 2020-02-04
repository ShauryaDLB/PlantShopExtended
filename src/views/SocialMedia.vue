<template>
  <div class="social-media container">
    <form @submit="sendPost">
      <div class="create-post">
        <textarea v-model="newPost.content" cols="50" rows="5"></textarea>
      </div>
      <div>
        <input type="submit" value="Submit" class="btn btn-primary" />
      </div>
    </form>
    <div v-for="post in posts" :key="post.id" class="row post">
      <div class="col-3">
        <img height="100" :src="post.img" :alt="post.author + '-Foto'" />
      </div>
      <div class="col-9">
        <div class="author-created">
          <span class="author">{{ post.author }}</span>
          -
          <span class="created">{{ post.created }}</span>
        </div>
        <div class="content">{{ post.content }}</div>
        <div class="row reactions">
          <div class="col-2"><i class="fa fa-thumbs-up"></i> Like</div>

          <div class="col-2"><i class="fa fa-reply"></i> Reply</div>
          <div class="col-2">More...</div>
        </div>
        <div v-for="(answer, index) in post.replies" :key="index">
          <div class="row replies">
            <div class="col-2">
              <img
                height="50"
                :src="answer.img"
                :alt="answer.author + '-Foto'"
              />
            </div>
            <div class="col-10 content">
              <div class="author-created">
                <span class="author">{{ answer.author }}</span>
                -
                <span class="created">{{ answer.created }}</span>
              </div>
              {{ answer.content }}
            </div>
          </div>
          <div class="row reactions">
            <div class="col-2"><i class="fa fa-thumbs-up"></i> Like</div>

            <div class="col-2"><i class="fa fa-reply"></i> Reply</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "SocialMedia",
  data() {
    return {
      newPost: {
        author: "Arvid",
        content: null
      },
      output: null
    };
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  },
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  methods: {
    sendPost(e) {
      e.preventDefault();

      axios
        .post("http://localhost:3000/posts", {
          author: this.newPost.author,
          content: this.newPost.content
        })
        .then(response => (this.output = response.data))
        .catch(error => (this.output = error));
    }
  }
};
</script>

<style scoped>
.social-media {
  width: 70%;
  color: var(--black);
  font-size: 1.2em;
  min-height: 70vh;
  margin-top: 30px;
}
textarea {
  border-radius: 10px;
  background-color: var(--superlightgrey);
  border: none;
  padding: 10px;
}
button.btn {
  margin-bottom: 30px;
  background-color: var(--orange);
  border: none;
}
button.btn:hover {
  background-color: var(--cyan);
}
.post {
  margin-bottom: 50px;
}
img {
  border-radius: 50%;
}
.author-created {
  text-align: left;
}
.author {
  font-weight: bold;
  color: var(--cyan);
}
.created {
  font-style: italic;
  color: var(--darkgrey);
}
.content {
  padding: 15px;
  text-align: left;
  border-radius: 10px;
  margin: 10px 0 10px 0;
}
.reactions {
  color: var(--cyan);
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 10px;
}
.replies {
  border: 1px solid var(--superlightgrey);
  background-color: var(--superlightgrey);
  width: 80%;
  margin-left: 30px;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
