<template>
  <div id="show-featured">
    <h2>Featured Posts</h2>
    <ul class="clean-list">
      <li v-for="post in featuredPosts" v-bind:key="post.id">
        <router-link v-bind:to="'/post/' + post.id">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
    },
    posts: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    featuredPosts() {
      if (this.posts) {
        var posts = [];
        this.posts.forEach(function (post) {
          if (Number(post.featured)) {
            posts.push(post);
          }
        });
        return posts;
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped>
#show-featured {
  background-color: var(--light-blue);
  border-radius: var(--radius);
  padding: 10px;
}
</style>
