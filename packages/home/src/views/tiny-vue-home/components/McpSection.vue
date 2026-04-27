<script setup>
import { reactive, inject, ref, onMounted, computed } from "vue";
import { iconArrowRight } from "@opentiny/vue-icon";
// 导入图片资源
import skill_1 from "@/assets/images/home/tinyvue-home/web/skill_1.png";
import skill_2 from "@/assets/images/home/tinyvue-home/web/skill_2.png";
import skill_3 from "@/assets/images/home/tinyvue-home/web/skill_3.png";
import mcpBg from "@/assets/images/home/tinyvue-home/web/welcome.webp";
// 手机端静态资源
import mcpBgMobile from "@/assets/images/home/tinyvue-home/mobile/welcome.webp";

const IconArrowRight = iconArrowRight();

// 从父组件注入
const isMobile = inject("isMobile");
const initFadeInUp = inject("initFadeInUp");

// 使用 computed 确保 Vite 在构建时能正确追踪图片资源
const backgroundImageUrl = computed(() => {
  // 确保两个图片都被引用，这样 Vite 才能正确打包它们
  const bg = isMobile.value ? mcpBgMobile : mcpBg;
  // 返回完整的 URL 字符串，确保构建时路径正确
  return `url(${bg})`;
});

const mcpFeatures = reactive([
  {
    title: "技能即插即用，按需加载",
    description:
      "采用模块化技术架构，支持按需加载、快速接入，无需复杂配置，开箱即用，大幅度降低使用门槛与部署成本。",
    icon: skill_1,
    isReverse: false,
  },
  {
    title: "支持多技能组合，自动编排执行指令",
    description:
      "支持多技能组合与自动编排，可串联、并行调度，自动完成复杂任务。提升全流程自动化执行效率。",
    icon: skill_2,
    isReverse: true,
  },
  {
    title: "稳定输出、减少飘移、降低 token 消耗",
    description:
      "固化标准执行逻辑，有效减少模型飘移，保证输出稳定可靠，同时优化交互，显著降低 token 消耗。",
    icon: skill_3,
    isReverse: false,
  },
]);

// 使用 ref 引用 fade-in-up 元素
const featureHeaderRef = ref(null);
const mcpContentRef = ref(null);

onMounted(() => {
  // 延迟初始化，确保 DOM 已完全渲染
  setTimeout(() => {
    if (initFadeInUp) {
      const refs = [featureHeaderRef.value, mcpContentRef.value].filter(Boolean);
      if (refs.length > 0) {
        initFadeInUp(refs);
      }
    }
  }, 200);
});
</script>

<template>
  <section class="mcp-section section">
    <div ref="featureHeaderRef" class="feature-header pad-t40 fade-in-up">
      <h2 class="feature-title">支持 Agent Skills</h2>
      <p class="description feature-sub-title text-center">
        提供 TinyVue 组件库的 Skills 技能包，让 AI 使用 TinyVue 组件快速搭建 Web 应用
      </p>
    </div>
    <div ref="mcpContentRef" class="mcp-content fade-in-up mt-70 mb-100">
      <div class="feature-grid">
        <div
          v-for="(item, index) in mcpFeatures"
          :key="index"
          class="feature-card"
          :class="{ 'is-reverse': item.isReverse && !isMobile }"
        >
          <div class="feature-icon" :style="{ backgroundImage: `url(${item.icon})` }">
            <!-- <img :src="item.icon" :alt="item.title" /> -->
          </div>
          <div class="mcp-text">
            <h3 class="title mcp-title">{{ item.title }}</h3>
            <p class="mcp-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mcp-image bg-tech-2 pad-t40 mt-40 mb-70"
      :style="{ backgroundImage: backgroundImageUrl }"
    >
      <div class="title pad-t40">TinyVue 智能组件库</div>
      <div class="mcp-desc description">让你的Web 随心所动 无需手动</div>
      <div class="mcp-button">
        <a href="/tiny-vue" target="_blank" class="btn primary"
          >即刻体验</a
        >
        <a
          href="https://docs.opentiny.design/tiny-vue/guide/introduce.html"
          target="_blank"
          class="btn secondary"
          >阅读文档 <IconArrowRight
        /></a>
      </div>
    </div>
  </section>
</template>

<style lang="less">
@import "../common.less";

.tiny-vue-home {
  .mcp-content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .mcp-image {
    width: 100%;
    max-width: 1400px;
    padding-left: 200px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 345px;
    background-repeat: no-repeat;
    .title {
      font-size: 48px;
      font-weight: 700;
      color: #fff;
      line-height: 60px;
      padding-bottom: 16px;
    }
    .mcp-desc {
      font-size: 24px;
      color: #fff;
      line-height: 36px;
      font-weight: 300;
      padding-bottom: 32px;
    }
    .mcp-button {
      display: flex;
      gap: 20px;
      .btn {
        padding: 10px 25px;
        border: none;
        background: transparent;
        color: #fff;
        box-shadow: none;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 18px;
      }
      .primary {
        height: 40px;
        background: transparent;
        border: 1px solid;

        &:hover {
          transform: translateY(-3px);
          box-shadow: none;
        }
      }
      .secondary {
        line-height: 18px;
        font-weight: 400;
      }
      svg {
        fill: #fff;
      }
    }
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: 100%;
  }

  .feature-card.is-reverse {
    flex-direction: column-reverse;
  }

  .feature-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    padding: 32px;
    text-align: left;
    gap: 16px;
    .mcp-text {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .mcp-title {
        font-size: 24px;
        font-weight: 600;
        padding-bottom: 6px;
      }
      .mcp-description {
        font-size: 16px;
        line-height: 32px;
        color: #191919;
        letter-spacing: 1px;
        font-weight: 300;
      }
    }

    .feature-icon {
      width: 100%;
      height: 336px;
      border-radius: 16px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .mcp-section {
    flex-direction: column;
    gap: 60px;
    padding-top: 40px;
  }

  /* ==================== 响应式适配 ==================== */
  @media (max-width: 1024px) {
    .feature-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .mcp-image {
      padding-left: 60px;
      height: 300px;

      .title {
        font-size: 32px;
      }

      .mcp-desc {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 768px) {
    .mcp-section {
      gap: 40px;
      padding-top: 20px;
    }

    .feature-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .feature-card {
      padding: 30px 20px;
      gap: 20px;

      .mcp-text {
        .mcp-title {
          font-size: 20px;
        }
        .mcp-description {
          font-size: 14px;
          line-height: 1.8;
          letter-spacing: 1px;
        }
      }
    }

    .mcp-image {
      padding-left: 30px;
      padding-right: 30px;
      height: auto;
      min-height: 750px;
      align-items: center;
      text-align: center;
      gap: 50px;

      .title {
        font-size: 28px;
        margin-top: 50px;
      }

      .mcp-desc {
        font-size: 16px;
      }

      .mcp-button {
        width: 100%;
        gap: 15px;
        justify-content: center;

        .btn {
          justify-content: center;
          padding: 12px 20px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .mcp-section {
      gap: 30px;
      padding-top: 15px;
    }

    .feature-card {
      padding: 20px 15px;
      gap: 15px;

      .feature-icon {
        width: 100%;
        height: 250px;
      }

      .mcp-text {
        .mcp-title {
          font-size: 18px;
        }
        .mcp-description {
          font-size: 13px;
          line-height: 1.6;
        }
      }
    }

    .mcp-image {
      padding-left: 20px;
      padding-right: 20px;
      min-height: 490px;
      gap: 20px;

      .title {
        font-size: 24px;
        padding-top: 15px;
        margin-top: 20px;
      }

      .mcp-desc {
        font-size: 14px;
      }

      .mcp-button {
        .btn {
          padding: 10px 15px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
