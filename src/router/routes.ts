import { RouteRecordRaw } from 'vue-router'

import MainLayout from 'layouts/MainLayout.vue'
import IndexPage from 'pages/IndexPage.vue'
import WordDetails from 'pages/WordDetails.vue'

import { useWordsStore } from 'stores/words'
import { wordsCrud } from 'src/crud'

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
      {
        path: '/words/:word',
        children: [
          {
            path: '',
            name: 'word-details',
            component: WordDetails,
            beforeEnter(to, from, next) {
              const wordsStore = useWordsStore()

              const word = to.params.word as string
              if (wordsStore.words[word]) {
                next()
              } else {
                wordsCrud.wordExists(word).then((exists) => {
                  if (exists) {
                    next()
                  } else {
                    next({ name: 'create-word', query: { word } })
                  }
                })
              }
            },
          },
        ],
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
