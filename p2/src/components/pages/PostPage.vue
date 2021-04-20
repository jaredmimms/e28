<template>
  <div id="post-page">
    <div v-if="post">
      <h1>Post: {{ id }}</h1>
      <div class="title">{{ post.title }}</div>

      <div class="content">{{ post.content }}</div>
      <div v-if="updated">
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
        <div v-if="errors && errors.content" class="error">
          Content required
        </div>

        <label for="categories">Categories (separated by comma)</label>
        <input type="text" v-model="post.categories" id="categories" />
      </div>

      <button v-if="!updated" v-on:click="updated = true">Update</button>
      <button v-if="updated" v-on:click="update">Update</button>
      <button
        v-if="updated"
        v-on:click="
          updated = false;
          success = false;
          failure = false;
        "
      >
        Cancel
      </button>
      <div v-if="success" class="success">Post successfully updated</div>
      <div v-if="failure && errors" class="error">Error updating post</div>
    </div>
    <div v-else>
      <h2>Post {{ id }} not found</h2>
    </div>

    <div v-if="previousPost">
      <router-link v-bind:to="'/post/' + previousPost.id">
        <button>Previous</button>
      </router-link>
    </div>

    <div v-if="nextPost">
      <router-link v-bind:to="'/post/' + nextPost.id">
        <button>Next</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  props: {
    id: {
      type: String,
    },
    posts: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      updated: false,
      failure: false,
      success: false,
      errors: [],
    };
  },
  methods: {
    update() {
      var definedPost = this.post;
      if (definedPost.favorite) {
        definedPost.favorite = 1;
      } else {
        definedPost.favorite = 0;
      }
      if (definedPost.featured) {
        definedPost.featured = 1;
      } else {
        definedPost.featured = 0;
      }
      axios.put("/post/" + this.post.id, definedPost).then((response) => {
        if (response.data && response.data.errors) {
          this.failure = true;
          this.success = false;
          // continue from here with errors
          this.errors = response.data.errors;
        } else {
          this.errors = null;
          this.success = true;
          this.failure = false;
          this.$emit("update-posts");
        }
      });
    },
  },
  computed: {
    nextPost() {
      var posted;
      if (this.posts && this.post) {
        var id = this.post.id;
        this.posts.forEach(function (post, index, posts) {
          if (id == post.id) {
            if (posts[index + 1]) {
              posted = posts[index + 1];
            } else if (posts.length > 1) {
              posted = posts[0];
            }
          }
        });
      }
      return posted;
    },
    previousPost() {
      var posted;
      if (this.posts && this.post) {
        var id = this.post.id;
        this.posts.forEach(function (post, index, posts) {
          if (id == post.id) {
            if (posts[index - 1]) {
              posted = posts[index - 1];
            } else if (posts.length > 1) {
              posted = posts[posts.length - 1];
            }
          }
        });
      }
      return posted;
    },
    post() {
      if (this.posts) {
        var post;
        var id = this.id;
        this.posts.forEach(function (producted) {
          if (producted.id == id) {
            post = producted;
          }
        });
        if (post) {
          if (Number(post.favorite) == 1) {
            post.favorite = true;
          } else {
            post.favorite = false;
          }
          if (Number(post.featured) == 1) {
            post.featured = true;
          } else {
            post.featured = false;
          }
        }
        return post;
      } else {
        return null;
      }
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
label,
textarea,
button {
  display: block;
  float: left;
  clear: both;
}

#product-page {
  border: 1px solid var(--silver);
  text-align: center;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  min-width: 300px;
}

.title {
  height: 50px;
  font-size: 2rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}

.content {
  margin: auto;
  text-align: left;
  font-style: italic;
  line-height: 1.5;
}
</style>