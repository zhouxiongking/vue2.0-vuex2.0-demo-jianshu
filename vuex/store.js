/**
 * Created by zhouxiong on 16/12/5.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    show: 'hot',
    loginway: 'login',
    articleFlag: false,
    islogin: false,
    articles: [],
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
            title: '一月四日日记',
            content_1: '去追赶时间的急流',
            content_2: '尽管是那样地用力，',
            content_3: '还是被远远地抛在了后头。',
            content_4: '我那日记的小船，',
            content_5: '为什么比白云还要缓慢?',
            content_6: '因为它喜欢在遗忘的沙洲上停搁，',
            content_7: '或是在冥想的旋涡中打转。',
            author: '',
            bg: 'url(../static/images/bonus_1.jpg)'
        },
        {
            title: '二月黎明',
            content_1: '我把天空和大地打扫干干净净',
            content_2: '归还给一个陌不相识的人',
            content_3: '我寂寞地等，我阴沉地等',
            content_4: '二月的雪，二月的雨',
            content_5: '',
            content_6: '',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_2.jpg)'
        },
        {
            title: '三月花开，馨香淡淡',
            content_1: '让我坐在三月的阳光下',
            content_2: '拥馨香淡淡',
            content_3: '将心放飞',
            content_4: '让快乐与馨香弥漫心湖',
            content_5: '让梦在春暖花开中斑斓',
            content_6: '',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_3.jpg)'
        },
        {
            title: '你是人间的四月天',
            content_1: '我说你是人间的四月天',
            content_2: '笑响点亮了四面风',
            content_3: '轻灵在春的光艳中交舞着变',
            content_4: '你是四月早天里的云烟',
            content_5: '黄昏吹着风的软',
            content_6: '星子在无意中闪',
            content_7: '细雨点洒在花前',
            author: '',
            bg: 'url(../../static/images/bonus_4.jpg)'
        },
        {
            title: '穿过五月的思念',
            content_1: '希翼夹几许五月阳光',
            content_2: '捻几缕五月暖意',
            content_3: '长出思念的花蕊',
            content_4: '心渐暖',
            content_5: '情渐浓',
            content_6: '',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_5.jpg)'
        },
        {
            title: '青葱六月',
            content_1: '郁郁葱葱的六月',
            content_2: '迎面而来青春的朝气',
            content_3: '在这灵动舒展的时节',
            content_4: '写意一份繁花似锦',
            content_5: '期待梦想的花朵悄悄绽放',
            content_6: '',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_6.jpg)'
        },
        {
            title: '无怨的青春',
            content_1: '我的一生 本来可以有',
            content_2: '不同的遭逢',
            content_3: '如果在新雨的荷前',
            content_4: '你只是静静地走过',
            content_5: '在那个七月的午后 如果',
            content_6: '如果你没有回头',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_7.jpg)'
        },
        {
            title: '过程',
            content_1: '八月就是八月',
            content_2: '八月我守口如瓶',
            content_3: '八月里我是瓶中的水',
            content_4: '你是青天的云',
            content_5: '',
            content_6: '',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_8.jpg)'
        },
        {
            title: '温情九月',
            content_1: '九月的手掌拂去小溪夏日的狂躁',
            content_2: '用心聆听着秋日的私语',
            content_3: '温顺地弹唱着九月醉人的秋歌',
            content_4: '惹得天空湛蓝高远',
            content_5: '碧空如洗',
            content_6: '',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_9.jpg)'
        },
        {
            title: '金秋十月',
            content_1: '又见枫叶落下',
            content_2: '冷风瑟瑟',
            content_3: '几重露霜惹眸',
            content_4: '方知江南秋又深',
            content_5: '红颜醉，一心向暖',
            content_6: '任流年似水时光静好',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_10.jpg)'
        },
        {
            title: '平淡记忆',
            content_1: '十一月里',
            content_2: '没有繁花似锦',
            content_3: '只有花枯花谢',
            content_4: '把感情写在心里',
            content_5: '写入这十一月平淡的记忆',
            content_6: '',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_11.jpg)'
        },
        {
            title: '孤独的夜行者',
            content_1: '雪睡了',
            content_2: '夜有一个白色的枕头',
            content_3: '寒风吹亮了月光',
            content_4: '十二月默默地站在街上',
            content_5: '有些甜蜜 有些辛酸 有些茫然',
            content_6: '',
            content_7: '',
            author: '',
            bg: 'url(../static/images/bonus_12.jpg)'
        }
    ]
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
