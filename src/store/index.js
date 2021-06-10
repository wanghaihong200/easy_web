import Vue from 'vue'
import Vuex from 'vuex'
import module from '@/store/modules/module'
import app from '@/store/modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  // 在非开发环境开启严格模式
  strict: process.env.NODE_ENV !== 'production',
  // 状态值
  state: {
    age: '25',
    token: null,
    user: null,
    routerName: null
  },
  // 状态派生
  getters: {
    getAge: (state) => (value) => {
      return parseInt(state.age) + value
    }
  },
  // 修改状态
  mutations: {
    setUser(state, value) {
      state.user = value
    },
    setToken (state, value){
      state.token = value
    },
    setRouterName(state, value) {
      state.routerName = value
    }
  },
  // 异步触发 mutations
  actions: {
    setName ({ commit }) {
      setTimeout(() => {
        commit('setName', 'Mr.Hai')
      }, 1000)
    }
  },
  // 模块
  modules: {
    module,
    app
  }
})
