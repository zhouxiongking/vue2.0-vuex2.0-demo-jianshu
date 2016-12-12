/**
 * Created by zhouxiong on 16/12/5.
 */

export const displayArticles = ({commit}, type) => {
    commit('DISPLAY_ARTICLES', type)
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
