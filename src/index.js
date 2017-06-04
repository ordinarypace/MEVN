import Vue from 'vue';
import store from './store';
import App from './app.vue';

new Vue({
    el : '#app',
    template : '<App />',
    store,
    components : { App }
});
