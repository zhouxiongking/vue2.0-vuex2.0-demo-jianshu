/**
 * Created by zhouxiong on 17/1/4.
 */

module.exports = function (response, respObj) {
    response.writeHead('Content-type', 'application/json')
    response.end(respObj)
}
