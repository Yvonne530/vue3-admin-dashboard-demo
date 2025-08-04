import { createRouter, createWebHistory } from 'vue-router'

// 引入页面组件
import MatchDashboard from '@/views/MatchDashboard.vue'

// 路由定义
const routes = [
  {
    path: '/',
    name: 'Home',
    component: MatchDashboard
  },
  // 如果后续有其他页面，可以在这里继续添加路由
  // {
  //   path: '/other',
  //   name: 'OtherPage',
  //   component: () => import('@/views/OtherPage.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
