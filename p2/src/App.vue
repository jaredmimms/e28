<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>

    <router-view
      v-bind:posts="posts"
      v-on:update-posts="loadPosts"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: "App",
  data() {
    return {
      posts: [],

      /* Store links in an array to maintain order */
      links: [
        "home",
        "posts",
        "add a post",
        "favorites",
        "search",
        "categories",
      ],

      /* Map links to the appropriate component */
      paths: {
        home: "/",
        posts: "/posts",
        "add a post": "/post/new",
        favorites: "/favorites",
        search: "/search",
        categories: "/categories",
      },
    };
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      axios.get("post").then((response) => {
        this.posts = response.data.post;
      });
    },
  },
};
</script>

<style src='@/assets/css/p2.css'></style>
