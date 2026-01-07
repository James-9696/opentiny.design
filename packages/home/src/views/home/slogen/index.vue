<template>
  <div class="home-slogan">
    <tiny-carousel :height="carouselHeight" arrow="never" :interval="4000" autoplay :key="isMobile" id="home-slogan-carousel">
      <FirstCarousel :data="bannerData1" />
      <SecondCarousel :data="bannerData2" />
      <tiny-carousel-item v-for="(item, idx) in bannerListData" :key="item.title">
        <div
          class="banner-item-wrap"
          :style="{ background: `no-repeat center/cover url(${item.bg})` }"
          @click.stop="onLearnMore(item.link)"
        >
          <div class="banner-item">
            <div class="banner-item-logo" :class="`banner-item-logo-${idx}`">
              <img :src="item.icon" class="banner-item-logo-icon" loading="lazy" alt="banner" />
              <div :class="`banner-item-logo-title-${idx}`">{{ item.iconTitle }}</div>
            </div>
            <div class="banner-item-title" :class="`banner-item-title-${idx}`">{{ item.title }}</div>
            <div class="banner-item-description">{{ item.description }}</div>
            <CustomAniButton v-if="!isMobile" text="了解更多" ghost @click.stop="onLearnMore(item.link)" />
          </div>
        </div>
      </tiny-carousel-item>
    </tiny-carousel>
    <div class="home-slogan-content">
      <div class="home-video-wrap">
        <div class="home-video-tag">
          <img :src="$pub('images/home/slogan/example.svg')" loading="lazy" alt="example" />
          以企业出差场景为例
        </div>
        <div class="home-video-content">
          <div class="home-video-item">
            <h3>应用智能化改造前</h3>
            <span>
              员工需要在不同终端手动操作来完成流程，比如在移动端填写出差申请，在Web端填写外出公干申请，在桌面端添加日程安排等
            </span>
          </div>
          <div class="home-video-item">
            <h3>应用智能化改造后</h3>
            <span>
              员工只需在统一的AI对话框，通过自然语言让智能体自主规划任务，自动完成不同端的出差申请、外出公干、添加日程等流程
            </span>
          </div>
        </div>
        <div class="home-video">
          <video
            ref="videoRef"
            id="master_control"
            class="video video-player"
            controls
            preload="metadata"
            width="1080"
            :poster="postUrl"
          >
            <source :src="$pub('images/home/slogan/business_trip.mp4')" type="video/mp4" />
          </video>
        </div>

        <tiny-link class="home-video-link" @click="onLinkClick">
          <template #icon>
            <IconArrowRight></IconArrowRight>
          </template>
          查看其他应用智能化改造后提升效率的案例
        </tiny-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { TinyLink, TinyCarousel, TinyCarouselItem } from '@opentiny/vue'
import { $pub } from '../../../tools/utils'
import useWindowSize from '@/tools/useWindowSize.js'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { iconArrowRight } from '@opentiny/vue-icon'
import { bannerList, firstBanner, secondBanner } from './config'
import CustomAniButton from './CustomAniButton.vue'
import FirstCarousel from './FirstCarousel.vue'
import SecondCarousel from './SecondCarousel.vue'

const { isMobile, width } = useWindowSize()

const carouselHeight = computed(() => (isMobile.value ? '200px' : `${Math.max(width.value * 0.286, 300)}px`))
const mobileOrPc = computed(() => (isMobile.value ? 'mobile' : 'pc'))

const bannerListData = ref(bannerList[mobileOrPc.value])

const bannerData1 = ref(firstBanner[mobileOrPc.value])
const bannerData2 = ref(secondBanner[mobileOrPc.value])
const IconArrowRight = iconArrowRight()
const videoRef = ref(null)

const postUrl = $pub('images/home/slogan/video_poster.webp')
const onLinkClick = () => window.open('https://www.bilibili.com/video/BV1YnCKBLE4V', '_blank', 'noopener,noreferrer')
const onLearnMore = (link) => window.open(link, '_blank', 'noopener,noreferrer')
onMounted(() => {
  const posterImg = new Image()
  posterImg.src = postUrl
  posterImg.onload = () => {
    videoRef.value.classList?.add('video--fade-in')
  }
})

watchEffect(() => {
  bannerListData.value = bannerList[mobileOrPc.value]
  bannerData1.value = firstBanner[mobileOrPc.value]
  bannerData2.value = secondBanner[mobileOrPc.value]
  videoRef.value?.classList[isMobile.value ? 'remove' : 'add']('video-player')
})
</script>

<style scoped lang="less">
@import '@/mixin.less';
@import './banner.less';

.home-slogan {
  & > .home-slogan-content {
    .pcPadding(86, 150, 100);
    background: no-repeat center/cover url(@/assets/images/home_slogan_bg.webp);
  }

  .banner-item-wrap {
    .banner-item-logo {
      .banner-item-logo-title-0,
      .banner-item-logo-title-1 {
        margin-top: -20px;
      }
      .banner-item-logo-title-1 {
        color: transparent;
        background: linear-gradient(236.57deg, rgba(20, 255, 150, 1), rgba(20, 118, 255, 1) 100%), rgba(0, 0, 0, 0.2);
        background-size: 100% 100%;
        background-clip: text;
      }
    }
    .banner-item-logo-0,
    .banner-item-logo-1 {
      > img {
        width: 65px;
      }
    }

    .banner-item-title-0,
    .banner-item-title-1 {
      margin: 20px 0 20px;
    }
  }

  .btn-container {
    cursor: pointer;
  }
  .link-button:hover .home-title-arrow-icon {
    animation: arrow 1s linear infinite;
  }
  @keyframes arrow {
    0% {
      transform: translate(0);
    }

    50% {
      transform: translate(8px);
    }
    100% {
      transform: translate(0);
    }
  }
  .link-button {
    gap: 8px;
  }

  .home-video-wrap {
    max-width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 24.03px;
    .home-video-tag {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      padding: 6px 16px;
      border-radius: 105px;
      border: 1px solid #191919;
      width: fit-content;
      font-size: 14px;
      line-height: 20px;
    }
    .home-video-content {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      .pcRem(margin-bottom, 20);
      .home-video-item {
        border-radius: 24.03px;
        backdrop-filter: blur(8.8464241027832px);
        background: linear-gradient(229.4deg, rgba(245, 226, 255, 0.3), rgba(229, 239, 255, 0.3) 100%);
        padding: 24px 36px;
        flex: 1;
        h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 22px;
          .pcRem(margin-bottom, 8);
        }
        span {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
    .home-video {
      .video {
        width: 100%;
        box-sizing: border-box;
        border: 8px solid rgba(100, 129, 172, 0.3);
        border-radius: 40px;
        box-shadow: 0px 11px 38px 0px rgba(129, 154, 188, 0.36);
        background: rgba(255, 255, 255, 0.3);
        opacity: 0;
        /* 初始位置：从容器底部向上偏移 50px */
        transform: translateY(50px);
        /* 动画过渡：1秒时长，缓入缓出 */
        transition: opacity 1s ease-out, transform 1s ease-out;
      }
      /* 封面渐显动画：添加类后触发 */
      .video--fade-in {
        opacity: 1;
        transform: translateY(0); /* 回到原位置 */
      }
    }
    .home-video-link {
      margin: 32px auto 0;
      width: fit-content;
      display: block;
    }
  }

  // /* 默认隐藏所有控件 */
  .video-player::-webkit-media-controls {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* 悬浮时显示控件 */
  .video-player:hover::-webkit-media-controls {
    opacity: 1;
  }

  @media screen and (max-width: @break-point) {
    .banner-item-wrap {
      .banner-item-logo {
        .banner-item-logo-title-0,
        .banner-item-logo-title-1 {
          margin-top: -10px;
        }

        .banner-item-title-0,
        .banner-item-title-1 {
          margin: 4px 0 12px;
        }
        .banner-item-title-3 {
          max-width: 175px;
        }
      }
      .banner-item-logo-0,
      .banner-item-logo-1 {
        > img {
          width: 35px;
        }
      }
      .banner-item-logo-2,
      .banner-item-logo-3 {
        gap: 8px;
        > img {
          width: 20px;
        }
      }
    }
    .home-video-wrap {
      .home-video-tag {
        margin: 0 0 10px;
      }
      .home-video-content {
        flex-direction: column;
        gap: 20px;

        .pcRem(margin-bottom, 40);
        .home-video-item {
          padding: 16px;
          border-radius: 12px;
          h3 {
            font-size: 16px;
            line-height: 22px;
            .pcRem(margin-bottom, 8);
          }
          span {
            font-size: 14px;
            line-height: 20px;
            color: rgba(89, 89, 89, 1);
          }
        }
      }
      .home-video {
        .video {
          border-radius: 18px;
          margin-top: 12px;
        }
      }
      .home-video-link {
        margin: 20px auto 0;
      }
    }
  }
}
</style>
