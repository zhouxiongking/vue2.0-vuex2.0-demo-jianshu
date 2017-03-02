/**
 * 格式化文章内容,按照简单的markdown格式解析
 */
var contentUtil = {}
contentUtil.format = function (content) {
    var contents = content.split('\n')
    contents = contents.map(function (value) {
        if (value && value.length) {
            // 处理标题
            var title = value.match(/#*/)
            if (title && title.length && title[0]) {
                var titleLevel = title[0].length
                value = value.replace(title, '<h' + titleLevel + '>')
                value += '</h' + titleLevel + '>'
            } else {
                // 处理段落
                // 1 粗斜体
                var biReg = new RegExp('\\*\\*\\*', 'g')
                var bimatches = value.match(biReg)
                if (bimatches) {
                    value = value.replace(bimatches[0], '<p><b><i>')
                    value = value.replace(bimatches[1], '</i></b></p>')
                }
                // 2 粗体
                var bReg = new RegExp('\\*\\*', 'g')
                var bmatches = value.match(bReg)
                if (bmatches) {
                    value = value.replace(bmatches[0], '<p><b>')
                    value = value.replace(bmatches[1], '</b></p>')
                }
                // 3 斜体
                var iReg = new RegExp('\\*', 'g')
                var imatches = value.match(iReg)
                if (imatches) {
                    value = value.replace(imatches[0], '<p><i>')
                    value = value.replace(imatches[1], '</i></p>')
                }

                // 处理图片
                if (value.includes('![') && value.includes('](') && value.endsWith(')')) {
                    var tempSrc = value.split('(')[1]
                    var src = tempSrc.substring(0, tempSrc.length - 1)
                    value = '<img src="' + src + '"/>'
                }

                // 处理链接
                if (value.includes('](')) {
                    var aStart = value.indexOf('[')
                    var aEnd = value.indexOf(']')
                    var hrefStart = value.indexOf('(')
                    var hrefEnd = value.indexOf(')')

                    var link = value.substring(aStart + 1, aEnd)
                    var href = value.substring(hrefStart + 1, hrefEnd)

                    value = '<a href="' + href + '">' + link + '</a>'
                }

                // 处理引用
                if (value.startsWith('>')) {
                    value = value.replace('>', '<blockquote>')
                    value += '</blockquote>'
                }

                // 处理内容
                if (value.match(/^[\u4e00-\u9fa5]/) || value.match(/^[\u201C\u3002\uFF1F\uFF01\uFF0C\u3001\uFF1B\uFF1A\u2018\u2019\u201C\u201D\uFF08\uFF09\u3010\u3011\u300A\u300B\u3008\u3009]/)) {
                    value = '<p>' + value + '</p>'
                }
            }
        }
        return value
    })
    // 处理contents,去掉空格内容
    var result = contents.filter(function (value) {
        return value !== ''
    })
    return result.join('')
}

module.exports = contentUtil
