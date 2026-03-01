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
        <h3 class="title">{{ feature.title }}</h3>
        <p class="description" v-html="feature.description"></p>
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

/* FeatureSection 特有样式 */
.feature-section.section {
  position: relative;
  overflow: hidden;
  min-height: 75vh;
}

.feature-content {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 100px;
}

.reverse-layout {
  flex-direction: row-reverse;
}

.section-title {
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.feature-desc {
  font-size: 22px;
  line-height: 1.8;
  color: var(--text-secondary);
}

.feature-visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.floating-img {
  width: 100%;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  border-radius: 24px;
  transition: transform 0.3s ease;
}

.floating-img:hover {
  transform: scale(1.02);
}

.delay-1 {
  animation-delay: 1s;
}

.delay-2 {
  animation-delay: 2s;
}

.delay-3 {
  animation-delay: 3s;
}

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
