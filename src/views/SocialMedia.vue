<template>
  <div class="social-media container">
    <!-- Create Post -->
    <form @submit.prevent="sendPost">
      <div class="create-post row">
        <div class="col-4">
          <p class="float-left">Create a new Post:</p>
          <input type="text" v-model="newPost.author" placeholder="Name" />
        </div>
        <div class="col-5">
          <textarea v-model="newPost.content" cols="50" rows="5"></textarea>
        </div>
      </div>
      <div>
        <input type="submit" value="Submit" class="btn btn-primary" />
      </div>
    </form>
    <hr />
    <!-- Show all Posts -->
    <div v-for="post in posts" :key="post._id" class="row post">
      <div class="col-3">
        <img height="100" :src="post.img" :alt="post.author + '-Foto'" />
      </div>
      <div class="col-9">
        <div class="author-created">
          <span class="author">{{ post.author }}</span>
          -
          <span class="created">{{ dateMoment(post.created) }}</span>
        </div>
        <div class="content">{{ post.content }}</div>
        <div class="row reactions">
          <div class="col-2">
            <a @click="likePost(post._id)">
              <i class="fa fa-thumbs-up"></i>
              Like({{ post.likedBy.length }})
            </a>
          </div>

          <div class="col-2">
            <a @click="sendReply(post._id)">
              <i class="fa fa-reply"></i> Reply
            </a>
          </div>
          <div class="col-2">More...</div>
          <div class="col-2">
            <a @click="deletePost(post._id)">Delete</a>
          </div>
        </div>

        <!-- Show Replies -->
        <div v-for="(answer, index) in post.replies" :key="index">
          <div class="row replies">
            <div class="col-2">
              <img height="50" :src="answer.img" :alt="answer.author + '-Foto'" />
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
            <div class="col-2">
              <i class="fa fa-thumbs-up"></i>
              Like({{ answer.likes }})
            </div>

            <div class="col-2">
              <i class="fa fa-reply"></i> Reply
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import moment from "moment";

export default {
  name: "SocialMedia",
  data() {
    return {
      newPost: {
        author: null,
        content: null,
        img: null
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
    sendPost() {
      switch (this.newPost.author) {
        case "Arvid":
          this.newPost.img =
            "https://res.cloudinary.com/htw-dresden/image/upload/v1580816359/arvid_jjpgby.jpg";
          break;
        case "Romy":
          this.newPost.img =
            "https://res.cloudinary.com/htw-dresden/image/upload/v1580816359/romy_m2k0mf.jpg";
          break;
        case "Marco":
          this.newPost.img =
            "https://res.cloudinary.com/htw-dresden/image/upload/v1580816359/marco_cncpsd.jpg";
          break;
        case "Lena":
          this.newPost.img =
            "https://res.cloudinary.com/htw-dresden/image/upload/v1580816359/lena_p2lehu.jpg";
          break;

        default:
          this.newPost.img =
            "https://www.uclg-planning.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg?itok=PANMBJF-";
          break;
      }
      axios
        .post("http://localhost:3000/posts", {
          author: this.newPost.author,
          content: this.newPost.content,
          img: this.newPost.img
        })
        .then(response => (this.output = response.data))
        .catch(error => (this.output = error));

      this.newPost.author = "";
      this.newPost.content = "";
      this.newPost.img = "";
    },
    sendReply(id) {
      axios
        .patch("http://localhost:3000/posts/" + id, {
          replies: {
            author: "Arvid",
            content: "2 mal is okay",
            img:
              "https://www.uclg-planning.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg?itok=PANMBJF-",
            likes: 0
          }
        })
        .then(response => (this.output = response.data))
        .catch(error => (this.output = error));
    },
    likePost(id) {
      axios
        .patch("http://localhost:3000/posts/" + id, {
          likedBy: "Arvid"
        })
        .then(response => (this.output = response.data))
        .catch(error => (this.output = error));
    },
    deletePost(id) {
      const result = confirm("Wirklich löschen?");
      if (result) {
        axios
          .delete("http://localhost:3000/posts/" + id)
          .then(response => (this.output = response.data))
          .catch(error => (this.output = error));
      }
    },
    dateMoment(date) {
      return moment(date).format("DD-MM-YYYY");
    }
  },
  watch: {
    output() {
      this.$store.dispatch("loadPosts");
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
.btn {
  margin-bottom: 50px;
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
