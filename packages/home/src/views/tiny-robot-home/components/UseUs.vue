<template>
  <div class="use-us">
    <div class="use-us-title fade-in-up">{{ info.title }}</div>
    <div class="use-us-subtitle fade-in-up">{{ info.subtitle }}</div>
    <div class="use-us-container">
      <div v-for="item in info.list" :key="item.name" class="item fade-in-up" @click="handleClickCase(item.link)">
        <div class="item-image">
          <img :src="item.imgUrl" :alt="item.name" />
        </div>
        <div class="item-content">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-text">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { TinyTag } from '@opentiny/vue'
import icon1 from '@/assets/images/home/tiny-robot-home/use-us-icon1.png'
import icon2 from '@/assets/images/home/tiny-robot-home/use-us-icon2.png'
import icon3 from '@/assets/images/home/tiny-robot-home/use-us-icon3.png'
import icon4 from '@/assets/images/home/tiny-robot-home/use-us-icon4.png'

const info = {
  title: 'AI组件落地实践',
  subtitle: '加速AI能力复用与产品交付',
  list: [
    {
      name: '云宝助手',
      text: '华为云智能助手',
      imgUrl: icon1,
      link: 'https://www.huaweicloud.com/ai-assistant/index.html'
    },
    {
      name: 'TinyRobot 助手',
      text: '智能助手',
      imgUrl: icon2,
      link: 'https://chat.bytedev.site'
    },
    {
      name: 'GenUI',
      text: '生成式UI演练场',
      imgUrl: icon3,
      link: 'https://opentiny.github.io/genui-sdk/playground'
    },
    {
      name: 'AI Extension',
      text: 'AI浏览器助手插件',
      imgUrl: icon4,
      link: 'https://docs.opentiny.design/next-sdk/guide/ai-extension-architecture.html'
    }
  ]
}

const handleClickCase = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>
<style lang="less" scoped>
.use-us {
  margin: 120px auto 0;
  .use-us-title {
    font-size: 44px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
  }
  .use-us-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .use-us-container {
    margin-top: 66px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    .item {
      width: 340px;
      padding: 23px 52px;
      border-radius: 12px;
      background: #f8f8f8;
      cursor: pointer;
      display: flex;
      gap: 16px;
      border: 1px solid #e6e6e6;
      background: #fff;
      cursor: pointer;
      .item-image {
        img {
          width: 48px;
          height: 48px;
          border-radius: 8px;
        }
      }
      .item-name {
        font-size: 20px;
        color: #000;
        font-weight: 500;
        line-height: 30px;
      }
      .item-text {
        font-size: 14px;
        color: #808080;
        line-height: 22px;
      }
      &:hover{
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
        border-color: transparent;
      }
    }
  }
}
@media (max-width: 1023px) {
  .use-us {
    margin-top: 34px;
    .use-us-title {
      font-size: 22px;
      line-height: 30px;
    }
    .use-us-subtitle {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
    .use-us-container {
      margin: 30px 26px 0;
      gap: 12px;
      .item {
        width: 100%;
        padding: 12px 50px;
        border-radius: 12px;
        gap: 8px;
        .item-image {
          img {
            width: 40px;
            height: 40px;
            border-radius: 8px;
          }
        }
        .item-name {
          font-size: 16px;
          line-height: 24px;
        }
        .item-text {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
