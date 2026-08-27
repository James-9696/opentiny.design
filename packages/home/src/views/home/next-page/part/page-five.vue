<template>
  <div class="resources-page">
    <h1 class="main-title">相关资源</h1>
    <p class="sub-title">WebMCP全场景实践指南，轻松从浏览器连接到多端应用落地</p>
    
    <div class="cards-container">
      <div class="resource-card" v-for="(item, index) in cards" :key="index">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-desc">
          <template v-for="(link, i) in item.desc" :key="i">
            <a 
              :href="link.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="desc-link"
            >{{ link.text }}</a>
            <span v-if="i < item.desc.length - 1" class="divider"> | </span>
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: '快速入门',
    desc: [
      { text: 'TinyRobot', url: 'https://docs.opentiny.design/tiny-robot/guide/quick-start.html' },
      { text: 'GenUI SDK', url: 'https://docs.opentiny.design/genui-sdk/guide/quick-start.html' },
      { text: 'NEXT SDKs', url: 'https://docs.opentiny.design/next-sdk/guide/quick-start.html' },
      { text: 'AI Extension', url: 'https://docs.opentiny.design/next-sdk/guide/ai-extension-install.html' },
      { text: 'WebAgent', url: 'https://docs.opentiny.design/web-agent/guide/getting-started.html' }
    ]
  },
  {
    title: '最佳实践案例',
    desc: [
      { text: 'Vue 工程', url: 'https://docs.opentiny.design/next-sdk/guide/vue-webmcp-best-practice.html' },
      { text: 'Angular 工程', url: 'https://docs.opentiny.design/next-sdk/guide/angular-webmcp-best-practice.html' },
      { text: 'React 工程', url: 'https://docs.opentiny.design/next-sdk/guide/react-webmcp-best-practice.html' },
    ]
  },
  {
    title: 'API 调用指南',
    desc: [
      { text: 'NEXT SDKs', url: 'https://docs.opentiny.design/next-sdk/guide/api-tools.html' }
    ]
  },
  {
    title: 'SDK',
    desc: [
      { text: 'npm i @opentiny/next-sdk'}
    ]
  }
]
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.resources-page {
  background-color: rgba(255, 255, 255, 1);
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(240, 240, 240, 1);
}

.main-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 66px;
  color: #191919;
  margin-bottom: 16px;
  text-align: center;
}

.sub-title {
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  letter-spacing: 1px;
  color: rgba(128, 128, 128, 1);
  margin-bottom: 60px;
  text-align: center;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 368px);
  gap: 42px;
  justify-content: center;
  width: 100%;
  max-width: 1598px;
}

.resource-card {
  width: 368px;
  height: 150px;
  padding: 24px 32px;
  border-radius: 20px;
  background-color: rgba(247, 248, 251, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-title {
  font-size: 22px;
  line-height: 26px;
  color: #191919;
  font-weight: 600;
  margin-bottom: 8px;
}

.card-desc {
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: rgba(89, 89, 89, 1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 链接样式 */
.desc-link {
  color: rgba(89, 89, 89, 1);
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
}

.desc-link:hover {
  color: #191919;
  text-decoration: underline;
}

/* 分隔符保持原文字颜色 */
.divider {
  color: rgba(89, 89, 89, 1);
}

/* ========== 中等屏幕：一行两个 ========== */
@media (max-width: 1200px) {
  .resources-page {
    padding: 80px 60px;
  }
  .cards-container {
    grid-template-columns: repeat(2, 368px);
    max-width: 778px;
  }
}

/* ========== 小屏幕：一行一个 ========== */
@media (max-width: 768px) {
  .resources-page {
    padding: 60px 20px;
  }
  .main-title {
    font-size: 32px;
    line-height: 48px;
  }
  .sub-title {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  .cards-container {
    grid-template-columns: 368px;
    max-width: 368px;
  }
}

/* ========== 超小屏幕：卡片宽度自适应 ========== */
@media (max-width: 420px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
  .resource-card {
    width: 100%;
    height: auto;
    min-height: 150px;
  }
}
</style>