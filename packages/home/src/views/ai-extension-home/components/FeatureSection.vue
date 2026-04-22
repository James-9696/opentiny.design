<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  // Feature 配置对象
  feature: {
    type: Object,
    required: true,
  },
});

// 使用 computed 确保背景图片被正确追踪
const backgroundImageStyle = computed(() => {
  if (props.feature?.backgroundImage) {
    return { backgroundImage: `url(${props.feature.backgroundImage})` };
  }
  return {};
});
</script>

<template>
  <section
    class="feature-section section"
    :class="[feature.bgClass || 'bg-tech-1']"
    :style="backgroundImageStyle"
  >
    <div
      class="feature-content fade-in-up"
      :class="{ 'reverse-layout': feature.reverse }"
    >
      <div class="feature-text">
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-desc" v-html="feature.description"></p>
      </div>
      <div class="feature-visual">
        <img
          :src="feature.imageSrc"
          :alt="feature.imageAlt"
          class="floating-img"
          :class="feature.delayClass"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import "../common.less";
@import "../components/feature-section.less";

/* ==================== 响应式适配 ==================== */

@media (max-width: 1024px) {
  .feature-content {
    flex-direction: row;
    padding: 0 30px;
    gap: 25px;
  }

  .reverse-layout {
    flex-direction: row-reverse;
  }

  .feature-text {
    padding: 0;
    margin-bottom: 30px;
  }

  .section-title {
    font-size: 32px;
  }

  .feature-desc {
    font-size: 19px;
  }

  .feature-visual {
    justify-content: center;
  }

  .floating-img {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .feature-content {
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
    column-gap: 40px;
  }

  .reverse-layout {
    flex-direction: column;
  }

  .section-title {
    font-size: 32px;
  }

  .feature-desc {
    font-size: 19px;
  }

  .feature-visual {
    width: 100%;
    margin-top: 0;
  }

  .floating-img {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .feature-content {
    gap: 10px;
  }

  .feature-text {
    .title {
      font-size: 20px;
      padding-bottom: 12px;
    }
    .description {
      font-size: 14px;
    }
  }
}
</style>
