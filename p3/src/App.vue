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
export default {
  name: "App",
  data() {
    return {
      links: [
        "home",
        "posts",
        "add a post",
        "global favorites",
        "search",
        "categories",
        "account",
      ],
      paths: {
        home: "/",
        posts: "/posts",
        "add a post": "/post/new",
        "global favorites": "/favorites",
        search: "/search",
        categories: "/categories",
        account: "/account",
      },
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      this.$store.dispatch("fetchPosts");
    },
  },
};
</script>

<style src='@/assets/css/p3.css'></style>
