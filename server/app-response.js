/**
 * Created by zhouxiong on 17/1/4.
 */

module.exports = function (response, respObj) {
    response.writeHead(respObj.code, {'Content-type': 'application/json;charset=utf-8'});
    response.end(JSON.stringify(respObj));
};
