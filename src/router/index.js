import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ajax from '@/views/Ajax'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    components: {
      default: Login
    },
    meta: {
      title: '登录'
    },
    alias: '/login'
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '用户注册'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      requireAuth : true
    },
    children: [
      {
        path: 'ajax',
        name: 'Ajax',
        component: Ajax,
        meta: {
          title: '测试后端api',
          requireAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
