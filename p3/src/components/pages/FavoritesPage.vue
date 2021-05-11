<template>
  <div id="favorites-page">
    <h2>Favorites</h2>
    <ul class="clean-list">
      <li v-for="post in favoritePosts" v-bind:key="post.id">
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
    posts: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    favoritePosts() {
      if (this.posts) {
        var posts = [];
        this.posts.forEach(function (post) {
          if (Number(post.favorite)) {
            posts.push(post);
          }
        });
        return posts;
      } else {
        return [];
      }
    },
  },
};
</script>

<style>
</style>