<template>
  <div class="social-media container">
    <div v-for="post in posts" :key="post.id" class="row post">
      <div class="col-4">
        <img height="100" :src="post.image" :alt="post.author + '-Foto'" />
      </div>
      <div class="col-6">
        <div class="author-created">
          <span class="author">{{ post.author }}</span>
          - {{ post.created }}
        </div>
        <div class="content">{{ post.content }}</div>
        <div class="row">
          <div class="col-3 reactions">
            <i class="fas fa-thumbs-up"></i> Like
          </div>
          <div class="col-3 reactions">Share</div>
          <div class="col-3 reactions">Reply</div>
          <div class="col-3 reactions">More...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SocialMedia",
  components: {},
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
  min-height: 55vh;
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
.author-created .author {
  font-weight: bold;
  color: var(--orange);
}
.content {
  text-align: left;
  border: solid 1px var(--superlightgrey);
}
.reactions {
  color: var(--orange);
  font-weight: bold;
}
</style>
