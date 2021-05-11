<template>
  <div id="account-page">
    <div v-if="user && user.name">
      <h2>Hi, {{ user.name }}!</h2>

      <div id="favorites">
        <strong>Your Favorites</strong>
        <div v-if="favorites && favorites.length == 0">
          <p>No favorites yet.</p>
        </div>
        <div v-else>
          <li v-for="(favorite, key) in favorites" v-bind:key="key">
            {{ favorite.title }}
          </li>
        </div>
      </div>

      <button v-on:click="logout" id="logout1">Logout</button>
    </div>

    <div v-else id="loginForm">
      <div v-if="!registerToggle">
        <h2>Login</h2>
        <div>
          <label>
            Email:
            <input type="text" v-model="data.email" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" v-model="data.password" />
          </label>
        </div>

        <button v-on:click="login" id="login1">Login</button>

        <ul v-if="errors">
          <li class="error" v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>

      <div v-if="registerToggle">
        <h2>Register</h2>
        <div>
          <label>
            Email:
            <input type="text" v-model="registerData.email" />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input type="text" v-model="registerData.name" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" v-model="registerData.password" />
          </label>
        </div>

        <ul v-if="errors">
          <li class="error" v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>

      <div v-if="!registerToggle">
        <button v-on:click="registerToggle = true" id="register1">
          Register
        </button>
      </div>
      <div v-if="registerToggle">
        <button v-on:click="register" id="register2">Register</button>
      </div>
      <div v-if="registerToggle">
        <button v-on:click="registerToggle = false" id="login2">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
export default {
  data() {
    return {
      data: {
        email: "jill@harvard.edu",
        password: "asdfasdf",
      },
      registerData: {
        email: "jaredmimms@gmail.com",
        password: "hellothere",
        name: "Jared Mimms",
      },
      registerToggle: false,
      errors: null,
      favorites: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    loadFavorites() {
      if (this.user) {
        axios.get("favorite/query?user_id=" + this.user.id).then((response) => {
          this.favorites = response.data.favorite.map((favorite) => {
            return this.$store.getters.getPostById(favorite.post_id);
          });
        });
      }
    },
    login() {
      axios.post("login", this.data).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    register() {
      axios.post("register", this.registerData).then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", response.data.user);
          this.registerToggle = false;
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response && response.data && response.data.success) {
          this.$store.commit("setUser", null);
        }
        this.registerToggle = false;
      });
    },
  },
  watch: {
    user() {
      this.loadFavorites();
    },
  },
  mounted() {
    this.loadFavorites();
  },
};
</script>