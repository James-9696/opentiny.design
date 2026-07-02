<template>
  <div class="technical-core">
    <div class="technical-core-title">{{ info.title }}</div>
    <div class="technical-core-subtitle">{{ info.subtitle }}</div>
    <div class="technical-core-content">
      <div
        v-for="(content, index) in info.list"
        :key="index"
        :class="`technical-core-item technical-core-item-${index % 4}`"
      >
        <div class="technical-core-item-icon">
          <img class="technical-core-item-icon" :src="content.icon" :alt="content.title" />
        </div>
        <div>
          <div class="technical-core-item-title">{{ content.title }}</div>
          <div class="technical-core-item-description">
            <div v-for="(item, idx) in content.description" :key="idx">
              {{ item }}
            </div>
          </div>
          <div class="technical-core-item-description-mobile">{{ content.description.join('，') }}。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import technicalIcon1 from '@/assets/images/home/tiny-robot-home/technical_core_icon1.svg'
import technicalIcon2 from '@/assets/images/home/tiny-robot-home/technical_core_icon2.svg'
import technicalIcon3 from '@/assets/images/home/tiny-robot-home/technical_core_icon3.svg'
import technicalIcon4 from '@/assets/images/home/tiny-robot-home/technical_core_icon4.svg'

const info = {
  title: 'TinyRobot 核心优势',
  subtitle: '统一接入、组件丰富与开放扩展，支撑 AI 应用高效落地',
  list: [
    {
      title: '组件丰富灵活',
      description: ['场景组件全覆盖，适配多元对话', '原子化设计，自由拼装、随心组合', '急速搭建个性化界面，告别重复开发'],
      icon: technicalIcon1
    },
    {
      title: '接入极简高效',
      description: ['开箱即用，几行代码即可完成接入', 'UI 与逻辑 Kit 分层解耦，组合更自由', 'CLI + Skill + 示例文档，极速落地'],
      icon: technicalIcon2
    },
    {
      title: '生态开放无界',
      description: ['原生兼容三方调用，扩展即生效', '工具链清晰可观测，调试一目了然', '能力随业务生长，持续延展不设限'],
      icon: technicalIcon3
    },
    {
      title: '样式深度定制',
      description: ['细粒度样式控制，微调即可焕新', '灵活适配多元化业务场景与品牌语言', '让每一个界面，都准确表达你的个性'],
      icon: technicalIcon4
    }
  ]
}
</script>
<style lang="less" scoped>
.technical-core {
  margin: 0 auto;
  .technical-core-title {
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    margin-top: 120px;
    font-weight: 700;
  }
  .technical-core-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .technical-core-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 45px;
    margin-top: 66px;
    .technical-core-item {
      padding: 48px 24px 48px 36px;
      width: calc((100% - 135px) / 4);
      box-shadow: 0 4px 26px 0 rgba(234, 233, 237, 0.9);
      border: 3px solid #fff;
      border-radius: 16px;
      transition: transform 0.3s ease;
      .technical-core-item-icon {
        width: 66px;
        height: 66px;
      }
      &-0 {
        background: linear-gradient(to bottom, #f5fbef, #fff 50%);
      }
      &-1 {
        background: linear-gradient(to bottom, #f9f4fe, #fff 50%);
      }
      &-2 {
        background: linear-gradient(to bottom, #eef6ff, #fff 50%);
      }
      &-3 {
        background: linear-gradient(to bottom, #fff9f3, #fff 50%);
      }
      .technical-core-item-title {
        color: #191919;
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        margin-top: 36px;
      }
      .technical-core-item-description {
        display: block;
        color: #808080;
        font-size: 16px;
        line-height: 26px;
        margin-top: 20px;
        &-mobile {
          display: none;
        }
      }
      &:hover {
        transform: translateY(-10px);
      }
    }
  }
}
@media (max-width: 1023px) {
  .technical-core {
    margin: 0 auto;
    .technical-core-title {
      font-size: 22px;
      line-height: 30px;
      margin-top: 46px;
    }
    .technical-core-subtitle {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
    .technical-core-content {
      flex-wrap: wrap;
      flex-direction: column;
      gap: 20px;
      margin-top: 30px;
      .technical-core-item {
        width: 100%;
        padding: 24px;
        box-shadow: 0 4px 12px 0 rgba(234, 233, 237, 0.9);
        border: 2px solid #fff;
        border-radius: 6px;
        display: flex;
        gap: 16px;
        .technical-core-item-icon {
          width: 40px;
          height: 40px;
        }
        .technical-core-item-title {
          font-size: 16px;
          line-height: 22px;
          margin-top: 0;
        }
        .technical-core-item-description {
          display: none;
          &-mobile {
            display: block;
            font-size: 12px;
            line-height: 16px;
            margin-top: 6px;
            color: #808080;
          }
        }
      }
    }
  }
}
</style>