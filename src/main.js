import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueCookies from 'vue-cookies'
import '@/assets/styles/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/home.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCookies)


// 设置本地缓存
Vue.prototype.setLocalValue = function (name, value) {
  if (window.localStorage) {
    localStorage.setItem(name, value);
  } else {
    alert('This browser does NOT support localStorage');
  }
};
// 获取本地缓存
Vue.prototype.getLocalValue = function (name) {
  const value = localStorage.getItem(name);
  if (value) {
    return value;
  } else {
    return '';
  }
};

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    if (this.getLocalValue("token") === null) {
      this.setLocalValue("token", "");
    }
    if (this.getLocalValue("user") === null) {
      this.setLocalValue("user", "");
    }
    if (this.getLocalValue("routerName") === null) {
      this.setLocalValue("routerName", "Login");
    }
    this.$store.commit("setToken", this.getLocalValue("token"));
    this.$store.commit("setUser", this.getLocalValue("user"));
    this.$store.commit("setRouterName", this.getLocalValue("routerName"));
  }
}).$mount('#app')

VueCookies.config('1d')



// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = router.push
router.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 全局前置守卫，拦截路由
router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面的 title
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // 如果页面需要安全认证 并且 已处于登录状态，则正常跳转，否则跳转到登录页面
  if (to.meta.requireAuth ) {
    if (store.state.token){
      next() // 继续执行跳转操作
    } else {
      next({
        name: 'Login'
      })
    }
  } else {
    next()
  }
})

// 全局后置钩子
router.afterEach((to, from) => {
  // console.log('关闭loading...')
})
