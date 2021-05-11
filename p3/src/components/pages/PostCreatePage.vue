<template>
  <div>
    <h2>Add a Post</h2>

    <div id="inputs">
      <label for="title">Title</label>
      <input type="text" v-model="post.title" id="title" v-on:blur="validate" />
      <div v-if="errors && errors.title" class="error">
        <li v-for="(item, index) in errors.title" v-bind:key="index">
          {{ item }}
        </li>
      </div>

      <label for="favorite" class="form-checkbox-label">
        <input type="checkbox" v-model="post.favorite" id="favorite" />
        Favorite?
      </label>

      <label for="featured" class="form-checkbox-label">
        <input type="checkbox" v-model="post.featured" id="featured" />
        Featured?
      </label>

      <label for="content">Content</label>
      <textarea
        v-model="post.content"
        id="content"
        v-on:blur="validate"
      ></textarea>
      <div v-if="errors && errors.content" class="error">
        <li v-for="(item, index) in errors.content" v-bind:key="index">
          {{ item }}
        </li>
      </div>

      <label for="categories">Categories (separated by comma)</label>
      <input
        type="text"
        v-model="post.categories"
        id="categories"
        v-on:blur="validate"
      />
      <div v-if="errors && errors.categories" class="error">
        <li v-for="(item, index) in errors.categories" v-bind:key="index">
          {{ item }}
        </li>
      </div>
    </div>

    <button v-on:click="addPost" id="addpost">Add Post</button>
    <div v-if="success" class="success">Post successfully added</div>
    <div v-if="failure && errors" class="error">Error adding post</div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from "validatorjs";
import { router } from "@/common/router.js";

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
      if (this.validate()) {
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
            router.push("/post/" + response.data.post.id);
          }
        });
      }
    },
    validate() {
      let validator = new Validator(this.post, {
        title: "required|between:3,100",
        categories: "required|between:3,100",
        content: "required|min:100",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
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