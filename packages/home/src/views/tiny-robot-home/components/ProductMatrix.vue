<template>
  <div class="product-matrix">
    <div class="product-matrix-container">
      <div class="product-matrix-title fade-in-up">{{ info.title }}</div>
      <div class="product-matrix-subtitle fade-in-up">{{ info.subtitle }}</div>
      <div class="product-matrix-content">
        <div v-for="(item, index) in info.list" :key="item.title" :class="['item', 'fade-in-up', { 'item-last': index > 2 }]">
          <div class="item-image">
            <img :src="item.imgUrl" :alt="item.title" />
          </div>
          <div class="item-content">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-description">
              <div v-for="(description, idx) in item.description" :key="idx">
                {{ description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import componentImg from '@/assets/images/home/tiny-robot-home/product-component.svg'
import kitImg from '@/assets/images/home/tiny-robot-home/product-kit.svg'
import chatImg from '@/assets/images/home/tiny-robot-home/product-chat.svg'
import cliImg from '@/assets/images/home/tiny-robot-home/product-cli.svg'
import skillImg from '@/assets/images/home/tiny-robot-home/product-skill.svg'

const info = {
  title: '产品能力矩阵',
  subtitle: '助力企业更快构建业务',
  list: [
    {
      title: 'Components 基础组件',
      description: [
        '基于Vue3的 AI 对话组件库，支持按需引入',
        '渲染器机制，开发者可轻松将图表、卡片等自定义',
        '让对话流更灵活、可扩展'
      ],
      imgUrl: componentImg
    },
    {
      title: 'Kit 工具包',
      description: [
        '面向工程能力的底座',
        '提供消息管理、会话管理与多种存储策略',
        '让模型接入、流式响应和状态管理更稳定、更可控'
      ],
      imgUrl: kitImg
    },
    {
      title: 'Chat 对话',
      description: ['开箱即用的集成对话组件', '封装会话管理、流式返回等复杂逻辑', '几行代码搞定 AI 对话接入'],
      imgUrl: chatImg
    },
    {
      title: 'CLI 命令行',
      description: ['提供OpenAI 兼容的对话 HTTP 服务', '本地联调服务，流式响应与跨域支持', '加速前后端对接'],
      imgUrl: cliImg
    },
    {
      title: 'Skill 技能',
      description: [
        '标准化 SKILL.md 协议组织与智能调用',
        '支持意图自动激活和按需加载',
        '实现业务知识的有效沉淀与高效复用'
      ],
      imgUrl: skillImg
    }
  ]
}
</script>
<style lang="less" scoped>
.product-matrix {
  background-image: url(@/assets/images/home/tiny-robot-home/product-bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  .product-matrix-container {
    margin: 40px auto 0;
    padding: 100px 0;
    .product-matrix-title {
      font-size: 44px;
      line-height: 64px;
      text-align: center;
      font-weight: 700;
    }
    .product-matrix-subtitle {
      font-size: 20px;
      line-height: 28px;
      margin-top: 16px;
      text-align: center;
      color: #808080;
    }
    .product-matrix-content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 66px;
      gap: 45px;
      .item {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 12px 0 rgba(194, 206, 225, 0.05);
        width: calc((100% - 90px) / 3);
        padding: 20px 20px 54px;
        .item-image {
          img {
            display: block;
            width: 100%;
            border-radius: 8px;
          }
        }
        .item-content {
          margin-top: 34px;
          margin-left: 12px;
          .item-title {
            color: #191919;
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
          }
          .item-description {
            color: #808080;
            font-size: 16px;
            line-height: 28px;
            margin-top: 20px;
          }
        }
      }
      .item-last {
        width: calc((100% - 45px) / 2);
        padding-bottom: 20px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        .item-image {
          width: 288px;
          img {
            width: 100%;
          }
        }
        .item-content {
          margin-top: 14px;
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .product-matrix {
    .product-matrix-container {
      margin-top: 46px;
      padding: 30px 0 40px;
      .product-matrix-title {
        font-size: 22px;
        line-height: 30px;
      }
      .product-matrix-subtitle {
        font-size: 12px;
        line-height: 16px;
        margin-top: 8px;
      }
      .product-matrix-content {
        gap: 20px;
        margin-top: 20px;
        .item {
          width: 100%;
          padding: 14px 14px 21px;
          border-radius: 12px;
          box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.02);
          .item-content {
            margin-top: 20px;
            margin-left: 0;
            .item-title {
              font-size: 16px;
              line-height: 22px;
            }
            .item-description {
              font-size: 12px;
              line-height: 20px;
              margin-top: 12px;
              color: #808080;
            }
          }
          .item-image {
            width: 100%;
          }
        }
        .item-last {
          width: 100%;
          display: block;
          flex-direction: column;
          .item-image {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
