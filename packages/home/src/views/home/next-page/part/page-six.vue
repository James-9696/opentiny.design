<template>
  <div class="faq-page">
    <h1 class="main-title">智能化相关问题</h1>
    <p class="sub-title">前端 AI 工具方案，零侵入、少量代码接入，让 AI 精准操控现有应用</p>

    <div class="collapse-wrapper">
      <tiny-collapse v-model="activeNames">
        <tiny-collapse-item
          v-for="(item, index) in faqList"
          :key="index"
          :title="item.title"
          :name="String(index)"
        >
          <div class="collapse-content">{{ item.content }}</div>
        </tiny-collapse-item>
      </tiny-collapse>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCollapse, TinyCollapseItem } from '@opentiny/vue'

const activeNames = ref(['0'])

const faqList = [
  {
    title: '为什么选择智能化应用，注册页面工具这条路？',
    content: `工具函数是AI智能体感知外界，操作外界唯一途径。自2025年MCP成为标准以后，人们一直在摸索在浏览器上使用MCP服务的最佳途径，目前主流有3种模式：外挂式严格依赖DOM结构的准确性，视觉式无法克服不可见区域问题（dialog 或 select选项）, 且他们都存在多轮次调用，Token消耗大，执行结果不稳定等问题。我们推荐使用内联式工具， 因为只有应用自己了解自己，内联式可以编程式开发，打通应用内部数据和函数，一次执行多步的任务，且动作是准确可预测的。通过定义网页工具函数，可以实现许多外挂式/视觉式工具无法实现的能力。`
  },
  {
    title: '为什么选择WebMcp API ？',
    content: `OpenTiny WebMCP-SDKs 是探索WebMcp的先行者，自2025年就在浏览器上定义WebMcp Server,并进行注册工具函数，详见：WebMcp Server。在2006.5.27号会议上， W3c 组织已经定义标准WebMCP API，并将在 Chrome 150 上正式推出。目前已经有成熟的 WebMcp Polyfill包，可以让我们在低版本浏览器上也能使用它，所以它目前已经是广泛可用的状态了。 随着它成为浏览器标准API并逐渐流行后，未来大多数网页应用都会内部集成WebMCP API， AI 智能体将可以无缝操作这些网站。我们定义的WebMcp Server 与 标准WebMCP API的功能目的是一致的，用法是一致的。当WebMCP API成为标准后， 我们不建议继续使用WebMcp Server。`
  },
  {
    title: '我们的应用如果要使用你们这个要做哪些事情？',
    content: '我们有考虑到sdk接入的快捷、低侵入的设计，可以在我们的官网文档上看到，这部分sdk的接入只有20~30行左右的代码就可以实现应用智能化了，而且不需要变动现有的代码逻辑。'
  },
  {
    title: '为什么要把MCP Server放到前端？这样做有什么考虑？',
    content: `市面一般的MCP服务都是在后端提供，但是如果您的应用后端的API要改造成大模型可以使用的MCP Tool，成本是非常高的，我们用这种逆向思维把MCP Server放在前端，这样您是不需要对现有Api进行变动，原有的业务逻辑如果已经封装成前端的Api，可以直接注册成MCP Tool，把前端的Api放进MCP Tool的回调里就完成了对AI提供工具的实现。`
  },
  {
    title: '遥控端和受控端是怎么做到连接的？',
    content: `我们有Web Agent Server这个后台服务作为中心节点，遥控端和受控端实际并没有直接进行连接访问，而是与Web Agent Server进行通信来实现所谓的连接的目的。`
  }
]
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.faq-page {
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

.collapse-wrapper {
  width: 100%;
}

/* 折叠面板整体 */
:deep(.tiny-collapse) {
  border: none;
  background: transparent;
}

/* 每个折叠项头部 */
:deep(.tiny-collapse-item__header) {
  font-size: 18px;
  font-weight: 600;
  color: #191919;
  padding: 20px 24px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: none;
  transition: all 0.3s ease;
  flex-direction: row-reverse;
}

:deep(.tiny-collapse-item__header .tiny-collapse-item__word-overflow) {
width: 100%;
}

/* 展开区域 */
:deep(.tiny-collapse-item__wrap) {
  background-color: transparent;
  border: none;
}

:deep(.tiny-collapse-item__content) {
  padding: 0 24px 24px;
  font-size: 16px;
  line-height: 28px;
  color: rgba(89, 89, 89, 1);
  border-top: 0;
  border-bottom: 1px solid rgba(219, 219, 219, 1);
}

:deep(.tiny-collapse-item) {
  border: none;
}

/* 展开时头部与内容融为一体 */
:deep(.tiny-collapse-item.is-active .tiny-collapse-item__header) {
  border-radius: 12px 12px 0 0;
  margin-bottom: 0;
}

:deep(.tiny-collapse-item.is-active) {
  border-radius: 12px;
  margin-bottom: 16px;
}

.collapse-content {
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(89, 89, 89, 1);
}

/* ========== 中等屏幕 ========== */
@media (max-width: 1200px) {
  .faq-page {
    padding: 80px 60px;
  }
}

/* ========== 小屏幕 ========== */
@media (max-width: 768px) {
  .faq-page {
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
  :deep(.tiny-collapse-item__header) {
    font-size: 16px;
    padding: 16px 20px;
  }
  :deep(.tiny-collapse-item__content) {
    font-size: 14px;
    line-height: 24px;
    padding: 0 20px 20px;
  }
}
</style>