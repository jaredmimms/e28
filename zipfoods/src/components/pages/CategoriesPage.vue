<template>
  <div id="categories-page">
    <h2>Categories</h2>
    <ul class="clean-list">
      <li v-for="(category, id) in categories" v-bind:key="id">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    categories() {
      if (this.products) {
        let categories = this.products.map(function (product) {
          if (product.categories) {
            return product.categories.split(",");
          }
        });
        let mergedCategories = [].concat.apply([], categories);

        // Return unique, sorted categories
        return [...new Set(mergedCategories)].sort();
      } else {
        return [];
      }
    },
  },
};
</script>

<style>
</style>