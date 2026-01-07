<template>
  <tiny-carousel-item @click="onDocs">
    <div class="banner-item-wrap" :style="{ background: `no-repeat center/cover url(${data.bg})` }">
      <div class="banner-item">
        <div class="banner-item-logo" :class="`banner-item-logo-${1}`">
          <img :src="data.icon" class="banner-item-logo-icon" loading="lazy" />
          <div :class="`banner-item-logo-title-${1}`">{{ data.iconTitle }}</div>
        </div>
        <div class="banner-item-title">
          {{ data.title }}<span class="banner-item-title1">{{ data.title1 }}</span>
        </div>
        <div class="banner-item-description">{{ data.description }}</div>
        <CustomAniButton v-if="!isMobile" text="立即体验" @click.stop="onPlayground" />
        <CustomAniButton v-if="!isMobile" text="产品文档" ghost @click.stop="onDocs" />
      </div>
    </div>
  </tiny-carousel-item>
</template>

<script setup>
import { TinyCarouselItem } from '@opentiny/vue'
import CustomAniButton from './CustomAniButton.vue'
import useWindowSize from '@/tools/useWindowSize.js'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
const { isMobile } = useWindowSize()

const onPlayground = () => window.open('https://playground.opentiny.design/genui-sdk', '_blank', 'noopener,noreferrer')
const onDocs = () => window.open('https://docs.opentiny.design/genui-sdk', '_blank', 'noopener,noreferrer')
</script>

<style scoped lang="less">
@import '@/mixin.less';
@import './banner.less';

.banner-item-wrap {
  .banner-item-title1 {
    margin-left: 16px;
    background: linear-gradient(90deg, rgba(203, 67, 168, 1), rgba(44, 95, 239, 1) 56%);
    color: transparent;
    background-clip: text;
  }
}
@media screen and (max-width: @break-point) {
  .banner-item-wrap {
    .banner-item-logo {
      gap: 8px;
      > img {
        width: 20px;
      }
    }
    .banner-item-title1 {
      display: block;
      margin-left: 0;
    }
  }
}
</style>
