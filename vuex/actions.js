/**
 * Created by zhouxiong on 16/12/5.
 */

export const displayArticles = ({commit}, payload) => {
    commit('DISPLAY_ARTICLES', payload)
}

export const displayTopic = ({commit}, type) => {
    commit('DISPLAY_TOPIC', type)
}

export const sortContent = ({commit}, type) => {
    commit('SORT_CONTENT', type)
}

export const changeLoginway = ({commit}, loginway) => {
    commit('CHANGE_LOGINWAY', loginway)
}

export const changeArticleFlag = ({commit}, flag) => {
    commit('CHANGE_ARTICLEFLAG', flag)
}

export const changeIsLogin = ({commit}, value) => {
    commit('CHANGE_ISLOGIN', value)
}
