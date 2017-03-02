<template>
    <div>
        <ul>
            <li class="list" v-for="article in articles">
                <p class="list-top">
                    <a href="#" class="author">
                        <span>{{article.nickname}}</span>
                    </a>
                    <span class="time">
                        - {{article.publish_time}}
                    </span>
                </p>
                <h2 class="title">
                    <router-link :to="{path: '/article/' + article.id}">{{article.title}}</router-link>
                </h2>
                <span class="small-text">阅读 {{article.read_count}}</span>
                <span class="small-text">评论 {{article.comment_count}}</span>
                <span class="small-text">喜欢 {{article.like_count}}</span>
                <span class="small-text">打赏 {{article.reward_count}}</span>
                <span class="image"
                      :style="{'background': 'url(' + (article.picture_url || defaultUrl) + ')', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
                defaultUrl: 'https://p0.meituan.net/dpnewvc/3fa6b39cd8cf7b885614a60f792c89ff17972.jpg'
            }
        },
        computed: mapGetters({
            articles: 'getArticles'
        })
    }

</script>

<style>
  .list{
    margin: 17px 10px 17px 30px;
    padding-bottom: 17px;
    border-bottom: 1px dashed #d9d9d9;
  }
  .list-top{
    padding-top: 10px;
  }
  .list .title{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    display: inherit;
    font-weight: bold;
    line-height: 1.5;
  }

  .list .title a{
    font-size: 18px;
  }

  .list .title a:hover {
    color: #000000;
  }
</style>

