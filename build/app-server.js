/**
 * Created by zhouxiong on 16/12/9.
 */

/**
 * 基于express,自定义的server,处理前端vue发送的请求
 * @param app
 */
module.exports = function (app) {

    app.get('/home/article/:type', function (req, res) {
        console.log('deal this request')
        console.log(req.params.type)
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end('hello world')
    })

    app.get('/', function (req, res) {
        console.log('all request invoke')
    })

    app.get('*', function (req, res) {
        console.log(req.url)
        console.log('req invioke1')
    })

}
