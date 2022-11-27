import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'layout',
    component: () => import('@/views/Layout/index.vue'),
    meta: { title: '首页' },
    children: [
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/Recommend/index.vue'),
        meta: { title: '推荐' }
      },
      {
        path: 'hall',
        name: 'hall',
        component: () => import('@/views/Hall/index.vue'),
        meta: { title: '音乐馆' },
        children: [
          {
            path: 'picked',
            name: 'picked',
            component: () => import('@/views/Hall/components/Picked.vue'),
            meta: { title: '精选' }
          },
          {
            path: 'dt',
            name: 'dt',
            component: () => import('@/views/Hall/components/Dt.vue'),
            meta: { title: '有声电台' }
          },
          {
            path: 'toplist',
            name: 'toplist',
            component: () => import('@/views/Hall/components/Toplist.vue'),
            meta: { title: '排行' }
          },
          {
            path: 'artist',
            name: 'artist',
            component: () => import('@/views/Hall/components/Artist.vue'),
            meta: { title: '歌手' }
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/Hall/components/Category.vue'),
            meta: { title: '分类歌单' }
          },
          {
            path: 'zj',
            name: 'zj',
            component: () => import('@/views/Hall/components/Zj.vue'),
            meta: { title: '数字专辑' }
          }
        ]
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/Video/index.vue'),
        meta: { title: '视频' }
      },
      {
        path: 'radio',
        name: 'radio',
        component: () => import('@/views/Radio/index.vue'),
        meta: { title: '电台' }
      },
      {
        path: 'like',
        name: 'like',
        component: () => import('@/views/Like/index.vue'),
        meta: { title: '我喜欢' }
      },
      {
        path: 'local',
        name: 'local',
        component: () => import('@/views/Local/index.vue'),
        meta: { title: '本地和下载' }
      },
      {
        path: 'plays',
        name: 'plays',
        component: () => import('@/views/Plays/index.vue'),
        meta: { title: '最近播放' }
      },
      {
        path: 'playsList',
        name: 'playsList',
        component: () => import('@/views/PlayList/index.vue'),
        meta: { title: '试听列表' }
      },
      {
        path: 'pay',
        name: 'pay',
        component: () => import('@/views/Pay/index.vue'),
        meta: { title: '已购音乐' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 路由拦截
router.beforeEach((to, from, next) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta?.title
  }
  next()
})
export default router
