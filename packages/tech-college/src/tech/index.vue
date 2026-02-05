<template>
  <div v-show="!isArticleDetail">
    <div class="tech-nav">
      <div>
        <div class="tech-banner">
          <div class="tech-banner-sub">
            <div class="tech-banner-title">码上生花，共赴山海</div>
            <div class="tech-banner-subtitle">
              因专业，成就志向远大的你。<br v-if="isMobile" />
              在这里共同成长，共赴山海。
            </div>
            <!-- 导航 -->
            <div class="tech-banner-nav">
              <div class="tech-banner-nav-bar">
                <div
                  class="tech-banner-nav-item"
                  :style="index === 1 ? 'background-color: rgba(255, 255, 255, 0.6)' : ''"
                  @click="toVideo"
                >
                  <div class="tech-banner-nav-item-title">视频课程</div>
                  <div class="tech-banner-nav-item-subtitle">OpenTiny全方位知识点</div>
                </div>
                <div
                  class="tech-banner-nav-item"
                  :style="(index === 2 || isArticleDetail) ? 'background-color: rgba(255, 255, 255, 0.6)' : ''"
                  @click="toArticle"
                >
                  <div class="tech-banner-nav-item-title">技术文章</div>
                  <div class="tech-banner-nav-item-subtitle">大咖分享技术干货</div>
                </div>
                <div
                  class="tech-banner-nav-item"
                  :style="index === 3 ? 'background-color: rgba(255, 255, 255, 0.6)' : ''"
                  @click="toEvents"
                >
                  <div class="tech-banner-nav-item-title">热门活动</div>
                  <div class="tech-banner-nav-item-subtitle">最新活动Get</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 当前主页 -->
    <div class="tech-content" v-show="index === 0">
      <current-page></current-page>
    </div>
    <!-- 视频课程 -->
    <div class="tech-content" v-show="index === 1">
      <video-page></video-page>
    </div>
    <!-- 技术文章 -->
    <div class="tech-content" v-show="index === 2">
      <article-page></article-page>
    </div>
    <!-- 热门活动 -->
    <div class="tech-content" v-show="index === 3">
      <activity-page></activity-page>
    </div>
  </div>
  <!-- 文章详情页路由出口 -->
  <div class="tech-content" v-show="isArticleDetail">
    <router-view />
  </div>
   <back-to-top :visible="isShowBackTop" :click-event="backTop"></back-to-top>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import './style/index.less'
import './style/adapter/index.less'
import CurrentPage from './components/current-page.vue'
import VideoPage from './components/video-page.vue'
import ArticlePage from './components/article-page.vue'
import ActivityPage from './components/activity-page.vue'
import BackToTop from '../../../home/src/views/layout/back-to-top.vue'
import { isMobile } from './utils'

const router = useRouter()
const route = useRoute()

router.afterEach(() => {
  rushPage()
})

const isArticleDetail = ref(true)
const isShowBackTop = ref(false)

// 更新函数
const updateArticleDetail = () => {
  isArticleDetail.value = route.name === 'article' || route.name === 'articleWithoutType'
}

const index = ref(-1)

// 路由变化时自动更新
watch(() => route.name, updateArticleDetail, { deep: true })

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

// 滚动监听处理函数
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  isShowBackTop.value = scrollTop >= 500
}

const backTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toVideo = () => {
  index.value = 1
  router.push({ name: 'video' })
}

const toArticle = () => {
  index.value = 2
  router.push({
    name: 'write'
  })
  sessionStorage.removeItem('route-active-data')
}

const toEvents = () => {
  index.value = 3
  router.push({ name: 'events' })
  sessionStorage.removeItem('route-data')
}

const rushPage = () => {
  // 视频课程
  isArticleDetail.value = false
  if (route.path === '/tech-college/tech/video') {
    index.value = 1
    return
  }
  // 技术文章列表
  if (route.path === '/tech-college/tech/write') {
    index.value = 2
    return
  }
  // 热门活动
  if (route.path === '/tech-college/tech/events') {
    index.value = 3
    return
  }
  // 文章详情
  if (route.path.includes('/tech-college/article/')) {
    index.value = -1
    isArticleDetail.value = true
    return
  }
  // 首页
  if (route.path === '/' || /^\/tech-college\/?$/.test(route.path) || /^\/tech-college\/tech\/?$/.test(route.path)) {
    index.value = 0
    return
  }
}
</script>