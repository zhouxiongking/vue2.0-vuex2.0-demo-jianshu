<template>
  <div class="topic_article_container">
      <ul>
          <li v-for="content in topicArticles">
              <a href="" class="topic_article_img"><img :src="content.img"></a>
              <div class="topic_content">
                  <h5>{{ content.title }}</h5>
                  <p>{{ content.par }}</p>
                  <div class="topic_button">
                      <a href="#"><i class="fa fa-fw fa-plus"></i><span>添加关注</span></a>
                  </div>
                  <p>
                    <a href="#" style="color:#4094c7">{{ content.number}}篇文章</a>
                    &nbsp;&nbsp;·&nbsp;&nbsp;{{content.concern}}k人关注
                    <span class="topic_tag"><i class="fa fa-tags"></i>{{ content.keys}}</span>
                  </p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: mapGetters({
            show: 'getShow',
            topicArticles: 'getTopicArticles'
        }),
        mounted () {
            this.$store.dispatch('displayTopic', 'hot')
            this.$store.dispatch('changeArticleFlag', true)
        }
    }
</script>

<style>
  img {
    max-width: 100%;
    width: auto\9;
    height: auto;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  .topic_article_container{
    width: calc(100% - 35px);
    height: calc(100% - 180px);
    margin:45px 0 0 35px;
  }
  .topic_article_container li{
    padding: 15px 0 10px 0;
    border-bottom: 1px dashed #d9d9d9;
  }
  .topic_article_img{
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .ttopic_article_img:after{
    display: block;
    clear: both;
    height: 0;
    content: '';
    visibility: hidden;
  }
  .topic_article_img img{
    width: 100%;
    height: 100%;
    border: 2px solid white;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .topic_content{
    position: relative;
    margin-left: 55px;
  }
  .topic_content h5{
    margin-bottom: 3px;
  }
  .topic_content p{
    margin-bottom: 3px;
    line-height: 20px;
    color: #999999;
    font-size: 12px;
    padding-right: 120px;
  }
  .topic_button{
    position: absolute;
    right: 0;
    top:50%;
    width: 80px;
    height: 20px;
    padding: 2px 10px;
    margin-top: -13px;
    border:1px solid #49be38;
    border-radius: 50px;
    background-color: #49be38;
  }
  .topic_button a{
    display: block;
    line-height: 20px;
    width: 80px;
    color: #ffffff;
    text-align: center;
  }
  .topic_button span{
    margin-left: 3px;
    padding-left: 7px;
    border-left: 1px solid #ffffff;
  }
  .topic_tag{
    margin-left: 10px;
  }
  .sequence-nav{
    margin-bottom: 10px;
    color: #999999;
  }
  .sequence-nav .active{
    color: #000000;
  }
</style>
