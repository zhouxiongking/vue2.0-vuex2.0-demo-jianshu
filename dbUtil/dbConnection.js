/**
 * Created by zhouxiong on 16/12/19.
 */

var mysql = require('mysql');

var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'XX',
    database: 'jianshu'
};

var pool = mysql.createPool(options);

module.exports = pool;
