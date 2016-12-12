<template>
  <div class="download_container">
    <div class="download_content">
      <div class="page-left">
        <div class="logo"></div>
        <div class="download_btn">
          <ul class="download">
            <li><a href="#"><i class="fa fa-android"></i>Android版</a></li>
            <li><a href="#"><i class="fa fa-mobile"></i>iPhone版</a></li>
          </ul>
          <div class="download_img1"></div>
        </div>
        <ul class="share_list">
          <li>关注我们</li>
          <li><i class="fa fa-qq"></i></li>
          <li><i class="fa fa-weibo"></i></li>
          <li><i class="fa fa-wechat"></i></li>
        </ul>
      </div>
      <div class="app-img"></div>
    </div>
  </div>
</template>
<style>
  .download_container{
    width: 90%;
    height: 100%;
  }
  .download_content{
    width: 100%;
    margin: 0 auto;
    height: 568px;
    padding: 100px 0 100px 0;
    text-align: center;
  }
  .page-left{
    padding-top: 50px;
    margin-right: 75px;
    text-align: center;
    display: inline-block;
    width: 347px;
    height: 457px;
  }
  .logo{
    background:url('../../static/images/jianshu_logo.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 252px;
    height: 123px;
    padding-bottom: 50px;
    border-bottom: 1px solid #e6e6e6;
    margin: 0 auto 60px auto;
  }
  .download_btn {
    margin-bottom: 15px;
  }
  .download_btn ul{
    width: 180px;
    display: inline-block;
  }
  .download_btn li{
    margin-bottom: 20px;
  }
  .download_img1{
    background:url('../../static/images/download_img1.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 135px;
    height: 135px;
    border: 1px solid #efefef;
    float: right;
    margin-left: 20px;
  }
  .download_img1:after{
    clear: both;
    content: '';
    visibility: hidden;
    height: 0;
  }
  .download_btn a{
    border-radius: 5px;
    text-align: center;
    line-height: 58px;
    display: inline-block;
    background-color: #8EF2A4;
    color: #ffffff;
    width: 180px;
    height: 58px;
    font-size: 20px;
  }
  .download_btn i{
    padding-right: 5px;
  }
  .download_btn .fa-android{
    font-size: 36px;
  }
  .download_btn .fa-mobile{
    font-size: 47px;
  }
  .app-img{
    float: right;
    background:url('../../static/images/download_img2.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width:450px;
    height: 568px;
  }
  .app-img:after{
    clear: both;
    content: '';
    visibility: hidden;
    height: 0;
  }
  .share_list{
    width: 347px;
    height: 22px;
    text-align: center;
  }
  .share_list li{
    display: inline-block;
    margin: 0 5px;
    color: #555555;
  }
  @media screen and (max-width: 940px){
    .app-img{
      display: none;
    }
  }
</style>
