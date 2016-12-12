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
            <span>东辉在线</span>
          </a>
          <span data-toggle="tooltip" data-original-title="最后编辑于 2016.12.07 16:29">2016.12.05 22:16</span>
          <div>
            <span>写了25144字</span>，<span>被91人关注</span>，<span>获得了293个喜欢</span>
          </div>
        </div>
        <h1 class="title">如何成为一个黑客？</h1>
        <div class="meta-top">
          <span class="wordage">字数1878</span>
          <span class="views-count">阅读1378</span>
          <span class="comments-count">评论20</span>
          <span class="likes-count">喜欢49</span>
        </div>

        <!-- Collection/Bookmark/Share for width under 768px -->
        <div class="article-share"></div>
        <!-- -->

        <div class="show-content">
            <p><b>很多人要成为高大上的黑客需要学习哪些基本功？</b></p>
            <p><b>能盗取账号，能攻击服务器？</b></p>
            <p><b>再牛的黑客起码是一个合格的程序员</b></p>
            <p>所以说想成为黑客先成为合格的程序再说，说别的就是空谈了。大家对黑客的印象就是酷酷的，能轻松破解密码，攻击服务器。本文尝试分析下一个合格的黑客需要具备哪些基本功。</p>
            <p><b>汇编知识</b></p>
            <p>这个主要用在破解软件和攻击服务器使用，特别是在破解软件的时候用的比较多，稍微懂点计算机知识的小伙伴应该知道，在电脑上运行的程序都会生成机器语言，所以想破解直接面对的就是一堆二进制文件，也就是只有机器能看懂的语言。在目前的语言体系中，最接近机器语言非汇编莫属了，曾经见过一个做安全的高手，经常喜欢做的事情就是研究一堆密密麻麻的二进制数据，杀毒嘛就是对抗黑客制造的病毒软件，其实大家常见的杀毒软件经常做的事情就是利用汇编找到匹配的可能的病毒给上报出来，提示给用户。当然，做安全破译这些病毒软件不仅仅是靠汇编，还要一些常见的行为，配置文件等习惯行为，最直接的就是上报服务器询问这个软件是不是存在问题，或者上传给服务器让服务器帮你破译。做安全软件其实和做病毒软件是一种技术原理，做事情的性质相反而已。所以无论从哪个方面入手汇编都是黑客必备语言，在这多说两句，黑客利用软件的漏洞其实和编程习惯有关，注入病毒其实找你的软件里面暴露出来的全局函数或者变量，利用获取到的操作地址直接进行调用干一些软件本身不想做的事情。任何软件都存在缺陷和漏洞，这涉及到写代码规范性的问题，代码越是随意越是容易被黑客攻击。</p>
            <p><b>网络基础</b></p>
            <p>说到网络就不得不说TCP/IP 四层的网络结构，目前所有的网络相关的软件或者服务都离不开这个网络基础。上网浏览网页包括常见的路由器交换机等等，都是基于此。包括平均年终奖将近上百万中国骄傲华为赖以起家的路由器也是基于这七层结构。黑客攻击服务器也是离不开这个理论基础。说道这笔者曾经在一个网络安全的公司呆过半月，做的一款产品就是局域网内监控QQ，MSN等上网聊天的工具，就是检测到有人上QQ直接发个QQ密码错误的假消息给局域网要上QQ的人，也不用限制你去安装QQ，所以即使安装上了，登录多少回就给发多少密码错误的假数据，完全靠网络抓包分析数据来完成，当初也是感觉高大上，后来想想就是简单的字符串处理。而且通过这个机制就可以盗取QQ号，很多在网吧上网QQ被盗就是基于这个原理。想学这个有两本经典的书TCP/IP 详解，卷一，卷二。</p>
            <p>大家常听到的发送http请求，就是网络应用层一种协议，常见的ftp等等都是应用层的协议。黑客攻击可以选择在不同的层面进行干扰攻击。一个电脑想不被攻击除非不上网，你无法获取信息，别人也无法攻击到你。理论上只要电脑上网就有无限被攻击的可能性。</p>
            <p><b>基本编程语言</b></p>
            <p>常见的编程语言很多，黑客最常用的C语言，C++这两种比较靠近底层的语言，一个黑客起码是一个合格的程序员。一般来说市面上比较流行的操作系统windows和linux，windows上面的病毒和被攻击的最厉害。所以想在这个上面玩一些破解必须掌握windows api这些接口的使用，找破解的对象首先要了解破解对象所在生存环境。这些生存环境基本上不是c就是c++的编程环境。现在常见的病毒软件就是利用windows系统的漏洞注入到系统中，然后伺机做坏事。截取你的键盘或者鼠标之类的。目前这类的病毒软件也是最多的，安全软件处理最多的也是着这类。要不360安全大师背后养着多少黑客出身的超级高手，就是为了对抗这些不安分的小喽啰。目前基于linux系统的服务器用的最多，被攻击的也最多，这就需要熟悉linux系统的组成以及内核构造，linux内核是c语言所写。但凡涉及到系统层面的东西都离不开c和c++所以想做点坏事也是需要一定的编程资本。</p>
            <p>攻击服务器这事主要在游戏领域用的比较多，常见攻击服务器进去修改数据参数属性之类的，让自己的装备更加牛逼，每年的QQ游戏服务器都是被攻击N次就是想尝试着攻击进去，修改点参数牟利。记得有个年长点的同事，经常在夜深人静的时候去喜欢自己玩的游戏的服务器，进去逛一圈，偶然修改点数值，满足下虚荣心。主要是听说而已，真假还不能辨别。这哥们倒是对底层以及网络研究很深。</p>
            <p><b>其他方面</b></p>
            <p>现在很多的人还在网页层面做文章，就是在web里面注入一些js语言执行自己干坏事的脚本，这个需要对浏览器的内核以及网页语言有着很深刻的认知。在安卓浏览器最初还是存在相当大的漏洞，笔者也曾经为此修改过浏览器内核代码规避一些非常规的脚本注入，黑客攻击的范围以及方法层出不穷，所以做黑客首先是一种极客，对黑客有着极大的信仰相信自己能捣腾出来东西，并且孜孜不倦的去破解，不停歇。这点何尝不是程序员在兢兢业业的修改bug为了完成一个项目的缩影。</p>
            <p><b>所以想成为黑客，先成为程序员一名程序员，而且还要长得黑。</b></p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
      mounted () {
          this.$store.dispatch('changeArticleFlag', false)
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
    padding: 80px 40px 10px;
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
    word-break: initial;
    word-break: break-word;
  }
  .article-container .article .show-content p{
    margin: 0 0 25px 0;
    font-family: Helvetica, Arial, "Hiragino Sans GB", sans-serif;
  }
  @media screen and (max-width: 768px){
    .article-container {
      width: 100%;
    }
  }
</style>

