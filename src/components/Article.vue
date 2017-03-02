<template>
  <div class="article-container">
    <!-- Article activities for width under 768px -->
    <div class="related-avatar-group activities"></div>
    <div class="article">
      <div class="preview">
        <div class="author-info">
          <div class="btn btn-small btn-success follow" id="follow_user_445173">
            <a data-type="json" data-user-slug="29010e584814" data-remote="true" rel="nofollow" data-method="post" href="#"><i class="fa fa-plus"></i>  <span>添加关注</span></a>
          </div>

          <a class="avatar" href="#">
            <img src="http://upload.jianshu.io/users/upload_avatars/445173/693d39ebd6c5.jpg?imageMogr/thumbnail/90x90/quality/100" alt="100">
          </a>            <span class="label">
                作者
            </span>
          <a class="author-name blue-link" href="#">
            <span>{{article.nickname}}</span>
          </a>
          <span data-toggle="tooltip">{{article.publish_time}}</span>
          <div>
            <span>写了25144字</span>，<span>被{{article.attention_count}}人关注</span>，
            <span>获得了{{article.enjoy_count}}个喜欢</span>
          </div>
        </div>
        <h1 class="title">{{article.title}}</h1>
        <div class="meta-top">
          <span class="wordage">字数{{articleLength}}</span>
          <span class="views-count">阅读{{article.read_count}}</span>
          <span class="comments-count">评论{{article.comment_count}}</span>
          <span class="likes-count">喜欢{{article.like_count}}</span>
        </div>

        <!-- Collection/Bookmark/Share for width under 768px -->
        <div class="article-share"></div>
        <!-- -->

        <!--<div class="show-content">-->
            <!--{{article.content}}-->
        <!--</div>-->
        <div class="show-content">
            <div v-html="article.content"></div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
  export default {
      data () {
          return {
              article: {},
              articleLength: 0
          }
      },
      mounted () {
          this.$store.dispatch('changeArticleFlag', false)
          // 加载出需要展示出来的文章article
          var id = this.$route.params.id
          this.$http.get('/article/loadArticle?articleId=' + id).then(function (response) {
              var resData = JSON.parse(response.body)
              if (resData.status) {
                  this.article = resData.article
                  this.articleLength = this.article.content.length
              }
          })
      }
  }
</script>

<style>
  .article-container {
    margin: 0 auto;
    width: 700px;
  }
  .related-avatar-group {
    display: none;
  }
  .article-container .article {
    padding: 80px 40px 30px 40px;
  }
  .article-container .author-info {
    padding-bottom: 15px;
    margin-bottom: 30px;
    border-bottom: 1px solid #eeeeee;
    overflow: hidden;
    font-size: 12px;
    color: #999999;
  }
  .article-container .author-info .follow, .article-container .author-info .following {
    float: right;
    margin-top: 10px;
  }
  .btn-success.follow{
    border-radius: 50px;
  }
  .btn-success.follow a {
    color: white;
  }
  .btn.follow .fa+span, .btn.following .fa+span {
    padding-left: 7px;
    margin-left: 3px;
    border-left: 1px solid #d9d9d9;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    color: #3f3f3f;
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFE6E6E6', GradientType=0);
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    border: 1px solid #cccccc;
    border-bottom-color: #b3b3b3;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
  }
  .btn-success {
    color: white;
    border-color: #49be38;
    background: #49be38;
  }
  .article-container .author-info .avatar {
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .avatar {
    border-radius: 50%;
  }
  .avatar img {
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 50%;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
    width: auto\9;
    height: auto;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  .article-container .author-info .label {
    background: none;
    border: 1px solid #e78170;
    color: #e78170;
    text-shadow: none;
    font-size: 11px;
    font-weight: normal;
    line-height: 1;
  }
  .label {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .label, .badge {
    display: inline-block;
    padding: 2px 4px;
    font-size: 11.844px;
    font-weight: bold;
    line-height: 14px;
    color: white;
    vertical-align: baseline;
    white-space: nowrap;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    background-color: #999999;
  }
  .article-container .author-info .author-name {
    margin: 0 5px;
  }
  .blue-link {
    color: #4094c7;
  }
  .blue-link:hover {
    color: #075b8d;
  }
  a:hover, a:focus {
    text-decoration: none;
  }
  a:hover, a:active {
    outline: 0;
  }
  .article-container .author-info>div {
    margin-top: 3px;
  }
  .article .preview .title {
    word-break: break-all;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.5;
  }
  .article-container .meta-top {
    margin: 20px 0;
  }
  .article-container .meta-top span {
    position: relative;
    top: 1px;
    margin-right: 10px;
    font-size: 12px;
    color: #999999;
  }
  .article-container .article .show-content p{
    text-align: justify;
    word-break: break-word;
  }
  .article-container .article .show-content p{
    margin: 0 0 25px 0;
    font-family: Helvetica, Arial, "Hiragino Sans GB", sans-serif;
  }
  .article-container .article .show-content blockquote,
  .preview-mode .preview blockquote,
  .kalamu-area blockquote,
  .kalamu-area:focus blockquote,
  .history-view .view-area blockquote,
  .collection-top .description blockquote {
    padding: 10px 15px;
    margin-bottom: 20px;
    background-color: #e2e2e2;
    border-left: 4px solid #999999;
    word-break: break-word;
    font-size: 15px;
    font-weight: normal;
    line-height: 30px;
  }
  blockquote {
    padding: 0 0 0 15px;
    margin: 0 0 20px;
    border-left: 5px solid #eeeeee;
  }
  @media screen and (max-width: 768px){
    .article-container {
      width: 100%;
    }
  }
</style>

