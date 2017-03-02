<template>
  <div>
      <div class="showbar">
          <div class="cover-image"></div>
          <div class="text">
              <h1>简书</h1>
              <h3>交流故事</h3>
              <p>一个基于内容分享的社区</p>
              <router-link to="/write">
                  <i class="fa fa-home"></i>
                  提笔写文章
              </router-link>
          </div>
      </div>
      <div class="article-page">
          <nav>
              <span class="nav-text fir">
                  <a href="#">发现</a>
              </span>
              <span class="nav-text">
                  <router-link to="/bonus">2016精选</router-link>
              </span>
              <span class="search clearfloat">
                  <span class="input">
                      <input type="search" placeholder="搜索">
                      <span class="search-icon">
                          <i class="fa fa-search"></i>
                      </span>
                  </span>
              </span>
          </nav>
          <div class="article-list">
              <ul class="btn-group">
                  <li :class="{active: show === 'hot'}" @click="displayArticles('hot')">
                      <router-link to="/home/article/hot">热门</router-link>
                  </li>
                  <li :class="{active: show === 'new'}" @click="displayArticles('new')">
                      <router-link to="/home/article/new">新上榜</router-link>
                  </li>
                  <li :class="{active: show === 'daily'}" @click="displayArticles('daily')">
                      <router-link to="/home/article/daily">日报</router-link>
                  </li>
                  <li :class="{active: show === 'weekhot'}" @click="displayArticles('weekhot')">
                      <router-link to="/home/article/weekhot">七日热门</router-link>
                  </li>
                  <li :class="{active: show === 'monthhot'}" @click="displayArticles('monthhot')">
                      <router-link to="/home/article/monthhot">三十日热门</router-link>
                  </li>
                  <li :class="{active: show === 'reward'}" @click="displayArticles('reward')">
                      <router-link to="/home/article/reward">有奖活动</router-link>
                  </li>
                  <li :class="{active: show === 'publish'}" @click="displayArticles('publish')">
                    <router-link to="/home/article/publish">简书出版</router-link>
                  </li>
                  <li :class="{active: show === 'hotnews'}" @click="displayArticles('hotnews')">
                      <router-link to="/home/article/hotnews">实热新闻</router-link>
                  </li>
                  <li :class="{active: show === 'choice'}" @click="displayArticles('choice')">
                      <router-link to="/home/article/choice">专题精选</router-link>
                  </li>
              </ul>
              <router-view></router-view>
          </div>
      </div>

  </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: mapGetters({
            show: 'getShow'
        }),
        methods: {
            displayArticles (type) {
                // 发送请求,找出对应类型的文章
                var url = '/article/list?type=' + type
                this.$http.get(url).then(function (response) {
                    var resData = JSON.parse(response.body)
                    if (resData.status) {
                        var articleList = resData.articleList
                        var payload = {
                            type: type,
                            articleList: articleList
                        }
                        this.$store.dispatch('displayArticles', payload)
                    }
                })
            }
        },
        mounted () {
            this.$store.dispatch('changeArticleFlag', true)
            // 默认加载热门文章
            var type = this.$route.params.type
            this.displayArticles(type)
        }
    }

</script>

<style>
  .btn-group{
    margin-left: 15px;
    margin-top:20px;
  }
  .btn-group .active{
    background-color: #de533a;
  }
  .btn-group .active a{
    color: #ffffff;
  }
  .btn-group li{
    margin: 5px 5px;
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  }
  @media screen and (max-width: 1100px){
    .showbar {
      display: none;
    }
  }
  @media screen and (max-width: 768px){
    .article-page {
      width: 100%;
      right: 0;
    }
  }
</style>
