<script setup>
// 导入图片资源
import heroBgWhite from "@/assets/images/home/next-sdk-home/banner-bg.svg";
import heroBgPc from "@/assets/images/home/next-sdk-home/banner-img.svg";
</script>

<template>
  <div class="hero section">
    <div class="hero-content">
      <h1 class="title">
        <span class="title-us">NEXT-SDKs</span> <br />前端智能应用开发工具包
      </h1>
      <p class="subtitle">让你的前端应用变成智能应用</p>
      <p class="description">只需四步，即可接入 AI 能力，让应用智能化开发更简单高效</p>
      <div class="cta-group">
        <a
          href="https://docs.opentiny.design/next-sdk/guide/"
          target="_blank"
          class="btn primary"
          >快速开始</a
        >
        <a
          href="https://docs.opentiny.design/next-sdk/guide/api-client.html"
          target="_blank"
          class="btn secondary"
          >API 文档</a
        >
      </div>
    </div>
    <div class="hero-img">
      <img :src="heroBgPc" alt="NEXT-SDKs" />
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../common.less";

/* Hero Section 特有样式 */
.hero {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 60px;
  background-image: url(@/assets/images/home/next-sdk-home/banner-bg.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  padding: 20px 0 0 40px;
  padding-top: 0;
  animation: fadeInUp 1s ease-out;
}

.hero-img {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 1s ease-out;

  img {
    width: 1000px;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
    border-radius: 20px;
  }
}

.cta-group {
  display: flex;
  gap: 30px;
}

/* ==================== 响应式适配 ==================== */

/* 平板横屏 (1024px - 1440px) */
@media (max-width: 1024px) {
  .hero {
    padding: 40px 30px;
  }

  .hero-img {
    width: 100%;
    margin-top: 40px;
    img {
      width: 100%;
    }
  }
}

/* 平板竖屏 / 大手机 (768px - 1024px) */
@media (max-width: 768px) {
  .hero {
    padding: 30px 20px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 0px;
  }

  .hero-content {
    padding: 20px;
  }

  .cta-group {
    gap: 15px;
    width: 100%;
    justify-content: center;
  }
}

/* 小手机 (< 480px) */
@media (max-width: 480px) {
  .hero {
    padding: 20px 15px;
  }
}
</style>
