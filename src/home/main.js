// App scss
require('@/assets/css/app.scss')

// Older browser support fix
// https://github.com/johndatserakis/koa-vue-notes-api/issues/1
import 'es6-promise/auto'

// Main vue instance
import Vue from 'vue'

// Plugins
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import SocialSharing from 'vue-social-sharing'
Vue.use(SocialSharing)

// this.$ga.event('Category', 'Event', 'Label')
// import VueAnalytics from 'vue-analytics'
// Vue.use(VueAnalytics, {
//     id: ''
// })

import Toasted from 'vue-toasted'
Vue.use(Toasted, {
    theme: 'primary',
    position: 'top-center',
    duration: 2300
})
import 'vue-toasted/dist/vue-toasted.min.css'

import App from './App.vue'

import Home from './Home.vue'
Vue.component('home', Home)

new Vue({
    render: h => h(App)
}).$mount('#app')
