import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

// 路由规则
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: App,
    children: [
      { path: '', redirect: '/home' },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        children: [
          {
            path: '/home/list',
            name: 'list',
            // component: () => import('@/views/List/index.vue'),
            component: () => import('@/views/Look/index.vue'),
          },
          {
            path: '/home/search',
            name: 'search',
            component: () => import('@/views/Search/index.vue'),
          },
          {
            path: '/home/look',
            name: 'look',
            // component: () => import('@/views/Look/index.vue'),
            component: () => import('@/views/List/index.vue'),
          },
          {
            path: '/home/about',
            name: 'about',
            component: () => import('@/views/About/index.vue'),
          },
          { path: '', component: () => import('@/views/Look/index.vue') },
        ],
      },
    ],
  },
]

const router = createRouter({
  // vueRouter@3版本的mode改成了history，hash模式配置createWebHashHistory，history模式配置createWebHistory
  history: createWebHashHistory(),
  routes,
})

export default router
