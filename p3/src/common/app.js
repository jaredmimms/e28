export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_URL ?? 'http://localhost/',
    responseType: 'json',
    withCredentials: true
});