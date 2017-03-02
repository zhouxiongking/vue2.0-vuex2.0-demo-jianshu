import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from '../vuex/store'

import App from './App'
import ArticleList from './components/ArticleList.vue'
import Bonus from './components/Bonus.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Special from './components/Special.vue'
import SpecialList from './components/SpecialList.vue'
import Download from './components/Download.vue'
import Article from './components/Article.vue'
import writeArticle from './components/WriteArticle.vue'

import VueQuillEditor from 'vue-quill-editor'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.use(VueQuillEditor)

const router = new VueRouter({
    routes: [{
        path: '/home',
        component: Home,
        children: [{
            path: 'article/:type',
            component: ArticleList
        }]
    }, {
        path: '/topic',
        component: Special,
        children: [{
            path: 'topic_article/:type',
            component: SpecialList
        }]
    }, {
        path: '/article/:id',
        component: Article
    }, {
        path: '/bonus',
        component: Bonus
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/download',
        component: Download
    }, {
        path: '/write',
        component: writeArticle
    }, {
        path: '/*',
        redirect: '/home/article/hot'
    }]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

