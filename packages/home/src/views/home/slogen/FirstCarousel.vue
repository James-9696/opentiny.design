<template>
  <tiny-carousel-item @click.stop="onDocs">
    <div
      class="banner-item-wrap home-slogan-top-wrap"
      :style="{ background: `no-repeat center/cover url(${data.bg})` }"
    >
      <div class="home-slogan-top">
        <img class="home-title-svg" :src="$pub('images/home-title.svg')" loading="lazy" />
        <div class="home-title">{{ data.title }}</div>
        <div class="home-title-description">
          {{ data.descriptionA1 }}
        </div>
        <div class="home-title-description1">
          {{ data.descriptionA2 }}
        </div>
        <div class="home-title-buttons" v-if="!isMobile">
          <CustomAniButton text="开发文档" @click.stop="onDocs" />
          <CustomAniButton text="立即体验" ghost @click.stop="handleExperience" />
        </div>
      </div>
    </div>
  </tiny-carousel-item>
</template>
<script setup>
import { TinyCarouselItem } from '@opentiny/vue'
import { $pub } from '@/tools'
import CustomAniButton from './CustomAniButton.vue'
import useWindowSize from '@/tools/useWindowSize.js'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
const { isMobile } = useWindowSize()

const onDocs = () => window.open('https://docs.opentiny.design', '_blank', 'noopener')
const handleExperience = () => window.open('https://ai.opentiny.design/tar/', '_blank', 'noopener')
</script>
<style scoped lang="less">
@import '@/mixin.less';
@import './banner.less';

.home-slogan-top-wrap {
  .home-slogan-top {
    max-width: 1280px;
    width: 100%;
    .home-title {
      .pcRem(font-size, 52);
      font-weight: 600;
      background: linear-gradient(90deg, rgba(203, 67, 168, 1), rgba(44, 95, 239, 1) 56%);
      color: transparent;
      background-clip: text;
    }

    .home-title-svg {
      .pcRem(width, 430);
      .pcRem(margin-bottom, 28);
    }

    .home-title-description {
      .pcRem(font-size, 24);
      line-height: 32px;
      .pcMargin(20, auto, 10);
      > span {
        color: #1476ff;
      }
    }
    .home-title-description1 {
      color: rgba(128, 128, 128, 1);
      .pcRem(font-size, 18);
      .pcRem(margin-bottom, 32);
      font-weight: 300;
      line-height: 28px;
    }
  }
}
@media screen and (max-width: @break-point) {
  .home-slogan-top-wrap {
    .home-slogan-top {
      .home-title {
        font-size: 20px;
      }

      .home-title-svg {
        width: 124px;
        padding-bottom: 16px;
      }

      .home-title-description,
      .home-title-description1 {
        font-size: 14px;
        line-height: 20px;
        color: rgba(128, 128, 128, 1);
      }
    }
  }
}
</style>
