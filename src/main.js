import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuerify from 'vuerify'

import App from './App'
import ArticleList from './components/ArticleList.vue'
import Bonus from './components/Bonus.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Topic from './components/Topic.vue'
import topicActicle from './components/TopicArticle.vue'
import Download from './components/Download.vue'
import Article from './components/Article.vue'
import writeArticle from './components/WriteArticle.vue'

import store from '../vuex/store'

Vue.use(Vuerify)
Vue.use(VueRouter)
Vue.use(VueResource)

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
        component: Topic,
        children: [{
            path: 'topic_article/:type',
            component: topicActicle
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

