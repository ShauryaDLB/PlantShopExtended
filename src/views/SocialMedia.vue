<template>
  <div class="social-media container">
    <div v-for="post in posts" :key="post.id" class="row post">
      <div class="col-4">
        <img height="100" :src="post.image" :alt="post.author + '-Foto'" />
      </div>
      <div class="col-8">
        <div class="author-created">
          <span class="author">{{ post.author }}</span>
          -
          <span class="created">{{ post.created }}</span>
        </div>
        <div class="content">{{ post.content }}</div>
        <SocialMediaFooter />
        <div class="row">
          <div class="col-4 reactions">
            <i class="fa fa-thumbs-up"></i> Like
          </div>

          <div class="col-4 reactions">Reply</div>
          <div class="col-4 reactions">More...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SocialMediaFooter from "@/components/SocialMediaFooter.vue";

export default {
  name: "SocialMedia",
  components: {
    SocialMediaFooter
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  }
};
</script>

<style scoped>
.social-media {
  margin-top: 50px;
  color: var(--black);
  font-size: 1.2em;
}
.post {
  margin-top: 30px;
}
img {
  border-radius: 50%;
}
.author-created {
  text-align: left;
}
.author {
  font-weight: bold;
  color: var(--blue);
}
.created {
  font-weight: italic;
  color: var(--darkgrey);
}
.content {
  padding: 10px;
  text-align: left;

  background-color: var(--superlightgrey);
  border-radius: 10px;
  margin: 10px 0 10px 0;
}
.modal-footer {
  color: var(--blue);
  border: none;
}
.reactions {
  color: var(--blue);
  font-weight: bold;
}
</style>
