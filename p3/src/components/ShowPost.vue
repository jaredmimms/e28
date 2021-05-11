<template>
  <div class="show-post">
    <router-link v-bind:to="'/post/' + post.id">
      <div class="title">{{ post.title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.show-post {
  border: 1px solid var(--silver);
  text-align: center;
  padding: 15px;
  margin: 15px;
  width: 30%;
  min-width: 300px;
}

.title {
  height: 50px;
  font-size: 2rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}
</style>