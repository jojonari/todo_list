import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/todoPage',
      name: 'todoPage',
      component: TodoPage
    }
  ]
});