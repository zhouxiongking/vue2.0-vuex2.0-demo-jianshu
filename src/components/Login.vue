<template>
  <div class="wrapper-login">
    <div class="register_result">
      <p class="h-30"></p>
      <transition name="fade">
        <div>
          <p v-show="!show_result" class="h-40"></p>
          <p v-show="show_result" class="active-result">{{result}}</p>
        </div>
      </transition>
    </div>
    <div class="login-container">
      <div class="login-logo"></div>
      <div class="login-header">
        <a  :class="{active: loginway == 'login'}"
            @click="changeLogin('login')">&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;·</a>
        <a  :class="{active: loginway == 'register'}"
            @click="changeLogin('register')">&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
      <div class="login-input" v-if="loginway === 'login'">
        <form name="formLogin" class="login-form" accept-charset="UTF-8" method="post">
          <div class="username">
            <span class="span1"><i class="fa fa-user"></i></span>
            <input type="text" name="login_name" placeholder="邮件/电话号码" v-model="login.email" class="span2">
          </div>
          <div class="password">
            <span class="span1"><i class="fa fa-unlock-alt"></i></span>
            <input type="password" name="login_password" placeholder="密码" v-model="login.password" class="span2">
          </div>
          <button class="login-btn btn" type="button" @click='doLogin'><span>登录</span></button>
          <div class="login-control">
					<span class="f-l checkbox" :class="{checked: checked === true}"
                @click="checked = !checked">
						<input type="checkbox" class="remember" checked="checked">
						<ins class="check"></ins>
					</span>
            <span class="f-l">记住我</span>
            <span class="f-r"><a href="#" class="forget-color">忘记密码</a></span>
          </div>
        </form>
      </div>
      <div class="login-input" v-if="loginway === 'register'">
        <form name="formRegister" class="form_register" accept-charset="UTF-8" method="post">
          <div class="email">
            <span class="span1"><i class="fa fa-envelope-o"></i></span>
            <input type="email" name="email" v-model="user.email" id="email" class="span2"
                   placeholder="邮件/电话号码">
          </div>
          <div class="username">
            <span class="span1"><i class="fa fa-user"></i></span>
            <input type="text" name="nickname" v-model="user.nickname"
                   placeholder="昵称" class="span2">
          </div>
          <div class="password">
            <span class="span1"><i class="fa fa-unlock-alt"></i></span>
            <input type="password" name="password" v-model="user.password" required
                   placeholder="密码" class="span2">
          </div>
          <div></div>
          <button class="register-btn btn" type="button" @click="doRegist()"><span>注册</span></button>
          <p class="register_text">点击 “注册” 或下方社交登录按钮，即表示您同意并愿意遵守简书 <a href="#">用户协议</a> 和 <a href="#">隐私政策</a> 。</p>
        </form>
      </div>
      <div class="login-way">
        <h5>您还可以通过以下方式登录</h5>
        <ul>
          <li class="qqicon"><i class="fa fa-qq"></i></li>
          <li class="weiboicon"><i class="fa fa-weibo"></i></li>
          <li class="wechaticon"><i class="fa fa-wechat"></i></li>
          <li class="googleicon"><i class="fa fa-google-plus"></i></li>
          <li class="githubicon"><i class="fa fa-github"></i></li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                checked: true,
                user: {},
                result: '',
                show_result: false,
                login: {}
            }
        },
        computed: mapGetters({
            loginway: 'getLoginway'
        }),
        methods: {
            // 切换注册或者登陆状态
            changeLogin (loginway) {
                this.$store.dispatch('changeLoginway', loginway)
            },
            // 注册
            doRegist () {
                this.$http.post('/user/register', this.user).then(function (response) {
                    this.dealResponse(response)
                })
            },
            // 登陆
            doLogin () {
                var url = '/user/login?email=' + this.login.email + '&password=' + this.login.password
                this.$http.get(url).then(function (response) {
                    this.dealResponse(response)
                })
            },
            // 处理响应
            dealResponse (response) {
                var self = this
                self.show_result = true
                var resData = JSON.parse(response.body)
                this.result = resData.message
                if (resData.status) {
                    setTimeout(function () {
                        self.show_result = false
                        // 注册成功后,直接自动登录到主页
                        self.$router.push('/home/article/hot')
                        self.$store.dispatch('changeIsLogin', true)
                    }, 1000)
                } else {
                    setTimeout(function () {
                        self.show_result = false
                    }, 1000)
                }
            }
        },
        mounted () {
            this.$store.dispatch('changeArticleFlag', true)
        }
    }
</script>
<style>
  .login-form{
    width: 300px;
    height: 245px;
    margin: 0 auto;
    border-bottom: 1px solid rgba(113,113,113,0.17);
  }
  .h-30{
    height: 30px;
  }
  .h-40{
    height: 40px;
  }
  .active-result{
    height: 40px;
    line-height: 40px;
    background-color: #e78170;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    -webkit-transition: background-color 1s ease-in;
    transition: background-color 1s ease-in;
  }
  .register_result{
    margin: 0 auto;
    width: 275px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .form_register{
    height: 300px;
  }
  .login-container{
    padding: 50px 0 50px;
    text-align: center;
  }
  .login-logo{
    width: 252px;
    height: 123px;
    margin: 0 auto;
    background: url('../../static/images/jianshu_logo.jpg') no-repeat;
    background-size:100%;
  }
  .login-header{
    font-size: 17.5px;
    margin: 70px 0 40px 0;
  }
  .login-header:before{
    position: relative;
    display: inline-block;
    top: -6px;
    content: '';
    height: 1px;
    width: calc(50% - 200px);
    background-color: rgba(113,113,113,0.17);
  }
  .login-header:after{
    position: relative;
    top: -6px;
    display: inline-block;
    content: '';
    height: 1px;
    width: calc(50% - 200px);
    background-color: rgba(113,113,113,0.17);
  }
  .login-header a{
    color: #b1b1b1;
  }
  .span1{
    display: inline-block;
    width: 34px;
    height: 34px;
    font-size: 12px;
    font-weight: normal;
    padding: 4px 5px;
    margin: 1px;
    border:1px solid #ccc;
    border-radius: 4px 0 0 4px;
    line-height: 34px;
  }
  .span2{
    width: 246px;
    height: 44px;
    position: relative;
    right: 6px;
    padding: 4px 12px;
    border:1px solid #ccc;
    border-radius: 0 4px 4px 0;
    transition: border linear 0.2s;
    box-sizing: border-box;
  }
  .span2:focus{
    outline: none;
  }
  .username, .password{
    width: 300px;
    height: 44px;
    margin: 0 auto;
  }
  .username{
    margin-bottom: 15px;
  }
  .login-input .btn{
    margin: 30px auto 15px auto;
    width: 300px;
    height: 50px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }
  .login-btn{
    background-color: #049cdb;
  }
  .register-btn{
    background-color: #90DF66;
  }
  .login-input .btn span{
    font-size: 18px;
    color: #ffffff;
  }
  .checkbox{
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin: 0;
    padding: 0;
    width: 18px;
    height: 18px;
    background: url('../../static/images/checkbox.jpg') no-repeat;
    background-position: -40px 0;
    border: none;
    cursor: pointer;
  }
  .remember {
    position: absolute;
    opacity: 0;
  }
  .forget-color{
    color: #555555;
  }
  .login-control{
    color:#555555;
    font-size:12px;
  }

  .login-control .checked{
    background-position: -20px 0;
  }
  .check{
    position: absolute;
    top: 0%;
    left: 0%;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    border: 0px;
    opacity: 0;
    background: rgb(255, 255, 255);
  }
  .login-way h5{
    margin:20px 0;
    font-weight: normal;
    color: #b1b1b1;
  }
  .login-way li{
    display: inline-block;
    margin: 0 5px;
    width: 40px;
    height: 40px;
    text-align: center;
    background-color: #b1b1b1;
    border-radius: 50%;
  }
  .login-way .wechaticon:hover{
    background-color:#49be38;
  }
  .login-way .qqicon:hover{
    background-color:#50BCF2;
  }
  .login-way .googleicon:hover{
    background-color:#F7566A;
  }
  .login-way .weiboicon:hover{
    background-color:#F6774F;
  }
  .login-way .githubicon:hover{
    background-color:#494D4F;
  }
  .login-way li:hover i{
    color: #ffffff;
  }
  .login-way i{
    line-height: 40px;
    font-size: 25px;
  }
  .login-header .active{
    color: #000000;
  }
  .email{
    margin-bottom: 15px;
  }
  .register_text{
    font-size: 12px;
    color: #9d9d9d;
  }
  .register_text a{
    color: #000000;
    font-weight: bold;
  }
  .f-l {
    float: left;
  }
  .f-r {
    float: right;
  }
  .is-danger-span {
    color: #ff0000;
  }
  .is-danger-input {
    border-color: #ff0000;
  }
</style>
