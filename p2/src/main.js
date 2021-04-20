import { createApp } from 'vue'
import App from './App.vue'

// Import just the methods we need from the VueRouter module
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import PostsPage from '@/components/pages/PostsPage.vue';
import FavoritesPage from '@/components/pages/FavoritesPage.vue';
import PostPage from '@/components/pages/PostPage.vue';
import PostCreatePage from '@/components/pages/PostCreatePage.vue';
import SearchPage from '@/components/pages/SearchPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/posts', component: PostsPage },
        { path: '/post/new', component: PostCreatePage },
        { path: '/post/:id', component: PostPage, props: true },
        { path: '/favorites', component: FavoritesPage },
        { path: '/search', component: SearchPage },
        { path: '/categories', component: CategoriesPage },
    ]
});

createApp(App).use(router).mount('#app')
