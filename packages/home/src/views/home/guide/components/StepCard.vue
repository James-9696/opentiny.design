<template>
  <div :class="{
    [state.wrapClass]: true,
    [`${state.wrapClass}-active`]: activated
  }">
    <div :class="`${state.wrapClass}-sub-title`">
      <img :src="$pub(`images/home/guide/step${index + 1}${activated ? '_active' : ''}.svg`)" alt="step" loading="lazy" />
      {{ title }}
    </div>
    <div :class="`${state.wrapClass}-description`" v-if="!isMobile">
      <div v-for="(description, index) in descriptions" :key="index">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import useWindowSize from '@/tools/useWindowSize.js'
import { $pub } from '@/tools'


const props = defineProps({
  title: { type: String, default: '' },
  descriptions: { type: Array, default: () => [] },
  activated: { type: Boolean, default: false },
  index: { type: Number, default: 1 }
})
const { isMobile } = useWindowSize()
const state = reactive({
  wrapClass: 'step-card'
})
</script>

<style lang="less" scoped>
@import '@/mixin.less';

.step-card {
  border: 1px solid rgb(240, 240, 240);
  border-radius: 12px;
  .pcPadding(16);

  &-active {
    background: rgba(247, 248, 251, 1);
  }

  &-title {
    color: rgb(89, 89, 89);
    .pcMargin(8, 0);
  }

  &-sub-title {
    font-weight: 700;
    font-size: 22px;
    color: rgba(25, 25, 25, 1);
    .pcRem(line-height, 36);
    display: flex;
    align-items: center;
    gap: 8px;
    
    @media (max-width: 920px) {
      font-size: 18px;
    }
  }

  &-description {
    color: rgb(89, 89, 89);
    font-weight: 400;
    .pcMargin(8, 0, 0, 0);
    .pcRem(line-height, 28);
    .pcRem(font-size, 16);
  }

  @media screen and (max-width: @break-point) {
    .mobilePadding(14);

    &-sub-title {
      font-size: 14px;
      line-height: 18px;
    }

    &-description {
      font-size: 14px;
      line-height: 18px;
    }
  }
}
</style>
