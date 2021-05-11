import { createStore, createLogger } from 'vuex'
import { axios } from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug && 1 == 2 ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            posts: [],
            user: null,
        }
    },
    // Methods used to alter the state of our store
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        }
    },
    // Methods that can contain async. code
    // Can not directly alter the state - has to change state
    // by committing mutations
    actions: {
        fetchPosts(context) {
            axios.get("post").then((response) => {
                context.commit('setPosts', response.data.post);
            });
        },
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        },
    },
    getters: {
        getPostById(state) {
            return function (id) {
                return state.posts.filter((post) => {
                    return post.id == id;
                }, id)[0];
            }
        }
    }
})