<template>
  <div id="product-page">
    <div v-if="product">
      <h1>Product: {{ id }}</h1>
      <div class="name">{{ product.name }}</div>
      <img
        class="thumb"
        v-bind:src="require('@/assets/images/products/' + product.id + '.jpg')"
      />

      <div class="price">${{ product.price }}</div>
      <p class="description">{{ product.description }}</p>
    </div>
    <div v-else>
      <h2>Product {{ id }} not found</h2>
    </div>
  </div>
</template>

<script>
import { products } from "@/common/products.js";

export default {
  props: {
    id: {
      type: String,
    },
  },
  computed: {
    product() {
      var product;
      var id = this.id;
      products.forEach(function (producted) {
        if (producted.id == id) {
          product = producted;
        }
      });
      return product;
    },
  },
};
</script>

<style scoped>
#product-page {
  border: 1px solid var(--silver);
  text-align: center;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  min-width: 300px;
}

.name {
  height: 50px;
  font-size: 2rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}

.thumb {
  width: 75%;
  max-width: 300px;
  border-radius: var(--radius);
}

.description {
  margin: auto;
  text-align: left;
  font-style: italic;
  line-height: 1.5;
}

.price {
  font-family: var(--serif-font);
  font-weight: bold;
  font-size: 2rem;
  padding: 10px;
}
</style>