<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import genuiChatIcon from '@/assets/genui/genui_chat_icon.svg'
import genuiInusecon from '@/assets/genui/genui_inuse_icon.svg'
import gneuiSettingsIcon from '@/assets/genui/genui_settings_icon.svg'
import { guideCodeMap } from '../config'
import HomeGuideCard from './HomeGuideCard.vue'

// const code = ref('')
const activeCard = ref(0)

function hightlight() {
  // 每次都要更新一下代码高亮
  nextTick(() => (window as any).Prism.highlightAll())
}

const handleGuideCardClick = (index: number) => {
  activeCard.value = index
}

onMounted(() => {
  hightlight()
})
</script>

<template>
  <section class="home-guide">
    <div class="home-guide-header">
      <div class="home-guide-header-title genui-title">快速集成生成式UI</div>
      <div class="home-guide-header-subtitle genui-subtitle">提供强大的渲染组件和开箱即用的对话组件</div>
    </div>
    <div class="home-guide-content">
      <div class="home-guide-content-left">
        <home-guide-card
          title="步骤1：引入并使用chat组件"
          description="开箱即用的caht组件内置了对话界面与消息管理"
          :img="genuiChatIcon"
          :active="activeCard === 0"
          @click="handleGuideCardClick(0)"
        />
        <home-guide-card
          title="步骤2：使用chat组件"
          description="简单地配置配套的大模型服务地址，即可体验生成式UI"
          :img="genuiInusecon"
          :active="activeCard === 1"
          @click="handleGuideCardClick(1)"
        />
        <home-guide-card
          title="步骤3：添加自定义配置"
          description="强大的定制能力，可定制主题、组件、消息底部工具栏等"
          :img="gneuiSettingsIcon"
          :active="activeCard === 2"
          @click="handleGuideCardClick(2)"
        />
      </div>
      <div class="home-guide-content-right">
        <pre class="guide-step-one-code language-js line-numbers"><code class="language-js">{{ guideCodeMap[`step${activeCard + 1}`] }}</code></pre>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '../style/index.less';

.home-guide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 110px 12.5% 0px 12.5%;

  &-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-left {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &-right {
      flex: 1;
      background: rgba(242, 242, 242, 1);
      border-radius: 24px;
      padding: 30px;
      margin-left: 10%;
    }
  }
}
</style>

<style>
.guide-step-one-code {
  background: #ffffff !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow: clip !important;

  .language-js {
    color: rgb(5, 129, 4) !important;
  }

  .token {
    color: rgb(25, 25, 25);
  }

  .token.operator,
  .token.constant,
  .token.comment {
    color: rgb(5, 129, 4);
  }

  .token.string {
    color: rgb(148, 43, 41);
  }

  .token.keyword {
    color: rgb(0, 0, 255);
  }
}
</style>
