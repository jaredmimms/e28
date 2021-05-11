<template>
  <div id="categories-page">
    <h2>Categories</h2>

    <button v-if="postArray[0]" v-on:click="cancel">Cancel</button>

    <show-post
      v-for="post in postArray"
      v-bind:key="post.id"
      v-bind:post="post"
    ></show-post>

    <ul v-if="!postArray[0]" class="clean-list">
      <li v-for="(category, id) in categories" v-bind:key="id">
        <button v-on:click="showCategory(category.postArray)">
          {{ category.item }}
        </button>
      </li>
    </ul>
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
      postArray: [],
    };
  },
  methods: {
    showCategory(postArray) {
      this.postArray = postArray;
    },
    cancel() {
      this.postArray = [];
    },
  },
  computed: {
    categories() {
      var posted = [];
      if (this.posts) {
        let categories = this.posts.map(function (post) {
          if (post.categories) {
            return post.categories.split(",");
          }
        });
        let mergedCategories = [].concat.apply([], categories);

        // Return unique, sorted categories
        let item = [...new Set(mergedCategories)].sort();
        var postss = this.posts;
        item.forEach(function (itemed) {
          var allPosts = [];
          postss.forEach(function (posted) {
            if (posted.categories) {
              var itemArray = posted.categories.split(",");
              itemArray.forEach(function (itemd) {
                if (itemd == itemed) {
                  allPosts.push(posted);
                }
              });
            }
          });
          if (allPosts[0]) {
            posted.push({ item: itemed, postArray: allPosts });
          }
        });
      }
      return posted;
    },
  },
};
</script>

<style>
</style>