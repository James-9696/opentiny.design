<template>
  <div class="scene-cases">
    <div class="scene-cases-title fade-in-up">{{ info.title }}</div>
    <div class="scene-cases-subtitle fade-in-up">{{ info.subtitle }}</div>
    <div class="scene-cases-container">
      <div class="container-left fade-in-up">
        <div
          v-for="item in info.list"
          :key="item.name"
          :class="['item', { active: state.active === item.id }]"
          @click="handleClickCase(item)"
        >
          <div class="item-image">
            <img :src="item.icon" :alt="item.name" />
          </div>
          <div class="item-content">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="container-right fade-in-up">
        <img :src="state.imgUrl" alt="" />
      </div>
    </div>
    <tiny-carousel class="mobile-container" arrow="never" height="310px" autoplay>
      <tiny-carousel-item v-for="item in info.list" :key="item.id" class="mobile-section">
        <div class="mobile-image-section">
          <img :src="item.imgUrl" :alt="item.title" />
        </div>
        <div class="mobile-text-section">
          <div class="mobile-section-title">{{ item.name }}</div>
          <div class="mobile-section-description">
            <div class="item-text">{{ item.text }}</div>
          </div>
        </div>
      </tiny-carousel-item>
    </tiny-carousel>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { Carousel as TinyCarousel, CarouselItem as TinyCarouselItem } from '@opentiny/vue'
import caseImg1 from '@/assets/images/home/tiny-robot-home/scene-cases-img1.webp'
import caseImg2 from '@/assets/images/home/tiny-robot-home/scene-cases-img2.webp'
import caseImg3 from '@/assets/images/home/tiny-robot-home/scene-cases-img3.webp'
import caseIcon1 from '@/assets/images/home/tiny-robot-home/scene-cases-icon1.svg'
import caseIcon2 from '@/assets/images/home/tiny-robot-home/scene-cases-icon2.svg'
import caseIcon3 from '@/assets/images/home/tiny-robot-home/scene-cases-icon3.svg'

const info = {
  title: '场景案例',
  subtitle: '提供多场景解决方案，帮助用户提高与AI协作效率',
  list: [
    {
      id: 1,
      name: 'Web独立式',
      text: '自然语言为主，理解复杂场景，可独立完成操作',
      icon: caseIcon1,
      imgUrl: caseImg1
    },
    {
      id: 2,
      name: 'Web助手式',
      text: '自然语言和界面操作均衡配合使用',
      icon: caseIcon2,
      imgUrl: caseImg2
    },
    {
      id: 3,
      name: 'Web嵌入式',
      text: '界面操作为主，偶尔唤起AI指令',
      icon: caseIcon3,
      imgUrl: caseImg3
    }
  ]
}
const state = reactive({
  active: 1,
  imgUrl: caseImg1
})

const handleClickCase = (item) => {
  state.active = item.id
  state.imgUrl = item.imgUrl
}
</script>
<style lang="less" scoped>
.scene-cases {
  margin: 120px auto 0;
  .scene-cases-title {
    font-size: 44px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
  }
  .scene-cases-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .scene-cases-container {
    margin-top: 66px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 152px;
    .container-left {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .item {
        display: flex;
        gap: 18px;
        padding: 30px 32px;
        width: 500px;
        border-radius: 20px;
        cursor: pointer;
        .item-image {
          width: 32px;
          img {
            width: 100%;
          }
        }
        .item-content {
          .item-name {
            font-size: 20px;
            font-weight: 600;
            line-height: 28px;
            color: #191919;
          }
          .item-text {
            font-size: 16px;
            line-height: 22px;
            margin-top: 12px;
            color: #808080;
          }
        }
        &:hover{
          background: #f6f6f6;
        }
      }
      .active {
        background: #f6f6f6;
      }
    }
    .container-right {
      width: 788px;
      padding: 3px;
      background: linear-gradient(90deg, #79d8f7, #a8db6e, #fcbc72, #fa8682, #eb75e7 70%);
      border-radius: 16px;
      img {
        width: 100%;
        border-radius: 12px;
        object-fit: cover;
        display: block;
      }
    }
  }
}
@media (min-width: 1024px) {
  .scene-cases {
    margin-top: 120px;
    .scene-cases-container {
      display: flex;
    }
    .mobile-container {
      display: none;
    }
  }
}
@media (max-width: 1023px) {
  .scene-cases {
    margin-top: 34px;
    margin-bottom: 14px;
    .scene-cases-title {
      font-size: 22px;
      line-height: 30px;
    }
    .scene-cases-subtitle {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
    .scene-cases-container {
      display: none;
    }
    .mobile-container {
      width: 100%;
      display: block;
      margin-top: 30px;
      .mobile-section {
        padding: 12px;
        background: #fff;
        border-radius: 12px;
        width: 100%;
        .mobile-image-section {
          padding: 1px;
          background: linear-gradient(90deg, #79d8f7, #a8db6e, #fcbc72, #fa8682, #eb75e7 70%);
          border-radius: 6px;
          img {
            width: 100%;
            border-radius: 6px;
            object-fit: cover;
            display: block;
          }
        }
        .mobile-text-section {
          .mobile-section-title {
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 8px;
            margin-top: 20px;
            color: #191919;
            font-weight: 600;
          }
          .mobile-section-description {
            font-size: 12px;
            line-height: 18px;
            color: #808080;
            margin: auto;
          }
        }
      }
    }
  }
}
</style>