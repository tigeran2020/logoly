import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prefix: '点我',
    suffix: '编辑'
  },
  mutations: {
    updatePrefix(state, text) {
      state.prefix = text
    },
    updateSuffix(state, text) {
      state.suffix = text
    }
  },
  actions: {

  }
})
