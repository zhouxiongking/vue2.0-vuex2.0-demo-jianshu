<template>
  <div class="outer-container">
    <div class="publish_result">
      <transition name="fade">
        <p v-show="show_result" class="publish-active active-result">{{resMsg}}</p>
      </transition>
    </div>
    <div class="note-editor">
      <div class="wrapper-head">
        <div class="note-head">
          <input type="text" class="top-title" data-type="title" v-model="note.title">
        </div>
      </div>
      <div class="wrapper-body">

        <quill-editor ref="myTextEditor"
                      v-model="note.content"
                      :config="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)"></quill-editor>
      </div>
      <div class="wrapper-footer">
        <div class="footer-div">
          <button class="btn" @click="saveArticle">保存</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        data () {
            return {
                note: {
                    title: '无标题文档'
                },
                show_result: false,
                editorOption: {},
                resMsg: ''
            }
        },
        mounted () {
            this.$store.dispatch('changeArticleFlag', false)
            // 发送请求,判断是否已经登录
            this.$http.get('/user/isLogin').then(function (response) {
                console.log(response.body)
                if (response.body === '已登录') {
                    this.$store.dispatch('changeIsLogin', true)
                } else {
                    this.$store.dispatch('changeIsLogin', false)
                    this.$router.push('/login')
                }
            })
        },
        methods: {
            // 保存文章
            saveArticle () {
                this.$http.post('/article/saveArticle', this.note).then(function (response) {
                    var resData = JSON.parse(response.body)
                    if (resData.status) {
                        var _self = this
                        _self.resMsg = '恭喜你!发表成功'
                        _self.show_result = true
                        setTimeout(function () {
                            _self.$router.push('/article/' + resData.articleId)
                        }, 1000)
                    } else {
                        this.show_result = true
                        this.resMsg = '发表失败'
                    }
                })
            },
            // editor 初始化
            onEditorReady (e) {},
            // editor获取焦点
            onEditorFocus (e) {},
            // editor失去焦点
            onEditorBlur (e) {}
        }
    }
</script>

<style>
  .outer-container {
    height: calc(100% - 4px);
    width:  100%;
    background-color: #fff;
  }
  .publish-active{
    position: absolute;
    width: 240px;
    top: 300px;
    z-index: 10;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .6);;

  }
  .publish_result{
    margin: 0 auto;
    width: 240px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .note-editor {
    margin: 0 auto;
    width: 80%;
    height: 93%;
  }

  .note-editor textarea {
    border: 0;
    border-radius: 0;
  }

  .wrapper-head {
    padding: 0 20px;
    display: -webkit-flex;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }

  .note-head {
    width: 100%;
  }

  input.top-title {
    padding: 24px 0;
  }

  .top-title {
    width: 100%;
    display: inline-block;
    background-color: transparent;
    border: 0 none;
    font-size: 18px;
    color: #393939;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
  }

  input, textarea {
    border: 1px solid #e0e1e5;
    border-radius: 2px;
    line-height: 22px;
    padding: 5px 10px;
  }

  input, textarea {
    webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
    -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
    -ms-transition: border linear 0.2s, box-shadow linear 0.2s;
    -o-transition: border linear 0.2s, box-shadow linear 0.2s;
    transition: border linear 0.2s, box-shadow linear 0.2s;
  }

  input, textarea {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
  }
  .wrapper-body {
    height: 77%;
    padding-bottom: 9%;
  }
  .wrapper-footer {
    margin: 0 auto;
  }
  .footer-div {
    margin: 0 auto;
    width: 100px;
  }
  .footer-div .btn{
    margin: 20px auto 15px auto;
    width: 100%;
    height: 30px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    background-color: #049cdb;
    color: #fff;
  }
</style>
