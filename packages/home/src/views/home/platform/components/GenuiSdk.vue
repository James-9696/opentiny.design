<template>
  <div class="platform-genui">
    <div class="content">
      <div class="title">
       GenUI SDK <span class="title-sub">生成式 UI</span>
      </div>
      <div class="genui-sub-title">
        增强大模型对话的展示与交互 打造极致顺滑的智能体验
      </div>
      <div  class="descriptions">
        <div class="description">
          <img :src="$pub('images/platform/engine_1.svg')" alt="" loading="lazy" />
          <div>将枯燥的文字变成生动的可交互页面</div>
        </div>
        <div class="description">
          <img :src="$pub('images/platform/engine_1.svg')" alt="" loading="lazy"/>
          <div>极速接入,提供开箱即用的组件</div>
        </div>
        <div class="description">
          <img :src="$pub('images/platform/engine_1.svg')" alt="" loading="lazy"/>
          <div>开发者友好,自定义能力强大且丰富</div>
        </div>
      </div>
      <div class="footer">
        <div class="operation">
          <tiny-button class="button" ghost @click="onDocs">产品文档</tiny-button>
        </div>
      </div>
    </div>
    <img :src="$pub(`images/platform/genui-sdk.webp`)"></img>
  </div>
</template>

<script setup>
import { TinyButton } from '@opentiny/vue';

const onDocs = () => window.open('https://docs.opentiny.design/genui-sdk', '_blank', 'noopener,noreferrer')
</script>

<style lang="less" scoped>
@import '@/mixin.less';

.platform-genui {
  display: flex;
  align-items: center;

  .content {
    .pcRem(width, 616);
    .pcRem(margin-right, 50);

    .title {
      text-align: left;
      .pcRem(font-size, 32);
      .pcRem(line-height, 66);
      margin-bottom: 0;

      .title-sub {
        margin-left: 16px;
        background: linear-gradient(90deg, rgba(203, 67, 168, 1), rgba(44, 95, 239, 1) 56%);
        color: transparent;
        background-clip: text;
      }
    }
    .genui-sub-title {
      font-weight: 400;
      .pcRem(font-size, 24);
      .pcRem(line-height, 62);
      .pcRem(margin-bottom, 60);
    }

    .descriptions {
      display: flex;
      flex-direction: column;
      font-weight: 400;
      .pcRem(gap, 20);
      .pcRem(font-size, 16);
      .pcRem(line-height, 29);
      .pcRem(padding-bottom, 25);

      .description {
        display: flex;
        align-items: flex-start;

        img {
          .pcRem(margin-right, 8);
          .pcRem(margin-top, 4);
        }
      }
    }

    .footer {
      .wait {
        color: rgb(20, 118, 255);
        font-weight: 400;
        .pcRem(font-size, 16);
        .pcRem(line-height, 22);
        .pcMargin(25, 0, 20, 0);
      }

      
    }
  }

  &>img {
    width: 50%;
    height: 50%;
  }
}
</style>
