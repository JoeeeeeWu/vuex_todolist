import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import todolist from '@/components/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/todolist',
      component: todolist
    }
  ]
})
