<template>
    <div>
        <div class="showbar">
            <div class="cover-image_2"></div>
            <div class="text">
                <h1>专题</h1>
                <h3>让思想汇聚，流传</h3>
                <p class="top-tip">专题内容由多位写作者提供</p>
                <a href="#"><i class="fa fa-pencil"></i>&nbsp;&nbsp;新建专题</a>
            </div>
        </div>
        <div class="article-page">
            <nav>
                <span class="search clearfloat">
                    <span class="input">
                        <input type="search" placeholder="搜索">
                    </span>
                    <span class="search-icon">
                        <i class="fa fa-search"></i>
                    </span>
                </span>
            </nav>
            <div class="hot-img">
              <img src="../../static/images/hot-special.png">
            </div>
            <div class="article-list">
                <ul class="btn-group">
                    <li :class="{active: show === 'hot'}" @click="displayTopic('hot')">
                        <router-link to="/topic/topic_article/hot">热门</router-link>
                    </li>
                    <li :class="{active: show === 'recommond'}" @click="displayTopic('recommond')">
                        <router-link to="/topic/topic_article/recommond">推荐</router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            show: 'getShow'
        }),
        methods: {
            displayTopic (type) {
                this.$store.commit('DISPLAY_TOPIC', type)
            }
        },
        mounted () {
            this.$store.dispatch('changeArticleFlag', true)
        }
    }
</script>

<style>
  .text{
    text-shadow:1px 1px 1px #000000;
  }
  .top-tip {
    font-size:14px;
    margin-bottom:5px
  }
  .hot-img {
    margin-top: 20px;
  }
</style>
