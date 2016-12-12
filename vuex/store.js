/**
 * Created by zhouxiong on 16/12/5.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    show: 'hot',
    loginway: 'login',
    articleFlag: false,
    articles: [],
    hotArticles: [{
        author: '小熊猫',
        title: '每天努力多一点点',
        time: '大约6小时前',
        read: '7231',
        comment: '247',
        like: '2341',
        pay: '2',
        src: 'url(../../static/images/vue-demo-hot.jpg)'
    }, {
        author: '大熊猫',
        title: '每天前进一点点',
        time: '大约6小时前',
        read: '7231',
        comment: '247',
        like: '2341',
        pay: '2',
        src: 'url(../../static/images/vue-demo-hot.jpg)'
    }],
    newArticles: [{
        author: '小熊猫',
        title: '每天开心多一点',
        time: '大约6小时前',
        read: '7231',
        comment: '247',
        like: '2341',
        pay: '2',
        src: 'url(../../static/images/vue-demo-hot.jpg)'
    }, {
        author: '大熊猫',
        title: '每天满足多一点',
        time: '大约6小时前',
        read: '7231',
        comment: '247',
        like: '2341',
        pay: '2',
        src: 'url(../../static/images/vue-demo-hot.jpg)'
    }],
    dailyArticles: [],
    weekhotArticles: [],
    monthhotArticles: [],
    rewardArticles: [],
    publishArticles: [],
    hotnewsArticles: [],
    choiceArticles: [],
    recommondArticles: [],
    topicArticles: [],
    hotTopicArticles: [{
        img: '../../static/images/topic_1.jpg',
        title: '游戏',
        par: '玩转简书的第一步，从这个专题开始。' +
             '想上首页热门榜么？好内容想被更多人看到么？来投稿吧！' +
             '如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。' +
             '投稿必须原创。如果发现有非...',
        number: '97233',
        concern: '121.7',
        keys: '故事、连载',
        time: '20160620'
    }, {
        img: '../../static/images/topic_3.jpg',
        title: '诗',
        par: '诗，让你感受自己的心灵。' +
             '专题主编：苏锦年 投稿须知：' +
             '本专题收录古诗、词、现代诗以及诗词点评及指导。' +
             '2.内容必须为原创，切勿用其他诗人的诗句。' +
             '3.文章排版整洁，注意...',
        number: '35420',
        concern: '146.6',
        keys: '诗',
        time: '20160630'
    }],
    recommondTopicArticles: [],
    texts: [
        {
            title: '给你90天，成为不一样的自己',
            content_1: '如果你应付不了现在的生活和工作',
            content_2: '无论你走到哪里，',
            content_3: '无论你换了什么工作，什么公司，',
            content_4: '都无济于事。',
            content_5: '因为你根本没想让自己成熟起来，',
            content_6: '想让变的更优秀也不过是一句口头禅。',
            author: '',
            bg: 'url(../static/images/bonus_1.jpg)'
        },
        {
            title: '使你更有思想的20本书',
            content_1: '真正伟大的当代文学，',
            content_2: '正如人们借由狄更斯来了解十九世纪的英国，',
            content_3: '后人也可以通过《自由》来了解',
            content_4: '二十一世纪初期的美国。',
            content_5: '',
            content_6: '',
            author: '',
            bg: 'url(../static/images/bonus_2.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../static/images/bonus_3.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../../static/images/bonus_4.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../static/images/bonus_5.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../static/images/bonus_6.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../static/images/bonus_7.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../static/images/bonus_8.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../static/images/bonus_9.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../static/images/bonus_10.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../static/images/bonus_11.jpg)'
        },
        {
            title: '无感是最舒适的爱情',
            content_1: '爱情原本就是个很娇气的东西，',
            content_2: '它经不起太多的矫情，你死我活和无理取闹，',
            content_3: '也经不起任何的伪装，刻意讨好和忍辱负重。',
            content_4: '当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，',
            content_5: '才是爱情最原本的样子。',
            content_6: '当她不再刻意的感受他的存在，',
            author: '',
            bg: 'url(../static/images/bonus_12.jpg)'
        }
    ]
}

const mutations = {
    DISPLAY_ARTICLES (state, type) {
        state.show = type
        state.articles = state[type + 'Articles']
    },
    DISPLAY_TOPIC (state, type) {
        state.show = type
        state.topicArticles = state[type + 'TopicArticles']
    },
    SORT_CONTENT (state, type) {

    },
    CHANGE_LOGINWAY (state, loginway) {
        state.loginway = loginway
    },
    CHANGE_ARTICLEFLAG (state, flag) {
        state.articleFlag = flag
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
