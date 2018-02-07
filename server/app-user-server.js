/**
 * 基于express,自定义的有关user的server,处理前端vue发送的请求
 * @param app
 */

var userDbUtil = require('../dbUtil/userDbUtil');
var appResponse = require('./app-response');

module.exports = function (app) {

    // 用户注册
    app.post('/user/register', function (req, res) {
        var user = req.body;
        userDbUtil.getUserByRegister(user.email, user.nickname).then(function (response) {
            if(response[0]) {
                var respResult = {
                    status: 0,
                    message: '邮箱/电话/昵称已注册,请重新注册!',
                    code: 500
                };
                appResponse(res, respResult);
            } else {
                userDbUtil.saveUser(user).then(function () {
                    var respResult = {
                        status: 1,
                        message: '恭喜你,注册成功!',
                        code: 200
                    };
                    appResponse(res, respResult);
                });
            }
        }).catch(function() {
            var respResult = {
                status: 0,
                message: '注册失败!',
                code: 500
            };
            appResponse(res, respResult);
        });
    });

    // 用户是否登录
    app.get('/user/isLogin', function (req, res) {
        var resultText;
        if(req.session.isLogin){
            resultText = '已登录';
        } else {
            resultText = '未登录';
        }
        res.writeHead(200, {'Content-type': 'text/plain;charset=utf-8'});
        res.write(resultText);
        res.end();
    });

    // 登陆
    app.get('/user/login', function (req, res) {
        var email = req.query.email;
        var password = req.query.password;
        userDbUtil.getUserByLogin(email, password).then(function (response) {
            var respResult;
            if(response.length) {
                // 登录信息写入session
                req.session.isLogin = true;
                req.session.user = response[0];
                respResult = {
                    status: 1,
                    message: '登录成功!',
                    code: 200
                };
            } else {
                respResult = {
                    status: 0,
                    message: '用户名或密码错误,登录失败!',
                    code: 500
                };
            }
            appResponse(res, respResult);
        }).catch(function() {
            var respResult = {
                status: 0,
                message: '用户名或密码错误,登录失败!',
                code: 500
            };
            appResponse(res, respResult);
        });
    });
};
