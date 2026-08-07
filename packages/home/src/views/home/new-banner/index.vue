<template>
  <div class="news-section">
    <div class="section-hero" id="news-anchor">
      <!-- 浮动光晕背景 -->
      <div class="glow-layer">
        <div class="glow-orb"></div>
      </div>
      <div class="hero-title">企业级前端AI应用开发平台</div>
      <div class="hero-subtitle">
        <span class="typewriter-text">{{ subtitleText }}</span>
      </div>

      <div class="hero-search" @click="searchClick">
        <span class="search-text">有什么可以帮助您，我可以 帮您处理工作</span>
        <div class="search-icon"></div>
      </div>
      <div class="hero-actions">
        <tiny-button type="primary" round size="medium" @click="handleClick('find')">
          探索智能化
          <i class="btn-arrow btn-arrow-light"></i>
        </tiny-button>
        <tiny-button round size="medium" @click="handleClick('cmp')">
          组件库
          <i class="btn-arrow btn-arrow-dark"></i>
        </tiny-button>
      </div>
    </div>

    <div class="section-body">
      <div class="card-list">
        <div class="card-grid">
          <div
            v-for="item in cardList"
            :key="item.id"
            class="info-card"
            @click="cardFn(item.href)"
          >
            <p :title="item.title">
              <a
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ item.title }}
              </a>
            </p>
            <span :title="item.desc">{{ item.desc }}</span>
            <div class="card-meta">{{ item.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Button as TinyButton } from '@opentiny/vue'
import './index.less'

const isGitHubBuild = import.meta.env.MODE === 'github'
const isGitHubRuntime = typeof window !== 'undefined' && window.location.hostname.includes('opentiny.github.io')
const isGitHub = isGitHubRuntime || isGitHubBuild
const basePath = isGitHub ? '/opentiny.design/' : '/'

const subtitleText = ref('')

onMounted(() => {
  const text = '企业级前端来源 | 覆盖设计，开发，搭建与智能化升级'
  let i = 0
  const timer = setInterval(() => {
    if (i < text.length) {
      subtitleText.value += text[i]
      i++
    } else {
      clearInterval(timer)
    }
  }, 80)
})

const cardFn = (link) => {
  window.open(link, '_blank', 'noopener,noreferrer')
}

const searchClick = () => {
  window.open(`${basePath}tiny-robot`, '_blank', 'noopener=yes,noreferrer=yes')
}

const handleClick = (msg) => {
  if (msg === 'find') {
    window.open(`${basePath}next-sdk`, '_blank', 'noopener=yes,noreferrer=yes')
  } else {
    window.open(`/opentiny-design/tiny-vue`, '_blank', 'noopener=yes,noreferrer=yes')
  }
}

const cardList = [
  {
    id: 1,
    title: '直播分享|收官篇：从开发到运行，打造AI智能应用全链路',
    href: 'https://www.bilibili.com/video/BV14SMv6NE1d/?spm_id_from=333.337.search-card.all.click',
    desc: 'TinyVue、TinyRobot、GenUI、WebMCP、WebAgent等核心能力，展示AI从生成页面、理解页面到调用工具、完成业务操作的全链路实践。',
    date: '2026-07-08'
  },
  {
    id: 2,
    title: 'GenUI SDK v1.2.0 发布：体积更小，流式更稳',
    href: 'https://mp.weixin.qq.com/s/U3Cc0Qax5eK4eRCU-xGt_A',
    desc: '聚焦SDK轻量化与按需引入、流式渲染稳定性、Playground能力升级、GenUI Template体验完善四大方向深度打磨，让GenUI SDK在生产场景中用得更轻、跑得更稳、调得更顺。',
    date: '2026-06-17'
  },
  {
    id: 3,
    title: '一行命令添加AI对话入口！TinyRobot也太省事了~',
    href: 'https://mp.weixin.qq.com/s/Mg4Usu5z-GptFTRCb-1QkA',
    desc: 'TinyRobot除了可以作为组件库提供基础的聊天气泡、聊天输入框等AI组件，现在也提供了TinyRobot CLI，通过两条简单的命令可以实现。',
    date: '2026-07-18'
  }
]
</script>