<template>
    <div>
        <ul>
            <li class="list" v-for="article in articles">
                <p class="list-top">
                    <a href="#" class="author">
                        <span>{{article.author}}</span>
                    </a>
                    <span class="time">
                        - {{article.time}}
                    </span>
                </p>
                <h2 class="title">
                    <router-link to="/article/123211">{{article.title}}</router-link>
                </h2>
                <span class="small-text">阅读 {{article.read}}</span>
                <span class="small-text">评论 {{article.comment}}</span>
                <span class="small-text">喜欢 {{article.like}}</span>
                <span class="small-text">打赏 {{article.pay}}</span>
                <span class="image"
                      :style="{ background: article.src, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: mapGetters({
            articles: 'getArticles'
        }),
        mounted () {
            this.$store.dispatch('changeArticleFlag', true)
        }
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

