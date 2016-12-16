/**
 * Created by zhouxiong on 16/12/16.
 */
export default {
    DISPLAY_ARTICLES (state, type) {
        state.show = type
        state.articles = state[type + 'Articles']
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
    }
}
