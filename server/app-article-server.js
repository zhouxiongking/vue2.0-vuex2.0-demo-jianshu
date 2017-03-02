/**
 * 基于express,自定义的有关article的server,处理前端vue发送的请求
 * @param app
 */

var articleDbUtil = require('../dbUtil/articleDbUtil')
var dateUtil = require('../util/dateUtil')
var appResponse  = require('./app-response')

module.exports = function (app) {
    // 保存文章
    app.post('/article/saveArticle', function (req, res) {
        var article = req.body
        // 获取用户id
        article.userId = req.session.user.id
        // 获取当前时间
        article.publishTime = new Date().format('yyyy-MM-dd hh:mm:ss')
        articleDbUtil.saveArticle(article).then(function (response) {
            var resultObj = {
                status: 1,
                message: '保存成功',
                articleId: response[0].id
            }
            appResponse(res, JSON.stringify(resultObj))
        }, function () {
            var resultObj = {
                status: 0,
                message: '保存失败'
            }
            appResponse(res, JSON.stringify(resultObj))
        })
    })

    // 加载一篇指定的文章
    app.get('/article/loadArticle', function (req, res) {
        var id = req.query.articleId
        articleDbUtil.loadArticle(id).then(function (response) {
            var resultObj = {
                status: 1,
                message: '加载成功',
                article: response[0]
            }
            appResponse(res, JSON.stringify(resultObj))
        }, function () {
            var resultObj = {
                status: 0,
                message: '加载失败'
            }
            appResponse(res, JSON.stringify(resultObj))
        })
    })

    // 加载文章列表
    app.get('/article/list', function (req, res) {
        var type = req.query.type
        articleDbUtil.loadArticleByType(type).then(function (response) {
            if(response.length) {
                var resultObj = {
                    status: 1,
                    message: '加载成功',
                    articleList: response
                }
                appResponse(res, JSON.stringify(resultObj))
            }
        }, function () {
            var resultObj = {
                status: 0,
                message: '加载失败'
            }
            appResponse(resultObj)
        })
    })
}
