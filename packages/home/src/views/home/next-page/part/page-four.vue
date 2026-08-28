<template>
  <div class="solution-page">
    <!-- ========== 第一部分：标题区 ========== -->
    <div class="page-header">
      <h1 class="page-title">为什么选择 OpenTiny NEXT ？</h1>
      <p class="page-desc">
        生产环境验证的智能化改造方案，不是概念验证，已在企业落地的基础设施
      </p>
      <div class="page-tags">
        <tiny-tag type="info" size="medium" style="max-width: none;">
          <img class="page-tags-img" :src="getIconSvgUrl('part-four-m')"/>
          OpenTiny NEXT 的独特优势
        </tiny-tag>
      </div>
    </div>

    <!-- ========== 第二部分：8 个特性卡片 ========== -->
    <div class="feature-grid">
      <div
        class="feature-card"
        v-for="(card, i) in featureCards"
        :key="'feature-' + i"
        :style="getCardStyle(card.bgImage)"
      >
        <h3 class="feature-title">{{ card.title }}</h3>
        <ul class="feature-list">
          <li v-for="(item, j) in card.items" :key="'item-' + j">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <!-- ========== 第三部分：4 个图标项 ========== -->
    <div class="icon-section">
      <div
        class="icon-item"
        v-for="(item, i) in iconItems"
        :key="'icon-' + i"
      >
        <div class="icon-box">
          <img :src="item.icon" :alt="item.title" />
        </div>
        <p class="icon-desc">{{ item.desc }}</p>
        <span class="icon-text">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Tag as TinyTag } from '@opentiny/vue'

const getIconBgUrl = (name: string) =>
  new URL(`../../../../assets/images/new-icon/next-page/${name}.png`, import.meta.url).href
const getIconSvgUrl = (name: string) =>
  new URL(`../../../../assets/images/new-icon/next-page/${name}.svg`, import.meta.url).href

// 渐变色常量
const cardGradient = 'linear-gradient(37.46deg, rgba(246, 246, 246, 1) 38.684%, rgba(216, 239, 255, 0.5) 110.603%, rgba(245, 246, 249, 1))'

// 动态生成卡片背景样式（图片 + 渐变双层背景）
const getCardStyle = (bgImage: string) => ({
  backgroundImage: `url(${bgImage}), ${cardGradient}`,
})

// ========== 第二部分数据：8 个特性卡片 ==========
const featureCards = [
  {
    title: '存量项目零重构接入',
    bgImage: getIconBgUrl('part-four-a'), // ← 每个卡片不同背景图
    items: ['后端零侵入：不改原有接口', '前端增量接入：保留全部页面和组件', '兼容 Vue2/Vue3/原生 JS/Angular'],
  },
  {
    title: '全框架 多端 全场景覆盖',
    bgImage: getIconBgUrl('part-four-b'),
    items: ['Vue 2 & 3 双版本兼容，无需维护两套分支', '支持 React、Angular、JS、TS、Python', 'SPA、iframe、多页站点全适配，自动处理'],
  },
  {
    title: 'WebMCP 真正操控网页',
    bgImage: getIconBgUrl('part-four-c'),
    items: ['AI操控网页，自然语言驱动完整业务流程', '严格兼容标准 MCP 协议，大模型无缝对接', '基于 Zod 自定义工具，跨站点串联长链路'],
  },
  {
    title: '企业级安全 权限颗粒可控',
    bgImage: getIconBgUrl('part-four-d'),
    items: ['设置操作白名单限制，指定接口、指定流程', '全链路审计日志：AI 调用留痕，合规可追溯', '会话绑定 + 浏览器沙箱隔离，内网安全'],
  },
  {
    title: '开发效率全链路提升',
    bgImage: getIconBgUrl('part-four-e'),
    items: ['GenUI：自然语言生成页面，自动校验', 'TinyRobot：开箱即用对话组件', 'VS Code 插件：MCP 代码一键生成'],
  },
  {
    title: '配备全套产品矩阵',
    bgImage: getIconBgUrl('part-four-f'),
    items: ['对话层 + 生成层 + 底座', '无代码接入，统一调度多模型', '底层参数、样式、能力全打通'],
  },
  {
    title: '开源免费 无绑定',
    bgImage: getIconBgUrl('part-four-g'),
    items: ['核心 SDK、组件全开源，代码可编辑', '极简集成 + 可复制 Demo + 视频教程', '活跃开发者社群，多行业踩坑经验可复用'],
  },
  {
    title: '精准匹配 B端高频场景',
    bgImage: getIconBgUrl('part-four-h'),
    items: ['运维：AI 自动查日志、资产、工单', 'OA：自然语言填审批单，自动获取业数据', '跨系统联动：AI 完成任务长链路'],
  },
]

// ========== 第三部分数据：4 个图标项 ==========
const iconItems = [
  { title: '平均接入时间', desc:'3min', icon: getIconSvgUrl('part-four-i') },
  { title: '业务代码改动', desc:'0 行代码', icon: getIconSvgUrl('part-four-j') },
  { title: '内置 MCP 工具', desc:'50 +', icon: getIconSvgUrl('part-four-k') },
  { title: 'MCP 协议兼容', desc:'100%', icon: getIconSvgUrl('part-four-l') },
]
</script>

<style lang="less" scoped>
@import './page-four.less';
</style>
