<template>
  <div class="dual-engine">
    <div class="dual-engine-title">{{ info.title }}</div>
    <div class="dual-engine-subtitle">{{ info.subtitle }}</div>
    <div class="dual-engine-container">
      <div class="dual-engine-image">
        <img :src="info.image" />
      </div>
      <div class="dual-engine-content">
        <div v-for="(item, index) in info.list" :key="index" class="dual-engine-content-item">
          <div class="dual-engine-content-header">
            <img class="dual-engine-content-icon" :src="item.icon" :alt="item.title" />
            <div class="dual-engine-content-title">{{ item.title }}</div>
          </div>
          <div class="dual-engine-content-description">
            <div v-for="(i, idx) in item.description" :key="idx">{{ i }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import dualEngineIcon1 from '@/assets/images/home/tiny-robot-home/dual-engine-icon1.svg'
import dualEngineIcon2 from '@/assets/images/home/tiny-robot-home/dual-engine-icon2.svg'
import dualEngineIcon3 from '@/assets/images/home/tiny-robot-home/dual-engine-icon3.svg'
import dualEngineImg from '@/assets/images/home/tiny-robot-home/dual-engine.webp'

const info = {
  title: 'MCP + Skill 双引擎支撑',
  subtitle: '让 AI 真正懂业务、会执行',
  list: [
    {
      title: 'Skill 赋能业务',
      icon: dualEngineIcon1,
      description: ['通过Skill沉淀业务知识、规则与流程，让 AI 更理解企业场景与真实需求。']
    },
    {
      title: '连接一切，执行无限',
      icon: dualEngineIcon2,
      description: ['通过 MCP 连接页面能力、系统工具与外部服务。让 AI 从回答问题走向自主完成任务。']
    },
    {
      title: '不止于对话，更精于执行',
      icon: dualEngineIcon3,
      description: ['Skill规划执行路径，MCP调度工具生态。两者协同，实现从“理解意图”到“交付结果”的全链路自动化，为企业提供确定性的智能生产力。']
    },
  ],
  image: dualEngineImg
}
</script>
<style lang="less" scoped>
.dual-engine {
  margin: 0 auto;
  margin-top: 120px;
  .dual-engine-title {
    font-size: 44px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
  }
  .dual-engine-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .dual-engine-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 120px;
    margin: 66px 0 120px;
    .dual-engine-image {
      max-width: 910px;
      img {
        width: 100%;
      }
    }
    .dual-engine-content {
      width: 400px;
      display: flex;
      flex-direction: column;
      gap: 28px;
      .dual-engine-content-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        .dual-engine-content-icon {
          height: 26px;
          width: 26px;
        }
        .dual-engine-content-title {
          font-size: 22px;
          line-height: 30px;
          font-weight: 600;
        }
      }
      .dual-engine-content-description {
        font-size: 16px;
        color: #808080;
        line-height: 28px;
      }
    }
  }
}
@media (max-width: 1023px) {
  .dual-engine {
    margin-top: 46px;
    .dual-engine-title {
      font-size: 22px;
      line-height: 30px;
    }
    .dual-engine-subtitle {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
    .dual-engine-container {
      margin: 30px 0 46px;
      flex-direction: column-reverse;
      gap: 20px;
      .dual-engine-content {
        gap: 24px;
        width: 100%;
        padding: 0 10px;
        .dual-engine-content-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          .dual-engine-content-icon {
            width: 18px;
            height: 18px;
          }
          .dual-engine-content-title {
            font-size: 16px;
            line-height: 20px;
          }
        }
        .dual-engine-content-description {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }
}
</style>