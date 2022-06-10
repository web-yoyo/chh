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
            path: '/home/music',
            name: 'music',
            component: () => import('@/views/Music/index.vue'),
          },
          {
            path: '/home/search',
            name: 'search',
            component: () => import('@/views/Search/index.vue'),
          },
          {
            path: '/home/list',
            name: 'list',
            component: () => import('@/views/List/index.vue'),
          },
          {
            path: '/home/about',
            name: 'About',
            component: () => import('@/views/Test/index.vue'),
          },
          { path: '', component: () => import('@/views/Music/index.vue') },
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
