<template>
  <div id="search-page">
    <h2>Posts Search</h2>
    <label for="search">Search: </label>
    <input type="text" v-model="search" id="search" />
    <div id="posts">
      <show-post
        v-for="post in searchPosts"
        v-bind:key="post.id"
        v-bind:post="post"
      ></show-post>
    </div>
  </div>
</template>

<script>
import ShowPost from "@/components/ShowPost.vue";

export default {
  components: {
    "show-post": ShowPost,
  },
  props: {
    posts: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    searchPosts() {
      var searchResults = [];
      var search = this.search;
      if (this.posts && search) {
        var searchTerm = new RegExp(search, "i");
        this.posts.forEach(function (post) {
          if (
            post.title.search(searchTerm) != -1 ||
            post.content.search(searchTerm) != -1
          ) {
            searchResults.push(post);
          }
        });
      }
      return searchResults;
    },
  },
};
</script>

<style scoped>
#posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
</style>
