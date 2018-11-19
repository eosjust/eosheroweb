import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(vuex);

export default new vuex.Store({
  plugins: [createPersistedState({
    paths: [
      'lang',
    ]
  })],
  state: {
    eosUserName: null,
    ismobile:false,
    lang:'zhCHS',
  },
  mutations: {
    setEosUserName(state, userName) {
      state.eosUserName = userName;
    },
    changeIsMobile(state,ismobile){
      state.ismobile=ismobile;
    },
    changeLang(state, lang) {
      state.lang = lang;
      if (lang == 'en') {
      } else if (lang == 'zhCHS') {
      }
    },
  }
})
