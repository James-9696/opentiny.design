<template>
  <div class="robot-component">
    <div class="robot-component-title fade-in-up">{{ info.title }}</div>
    <div class="robot-component-subtitle fade-in-up">{{ info.subtitle }}</div>
    <div class="robot-component-container">
      <div class="item fade-in-up" v-for="item in info.list" :key="item.name" @click="handleClickComponent(item.link)">
        <div class="item-image">
          <img :src="item.imgUrl" :alt="item.name" />
        </div>
        <div class="item-name">
          <div>{{ item.name }}</div>
          <tiny-tag class="tag" type="info" :value="item.tag"></tiny-tag>
        </div>
        <div class="item-text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { TinyTag } from '@opentiny/vue'
import caseImg1 from '@/assets/images/home/tiny-robot-home/component-welcome.svg'
import caseImg2 from '@/assets/images/home/tiny-robot-home/component-sender.svg'
import caseImg3 from '@/assets/images/home/tiny-robot-home/component-bubble.svg'
import caseImg4 from '@/assets/images/home/tiny-robot-home/component-mcp.svg'
import caseImg5 from '@/assets/images/home/tiny-robot-home/component-popover.svg'
import caseImg6 from '@/assets/images/home/tiny-robot-home/component-history.svg'

const info = {
  title: '组件展示',
  subtitle: '大量实用组件满足你的需求',
  list: [
    {
      name: '欢迎组件',
      text: '用于展示欢迎信息的通用组件',
      imgUrl: caseImg1,
      tag: '唤醒',
      link: 'https://docs.opentiny.design/tiny-robot/components/welcome.html'
    },
    {
      name: '输入模版',
      text: '高度可组合的聊天输入组件',
      imgUrl: caseImg2,
      tag: '表达',
      link: 'https://docs.opentiny.design/tiny-robot/components/sender.html'
    },
    {
      name: '对话组',
      text: '支持灵活的内容渲染和自定义扩展',
      imgUrl: caseImg3,
      tag: '反馈',
      link: 'https://docs.opentiny.design/tiny-robot/components/bubble.html'
    },
    {
      name: '插件选择器',
      text: '用于展示和管理插件的组件',
      imgUrl: caseImg4,
      tag: '推荐',
      link: 'https://docs.opentiny.design/tiny-robot/components/mcp-server-picker.html'
    },
    {
      name: '热门问题',
      text: '开箱即用、易于配置、极致体验的通用组件',
      imgUrl: caseImg5,
      tag: '推荐',
      link: 'https://docs.opentiny.design/tiny-robot/components/suggestion-popover.html'
    },
    {
      name: '对话管理',
      text: '更新对话轮次，保存对话记录的通用组件',
      imgUrl: caseImg6,
      tag: '通用',
      link: 'https://docs.opentiny.design/tiny-robot/components/history.html'
    }
  ]
}

const handleClickComponent = (url) => {
  window.open(url)
}
</script>
<style lang="less" scoped>
.robot-component {
  margin: 0 auto;
  margin-top: 120px;
  .robot-component-title {
    font-size: 44px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
  }
  .robot-component-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .robot-component-container {
    margin-top: 66px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    .item {
      width: 453px;
      padding: 38px 40px 36px;
      box-sizing: border-box;
      border: 2px solid transparent;
      border-radius: 16px;
      background: #f8f8f8;
      cursor: pointer;
      .item-image {
        width: 100%;
        img {
          width: 100%;
          border-radius: 8px;
        }
      }
      .item-name {
        font-size: 18px;
        color: #191919;
        margin-top: 24px;
        line-height: 30px;
        display: flex;
        align-items: center;
        gap: 6px;
        margin-left: 0;
      }
      .item-text {
        font-size: 14px;
        color: #808080;
        margin-top: 2px;
        line-height: 22px;
        margin-left: 0;
      }
      &:hover {
        background: linear-gradient(#f8f8f8, #f8f8f8) padding-box,
          linear-gradient(180deg, #e8e8e8, #f5f5f5) border-box;
      }
    }
  }
}
@media (max-width: 1023px) {
  .robot-component {
    margin-top: 34px;
    .robot-component-title {
      font-size: 22px;
      line-height: 30px;
    }
    .robot-component-subtitle {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
    .robot-component-container {
      margin-top: 30px;
      gap: 24px;
      .item {
        width: 100%;
        padding: 14px 14px 20px;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: 12px;
        background: #f8f8f8;
        cursor: pointer;
        .item-image {
          width: 100%;
          img {
            border-radius: 8px;
          }
        }
        .item-name {
          font-size: 16px;
          line-height: 24px;
          margin-top: 16px;
          margin-left: 10px;
        }
        .item-text {
          font-size: 12px;
          line-height: 16px;
          margin-top: 6px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
