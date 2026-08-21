<template>
  <div class="updates-guide">
    <div class="updates-inner">
      <div class="updates-title">最新动态</div>
      <div class="updates-subtitle">线下活动举办，一起研讨，一起交流前端技术</div>

      <!-- Tab 页签 -->
      <div class="tab-bar">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab-item"
          :class="{ 'tab-active': activeTab === index }"
          @click="handleTabClick(index)"
        >
          <img class="tab-icon" :src="tab.icon" />
          <span class="tab-text">{{ tab.label }}</span>
        </button>
      </div>

      <!-- 页签内容 -->
      <div class="tab-content">
        <!-- 未选中任何 Tab：左侧精选大卡片 + 右侧四个精选小卡片 -->
        <template v-if="activeTab === -1">
          <!-- 左侧大卡片：左上角角标 -->
          <div class="content-large pick-card" @click="handleCardClick(pickLarge.link)">
            <img 
              class="card-badge card-badge--left" 
              :src="getImgStatusUrl('video')" 
              alt="精选" 
            />
            <img class="card-bg-img" :src="pickLarge.bgImage" loading="lazy" />
          </div>        

          <!-- 右侧四个小卡片：右上角角标 -->
          <div class="content-small-grid">
            <div
              v-for="(item, idx) in pickSmall"
              :key="idx"
              class="content-small pick-card"
              @click="handleCardClick(item.link)"
            >
              <img 
                class="card-badge card-badge--right" 
                :src="item.smallBg" 
                alt="精选" 
              />
              <img class="card-bg-img" :src="item.bgImage" loading="lazy" />
              <div class="card-info">
                <div class="card-title">{{ item.title }}</div>
                <div class="card-desc">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </template>

        <!-- 选中某个 Tab：显示对应分类的完整内容 -->
        <template v-else>
          <!-- 左侧大卡片 -->
          <div class="content-large pick-card" :class="{ 'has-text': activeTab !== 0 }" @click="handleCardClick(currentContent.large.link)">
            <!-- 视频课程：只显示背景图 -->
            <template v-if="activeTab === 0">
              <img class="card-bg-img" :src="currentContent.large.bgImage" loading="lazy" />
            </template>
            <!-- 技术文章 / 热门活动：背景图 + title + desc -->
            <template v-else>
              <img class="card-bg-img" :src="currentContent.large.bgImage" loading="lazy" />
              <div class="card-info">
                <div class="card-title" v-html="currentContent.large.title"></div>
                <div class="card-desc">{{ currentContent.large.desc }}</div>
              </div>
            </template>
          </div>

          <!-- 右侧四个小卡片 -->
          <div class="content-small-grid">
            <div
              v-for="(item, idx) in currentContent.small"
              :key="idx"
              class="content-small pick-card"
              @click="handleCardClick(item.link)"
            >
              <img class="card-bg-img" :src="item.bgImage" loading="lazy" />
              <div class="card-info">
                <div class="card-title">{{ item.title }}</div>
                <div class="card-desc" v-html="item.desc"></div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <a
        class="learn-more"
        :href="currentLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        了解更多
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import './index.less'

const activeTab = ref(-1)
const getImgStatusUrl = (name) => new URL(`../../../assets/images/new-icon/floor6/${name}.svg`, import.meta.url).href
const getImgStatusWebpUrl = (name) => new URL(`../../../assets/images/new-icon/floor6/${name}.webp`, import.meta.url).href

const tabs = [
  { icon: getImgStatusUrl('video-icon'), label: '视频课程' },
  { icon: getImgStatusUrl('article-icon'), label: '技术文章' },
  { icon: getImgStatusUrl('active-icon'), label: '热门活动' }
]

const pickLarge = {
  bgImage: getImgStatusWebpUrl('video-1'),
  tabIdx: 0,
  link: 'https://www.bilibili.com/video/BV14SMv6NE1d/?spm_id_from=333.1387.homepage.video_card.click'
}

const pickSmall = [
  {
    bgImage: getImgStatusWebpUrl('first-2'),
    title: '用户调研启动',
    desc: '已陪伴大家走过一段时间。为了更精准地解决实际开发中的痛点，我们正式启动2026年度用户体验调研',
    tabIdx: 0,
    link: 'https://mp.weixin.qq.com/s/rkfh0EmkVQe1qYBG-DGV3w',
    smallBg: getImgStatusUrl('live')
  },
  {
    bgImage: getImgStatusWebpUrl('first-3'),
    title: 'GenUI SDK 源码解读',
    desc: '当 AI 回复不再只是一坨 Markdown 文本，而是直接渲染出可交互的表单、图表、卡片——这才是 AI 交互的下一站',
    tabIdx: 1,
    link: 'https://mp.weixin.qq.com/s/EHjiJ4iaicax9LgUKuDvSg',
    smallBg: getImgStatusUrl('doss')
  },
  {
    bgImage: getImgStatusWebpUrl('first-4'),
    title: '一行命令添 AI对话入口',
    desc: '组件库提供基础的聊天气泡、聊天输入框等 AI 组件，新增了提供 TinyRobot CLI，通过两条简单的命令可以实现',
    tabIdx: 2,
    link: 'https://mp.weixin.qq.com/s/Mg4Usu5z-GptFTRCb-1QkA',
    smallBg: getImgStatusUrl('doss')
  },
  {
    bgImage: getImgStatusWebpUrl('first-5'),
    title: 'WebMCP 深度解析：开启浏览器原生 AI 智能调用的新时代',
    desc: '深入探讨 WebMCP 核心机制、行业现状，与OpenTiny next-sdk如何通过兼容性适配层，助力开发平滑接入这一前沿协议',
    tabIdx: 2,
    link: 'https://mp.weixin.qq.com/s/7Dq3gB1qvdVP9d7lcrgFGQ',
    smallBg: getImgStatusUrl('doss')
  }
]

const allContents = [
  {
    link: 'https://space.bilibili.com/15284299/lists/7785424?type=season', // 分类"了解更多"链接
    large: {
      bgImage: getImgStatusWebpUrl('video-1'),
      title: '',
      desc: '',
      link: 'https://www.bilibili.com/video/BV14SMv6NE1d/?spm_id_from=333.1387.homepage.video_card.click'
    },
    small: [
      { bgImage: getImgStatusWebpUrl('video-2'), title: 'OpenTiny 项目介绍', desc: '提供企业前端底座与 NEXT 智能能力，跨端组件、低代码、工程工具、同时兼容 MCP 生态，支持 AI 对话、UI生成...', link: 'https://space.bilibili.com/15284299/lists/5252022?type=season' },
      { bgImage: getImgStatusWebpUrl('video-3'), title: 'TinyEngine 低代码引擎实操教程', desc: '带你 get 实操全技能，零代码 CRUD、云端协作，开发效率再升级！', link: 'https://space.bilibili.com/15284299/lists/5091846?type=season' },
      { bgImage: getImgStatusWebpUrl('video-4'), title: 'OpenTiny 开发者技术分享', desc: '围绕 OpenTiny 前端解决方案，涵盖产品介绍、组件/低代码/工程工具实操、源码解析、技术拓展及开源贡献教程。', link: 'https://space.bilibili.com/15284299/lists/4944547?type=season' },
      { bgImage: getImgStatusWebpUrl('video-5'), title: 'TinyEngine 低代码引擎系列合集', desc: 'OpenTiny TinyEngine 系列课涵盖入门、定制、AI、鸿蒙跨端、生态实战，配套直播答疑。', link: 'https://space.bilibili.com/15284299/lists/1839942?type=season' }
    ]
  },
  {
    link: '/tech-college/tech/write',
    large: {
      bgImage: getImgStatusWebpUrl('article-1'),
      title: '<span style="font-size: 40px;font-weight: 800;line-height: 58px;">GenUI SDK v1.2.0发布</span><br/><span style="font-size: 28px;font-weight: 600;line-height: 58px;">包体积更小、流式更稳Playground 全面升级！</span>',
      desc: '最近我们推出了 GenUI SDK v1.2.0新版本！本次更新聚焦 SDK 轻量化与按需引入、流式渲染稳定性、Playground能力升级、GenUI Template 体验完善四大方向深度打磨，让 GenUI SDK在生产场景中用得更轻、跑得更稳、调用更顺。',
      link: 'https://mp.weixin.qq.com/s/U3Cc0Qax5eK4eRCU-xGt_A'
    },
    small: [
      { bgImage: getImgStatusWebpUrl('article-2'), title: '一行命令添加 AI 对话入口！TinyRobot 也太省事了~', desc: '除了可以作为组件库提供基础的聊天气泡、聊天输入框等AI组件，现在提供了TinyRobot CLI，通过两条命令可以实现', link: 'https://mp.weixin.qq.com/s/Mg4Usu5z-GptFTRCb-1QkA' },
      { bgImage: getImgStatusWebpUrl('article-3'), title: 'AI-Extension: 让AI真的「看得到、动得了」你的浏览器', desc: '基于 WXT 框架构建的智能浏览器扩展插件，让任意网页都能变成可被AI智能体操控的应用', link: 'https://mp.weixin.qq.com/s/cDlcebGi4LkNZoQxuYkZnw' },
      { bgImage: getImgStatusWebpUrl('article-4'), title: 'OpenTiny NEXT-SDK 重磅上线', desc: '四步把你的前端应用变成智能应用', link: 'https://mp.weixin.qq.com/s/y9Kh5FJXQ8j6ycelMy60mA' },
      { bgImage: getImgStatusWebpUrl('article-5'), title: 'TinyVue SKill 使用指南', desc: '赋能 AI 快速复用组件，<br />高效搭建前端页面', link: 'https://mp.weixin.qq.com/s/QzLFVFRx1exLU2JOlptt8w' }
    ]
  },
  {
    link: '/tech-college/tech/events',
    large: {
      bgImage: getImgStatusWebpUrl('active-1'),
      title: '<span style="font-size: 40px; font-weight: 800;line-height: 58px;">2026OpenTiny NEXT</span><br /><span style="font-size: 40px; font-weight: 800;line-height: 58px;">用户调研启动！</span>',
      desc: 'OpenTiny NEXT 系列产品（NEXT SDK/TinyRobot/GenUI SDK/AI Extension/WebAgent等）已陪伴大家走过一段时间，为了更精确地解决实际开发中的痛点，我们正式启动2026年度用户体验调研。',
      link: 'https://mp.weixin.qq.com/s/rkfh0EmkVQe1qYBG-DGV3w'
    },
    small: [
      { bgImage: getImgStatusWebpUrl('article-2'), title: 'OpenTiny 亮相 QCon 北京，共话生成式 UI 最新技术思考', desc: 'OpenTiny 团队受邀亮相 QCon 全球软件开发大会，带来生成式 UI 最新技术实践分享。', link: 'https://mp.weixin.qq.com/s/GAVP0qzMwkNpT_sYnN-2Ww' },
      { bgImage: getImgStatusWebpUrl('article-3'), title: '参与有奖|OpenTiny NEXT 前端智能化系列直播课来啦~', desc: '全程干货、可落地、可实战，更有一手课程资料、贡献者证书、AtomGit & OpenTiny周边好礼等你来拿！', link: 'https://mp.weixin.qq.com/s/gwz1C7bifmgFgcRSGGI47Q' },
      { bgImage: getImgStatusWebpUrl('active-4'), title: 'OpenTiny 2025年度贡献者榜单正式公布', desc: '星耀璀璨，星耀光芒。', link: 'https://mp.weixin.qq.com/s/S8ReFkhMRIcxtms-oshyAw' },
      { bgImage: getImgStatusWebpUrl('active-5'), title: 'OpenTiny NEXT 亮相 GOSIM HANGZHOU2025，携手开发者共筑开源智能生态！', desc: '向 1500+ 全球开发者公开展示 OpenTiny NEXT 企业级前端智能化方案', link: 'https://mp.weixin.qq.com/s/BhwpmnBtPke42zxNTsb9fQ' }
    ]
  }
]

const currentContent = computed(() => allContents[activeTab.value])

const currentLink = computed(() => {
  if (activeTab.value === -1) {
    return 'https://space.bilibili.com/15284299' // 精选页默认链接
  }
  return allContents[activeTab.value]?.link || 'https://opentiny.design/'
})

const handleTabClick = (index) => {
  if (activeTab.value === index) {
    activeTab.value = -1
    return
  }
  activeTab.value = index
}

const handleCardClick = (link) => {
  if (!link) return
  window.open(link, '_blank', 'noopener,noreferrer')
}
</script>