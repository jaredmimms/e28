<template>
  <div id="product-page">
    <div v-if="product">
      <h1>Product: {{ id }}</h1>
      <div class="name">{{ product.name }}</div>
      <img class="thumb" v-bind:src="imgSrc" />

      <div class="price">${{ product.price }}</div>
      <p class="description">{{ product.description }}</p>
      <div v-if="updated">
        <label for="name">Name</label>
        <input type="text" v-model="product.name" id="name" />
        <div v-if="errors && errors.name" class="error">Name required</div>
        <label for="sku">SKU:</label>
        <input type="text" v-model="product.sku" id="sku" />
        <div v-if="errors && errors.sku" class="error">Unique SKU required</div>
        <label for="price">Price:</label>
        <input type="text" v-model="product.price" id="price" />
        <div v-if="errors && errors.price" class="error">Price required</div>
        <label for="available">Quantity available:</label>
        <input type="text" v-model="product.available" id="available" />
        <div v-if="errors && errors.available" class="error">
          Available required
        </div>
        <label for="weight">Weight (in lbs):</label>
        <input type="text" v-model="product.weight" id="weight" />
        <div v-if="errors && errors.weight" class="error">Weight required</div>
        <label for="perishable" class="form-checkbox-label">
          <input type="checkbox" v-model="product.perishable" id="perishable" />
          Perishable?
        </label>

        <label for="description">Description</label>
        <textarea v-model="product.description" id="description"></textarea>
        <div v-if="errors && errors.description" class="error">
          Description required
        </div>
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
      <div v-if="success" class="success">Item successfully updated</div>
      <div v-if="failure && errors" class="error">Error updating item</div>
    </div>
    <div v-else>
      <h2>Product {{ id }} not found</h2>
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
    products: {
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
      var definedProduct = this.product;
      if (definedProduct.perishable) {
        definedProduct.perishable = 1;
      } else {
        definedProduct.perishable = 0;
      }
      axios
        .put("/product/" + this.product.id, definedProduct)
        .then((response) => {
          if (response.data && response.data.errors) {
            this.failure = true;
            this.success = false;
            // continue from here with errors
            this.errors = response.data.errors;
          } else {
            this.errors = null;
            this.success = true;
            this.failure = false;
            this.$emit("update-products");
          }
        });
    },
  },
  computed: {
    imgSrc() {
      try {
        return require("@/assets/images/products/" + this.product.id + ".jpg");
      } catch (e) {
        return require("@/assets/images/products/image-not-available.jpg");
      }
    },
    product() {
      if (this.products) {
        var product;
        var id = this.id;
        this.products.forEach(function (producted) {
          if (producted.id == id) {
            product = producted;
          }
        });
        if (product) {
          if (Number(product.perishable) == 1) {
            product.perishable = true;
          } else {
            product.perishable = false;
          }
        }
        return product;
      } else {
        return null;
      }
    },
    perishable() {
      if (this.product) {
        return Number(this.product.perishable) == 1;
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
label {
  display: block;
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