<template>
    <div class="container">
        <div class="sidebar">
            <ul class="dropdown">
                <li :class="{active: show === 'home'}" @click="show = 'home'">
                    <router-link to="/home/article/hot">
                        <i class="fa fa-home"></i>
                        <span>首页</span>
                    </router-link>
                </li>
                <li :class="{active: show === 'topic'}" @click="show = 'topic'" >
                    <router-link to="/topic/topic_article/hot">
                        <i class="fa fa-th"></i>
                        <span>专题</span>
                    </router-link>
                </li>
                <li :class="{active: show === 'download'}" @click="show = 'download'" >
                    <router-link to="/download">
                        <i class="fa fa-mobile"></i>
                        <span>下载手机应用</span>
                    </router-link>
                </li>
                <li :class="{active: show === 'write'}" class="indent" @click="show = 'write'">
                    <router-link to="/write">
                        <i class="fa fa-pencil"></i>
                        <span>写文章</span>
                    </router-link>
                </li>
            </ul>
            <ul class="nav-user">
                <li>
                    <a href="#">
                        <i class="fa fa-font"></i>
                        <span>显示模式</span>
                    </a>
                </li>
                <li>
                    <router-link to="/login">
                        <i class="fa fa-sign-in"></i>
                        <span>登录</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="home">
            <transition name="display" node="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <div class="rightbar" v-if="articleFlag">
            <nav>
                <ul class="nav-ul">
                    <li @click="changeLoginway('login')">
                        <router-link to="/login">
                            <i class="fa fa-sign-in"></i>
                            登录
                        </router-link>
                    </li>
                    <li @click="changeLoginway('register')">
                        <router-link to="/login">
                            <i class="fa fa-user"></i>
                            注册
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
      data () {
          return {
              show: 'home'
          }
      },
      computed: mapGetters({
          articleFlag: 'getArticleFlag'
      }),
      methods: {
          changeLoginway (loginway) {
              this.$store.dispatch('changeLoginway', loginway)
          }
      }
  }
</script>

<style>
  .display-enter-active,
  .display-leave-active {
    transition: opacity 0.5s ease;
  }
  .display-enter, .display-leave-active {
    opacity: 0;
  }
  .container{
    height: 100%;
  }
  .dropdown .active{
    background-color: #e78170;
  }
  .dropdown .active a{
    color: #ffffff;
  }
  .dropdown .indent a{
    padding-left: 13px;
  }
  .nav-ul{
    display: flex;
  }
  .nav-ul li:first-child {
    margin-right: 5px;
  }
  .sidebar .fa {
    font-size: 20px;
  }
  .sidebar .fa-mobile {
    font-size: 30px;
  }
  @media screen and (max-width: 1300px){
    .home{
      margin-left: 40px;
    }
    .nav-user li{
      width: 40px;
      height: 30px;
      overflow: hidden;
    }
    .sidebar{
      transition: all 0.5s;
      width: 40px;
      overflow: hidden;
    }
    .sidebar li a{
      padding: 0 auto;
      margin:0 auto;
    }
    .sidebar i{
      font-size: 30px;
    }
    .sidebar .fa{
      margin-right: 15px;
      font-size: 20px;
    }
    .sidebar .fa-mobile{
      margin-left: 4px;
      margin-right: 15px;
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1100px){
    .home{
      margin-right: 0;
    }
  }
</style>
