<template>
  <div>
    <h2>Add a Product</h2>

    <div id="inputs">
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

    <button v-on:click="addProduct">Add Product</button>
    <div v-if="success" class="success">Item successfully added</div>
    <div v-if="failure && errors" class="error">Error adding item</div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      product: {
        name: "Candy Heart Grapes",
        sku: "candy-heart-grapes-" + new Date().valueOf(),
        price: 5.99,
        available: 25,
        weight: 2,
        perishable: true,
        description:
          "Next time the kids are craving candy, hand them a bowl of seedless Candy Heart grapes. Plump, red, and bursting with juice, they taste a little like raspberry lemonade and are just as refreshing. So go ahead and eat your heart out!",
      },
      errors: null,
      success: false,
      failure: false,
    };
  },
  methods: {
    addProduct() {
      axios.post("/product", this.product).then((response) => {
        if (response.data && response.data.errors) {
          this.failure = true;
          this.success = false;
          // continue from here with errors
          this.errors = response.data.errors;
        } else {
          this.product = {};
          this.errors = null;
          this.success = true;
          this.failure = false;
          this.$emit("update-products");
        }
      });
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