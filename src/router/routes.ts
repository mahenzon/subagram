import { RouteRecordRaw } from 'vue-router'

import MainLayout from 'layouts/MainLayout.vue'
import IndexPage from 'pages/IndexPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: IndexPage,
      },
      {
        path: '/create',
        name: 'create-word',
        component: () => import('pages/CreateWord.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('pages/AboutPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
