/**
 * Created by zhouxiong on 16/12/27.
 */

var pool = require('./dbConnection');

var articleDbUtil = {};

// 保存文章
articleDbUtil.saveArticle = function (article) {
    var promise = new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if(!err) {
                var sql = 'insert into article(user_id, title, content, publish_time) values(?, ?, ?, ?)';
                var params = [article.userId, article.title, article.content, article.publishTime];
                connection.query(sql, params, function (error, response) {
                    if(error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                })
            } else {
                console.log(err);
            }
        });
    });
    var newPromise = promise.then(function () {
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                var sql = 'select id from article where user_id = ? and title = ? and publish_time = ?';
                var params = [article.userId, article.title, article.publishTime];
                connection.query(sql, params, function (error, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                });
            });
        });
    }).catch(function(err) {
        console.log(err);
    });

    return newPromise;
};

// 根据id加载文章
articleDbUtil.loadArticle = function (id) {
    var promise = new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            var sql = 'select a.*, u.* from article as a, users as u where u.id = a.user_id and a.id = ?';
            var params = [id];
            connection.query(sql, params, function (error, response) {
                if (error) {
                   reject(error);
                } else {
                    resolve(response);
                }
            });
        });
    });
    return promise;
};

// 加载某类型的文章
articleDbUtil.loadArticleByType = function (type) {
    var promise = new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if(!err) {
                var sql = 'select a.*, u.nickname from article as a, users as u where a.user_id = u.id';
                var params = [];
                connection.query(sql, function (error, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                })
            } else {
                reject(err);
            }
        });
    });
    return promise;
};

module.exports = articleDbUtil;
