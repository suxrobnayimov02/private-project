import { createRouter, createWebHistory } from 'vue-router'
import auth from './middleweres/auth'
import resumeRouter from '@/router/modules/resume'
import vacancyRouter from '@/router/modules/vacancy'
export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/main'),
    meta: { middleware: [auth] },
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('@/views/home/index')
      },
      {
        name: 'Register',
        path: '/register',
        component: () => import('@/views/register')
      },
      {
        name: 'Auth',
        path: '/auth',
        component: () => import('@/views/auth/auth-token')
      },
      ...resumeRouter,
      ...vacancyRouter
    ]
  },
  {
    path: '/tree',
    component: () => import('@/views/tree'),
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/403',
    component: () => import('@/views/403'),
    hidden: true
  },
  {
    // path: "*",
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/404'),
    meta: {
      requiresAuth: false
    }
  }
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
