# vue2.0-demo-jianshu

> 用Vue2.0全家桶搭建的简书网站,这是一个前后端连通的整体网站,包括了数据库配置。前端采用Vue2.0,服务端采用Express框架

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## tips

- 数据库配置

如果需要在本地跑通整个程序的话,需要在本地进行数据库的配置,配置信息写在dbUtil/dbConnection.js文件中,sql语句参照jianshu.sql文件

- Vue2.0

 - Vue-Resource

 发送http请求

 - Vuex

 数据存储

- 服务端框架

使用Express,搭建server,使用NodeJS编写服务端代码

- 写文章

集成了富文本编辑器,方便写出精美文章



