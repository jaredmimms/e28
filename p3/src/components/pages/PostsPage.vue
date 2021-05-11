<template>
  <div id="posts-page">
    <h2>Posts</h2>
    <div id="posts">
      <show-post
        v-for="post in posts"
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
    return {};
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
