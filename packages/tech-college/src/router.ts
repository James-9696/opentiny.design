import { createRouter, createWebHistory } from 'vue-router'
// TODO: 待补充布局
// import Layout from '@/views/layout/layout.vue'
import { geneTitle } from './tech/utils'

const VITE_CONTEXT = import.meta.env.VITE_CONTEXT;

const Tech = () => import('./tech/index.vue')
const Article = () => import('./tech/components/article-detail-page.vue')
const Video = () => import('./tech/components/video-page.vue')
const Write = () => import('./tech/components/article-page.vue')
const Events = () => import('./tech/components/activity-page.vue')

export const rootRoutes = [
  {
    path: VITE_CONTEXT,
    redirect: `${VITE_CONTEXT}/tech-college`,
    children: [
      {
        path: '',
        component: Tech,
        name: 'home',
        meta: { title: geneTitle('') }
      },
      {
        path: 'tech-college',
        name: 'tech-college',
        component: Tech,
        children: [
          {
            path: 'write',
            name: 'write',
            component: Write,
            meta: { title: geneTitle('技术文章') }
          },
          {
            path: 'video',
            name: 'video',
            component: Video,
            meta: { title: geneTitle('视频课程') }
          },
          {
            path: 'events',
            name: 'events',
            component: Events,
            meta: { title: geneTitle('热门活动') }
          },
          // TODO: 文章详情页无法渲染
          {
            path: `article/:mode/:type/:serial`,
            name: 'article',
            component: Article,
            meta: { title: geneTitle('文章详情') }
          },
          {
            path: `article/:mode/:serial`,
            name: 'articleWithoutType',
            component: Article,
            meta: { title: geneTitle('文章详情') }
          },
        ],
        meta: { title: geneTitle('技术学院') }
      },
      {
        name: 'not-found',
        path: ':pathMatch(.*)*',
        redirect: () => {
          return { path: VITE_CONTEXT }
        }
      }
    ]
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: rootRoutes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 为浏览器添加title
router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }

  // window.__checkUnderlineMenu() // 更新header中的下划线
})

export { router }
