<template>
  <button class="link-button" @click="onClick" :class="{ 'link-button-light': ghost }">
    {{ text }}
    <img class="home-title-arrow-icon" :src="iconUrl" alt="arrow" loading="lazy" />
  </button>
</template>
<script setup>
import { computed } from 'vue'
import { $pub } from '@/tools'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  ghost: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const iconUrl = computed(() => {
  return props.ghost ? $pub('images/home/slogan/arrow-black.svg') : $pub('images/home/slogan/arrow.svg')
})
const onClick = (event) => {
  emit('click', event)
}
</script>
<style scoped lang="less">
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
  color: #fff;
  background: #191919;
  font-size: 18px;
  padding: 12px 40px;
  border-radius: 27px;
  border: 1px solid #191919;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 16px;
  }
}
.link-button-light {
  background: transparent;
  color: #191919;
  border: 1px solid #191919;
}
</style>
