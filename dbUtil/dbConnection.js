/**
 * Created by zhouxiong on 16/12/19.
 */

var mysql = require('mysql')

var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'XXX',
    database: 'jianshu'
}

var connection = mysql.createConnection(options)

module.exports = connection
