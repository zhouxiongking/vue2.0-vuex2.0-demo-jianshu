/**
 * Created by zhouxiong on 16/12/19.
 */

var connection = require('./dbConnection')

var userDbUtil = {};

// 保存用户
userDbUtil.saveUser = function (user) {
    var promise = new Promise(function (resolve, reject) {
        var sql = 'insert into users(email, nickname, password) values(?, ?, ?)'
        var params = [user.email, user.nickname, user.password]

        connection.connect(function(){
            connection.query(sql, params, function (error, response) {
                if(error){
                    reject(error)
                } else {
                    resolve(response)
                }
            })
        })
    })
    return promise
}

// 登录时查找用户
userDbUtil.getUserByLogin = function (email, password) {
    var promise = new Promise(function (resolve, reject) {
        var sql, params;
        sql = 'select * from users where email = ? and password = ?'
        params = [email, password]

        connection.connect(function () {
            connection.query(sql, params, function (error, response) {
                if (error) {
                    reject(error)
                } else {
                    resolve(response)
                }
            })
        })
    })
    return promise
}

// 注册时,查找用户
userDbUtil.getUserByRegister = function (email, nickname) {
    var promise = new Promise(function (resolve, reject) {
        var sql = 'select * from users where email = ? or nickname = ?'
        var params = [email, nickname]
        connection.connect(function () {
            connection.query(sql, params, function (error, response) {
                if(error) {
                    reject(error)
                } else {
                    resolve(response)
                }
            })
        })
    })
    return promise
}

module.exports = userDbUtil
