<template>
  <div>
    <h2>Add a Post</h2>

    <div id="inputs">
      <label for="title">Title</label>
      <input type="text" v-model="post.title" id="title" />
      <div v-if="errors && errors.title" class="error">Title required</div>

      <label for="favorite" class="form-checkbox-label">
        <input type="checkbox" v-model="post.favorite" id="favorite" />
        Favorite?
      </label>

      <label for="featured" class="form-checkbox-label">
        <input type="checkbox" v-model="post.featured" id="featured" />
        Featured?
      </label>

      <label for="content">Content</label>
      <textarea v-model="post.content" id="content"></textarea>
      <div v-if="errors && errors.content" class="error">Content required</div>

      <label for="categories">Categories (seperated by comma)</label>
      <input type="text" v-model="post.categories" id="categories" />
    </div>

    <button v-on:click="addPost">Add Post</button>
    <div v-if="success" class="success">Post successfully added</div>
    <div v-if="failure && errors" class="error">Error adding post</div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      post: {
        title: "Lorem ipsum",
        featured: false,
        favorite: false,
        categories: "lorem",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      errors: null,
      success: false,
      failure: false,
    };
  },
  methods: {
    addPost() {
      var editedPost = this.post;
      if (editedPost.featured) {
        editedPost.featured = 1;
      } else {
        editedPost.featured = 0;
      }
      if (editedPost.favorite) {
        editedPost.favorite = 1;
      } else {
        editedPost.favorite = 0;
      }
      axios.post("/post", editedPost).then((response) => {
        if (response.data && response.data.errors) {
          this.failure = true;
          this.success = false;
          // continue from here with errors
          this.errors = response.data.errors;
        } else {
          this.post = {};
          this.errors = null;
          this.success = true;
          this.failure = false;
          this.$emit("update-posts");
        }
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
.success {
  color: green;
}
#inputs {
  text-align: left;
}
input,
label {
  display: block;
}
</style>