<template>
  <div id="home-page">
    <p>MyBlog allows the creation and editing of blog posts.</p>

    <show-featured v-bind:posts="posts"></show-featured>
  </div>
</template>

<script>
import ShowFeatured from "@/components/ShowFeatured.vue";
export default {
  props: {
    posts: {
      type: Array,
      default: null,
    },
  },
  components: {
    "show-featured": ShowFeatured,
  },
};
</script>

<style>
</style>