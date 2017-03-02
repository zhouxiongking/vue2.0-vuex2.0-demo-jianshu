/**
 * Created by zhouxiong on 16/12/16.
 */
export default {
    DISPLAY_ARTICLES (state, payload) {
        state.show = payload.type
        state.articles = payload.articleList
    },
    DISPLAY_TOPIC (state, type) {
        state.show = type
        state.topicArticles = state[type + 'TopicArticles']
    },
    SORT_CONTENT (state, type) {

    },
    CHANGE_LOGINWAY (state, loginway) {
        state.loginway = loginway
    },
    CHANGE_ARTICLEFLAG (state, flag) {
        state.articleFlag = flag
    },
    CHANGE_ISLOGIN (state, value) {
        state.islogin = value
    }
}
