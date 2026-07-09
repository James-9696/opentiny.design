<template>
  <div class="cli">
    <div class="cli-container">
      <div class="cli-title">{{ info.title }}</div>
      <div class="cli-subtitle">{{ info.subtitle }}</div>
      <div class="cli-content">
        <div class="copy-left">
          <img class="icon" :src="cliIcon" alt="cli" />
          <div class="command">{{ info.command }}</div>
        </div>
        <div class="copy-right" @click="copy">
          <img class="copy" :src="copyIcon" alt="复制" />
          <span>复制</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Message } from '@opentiny/vue'
import cliIcon from '@/assets/images/home/tiny-robot-home/cli-icon.svg'
import copyIcon from '@/assets/images/home/tiny-robot-home/copy.svg'

const info = {
  title: '一行命令快速开始',
  subtitle: '助力您实现一站式 AI 能力与应用的快速对接',
  command: 'npx @opentiny/tiny-robot-cli create'
}

const copy = () => {
  const textarea = document.createElement('textarea')

  textarea.value = info.command
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '-9999px'
  textarea.style.left = '-9999px'
  textarea.style.opacity = '0'
  textarea.style.pointerEvents = 'none'

  try {
    document.body.appendChild(textarea)
    textarea.select()
    textarea.setSelectionRange(0, textarea.value.length)
    document.execCommand('copy')
  } finally {
    document.body.removeChild(textarea)
  }
  Message.message({ message: '复制成功', status: 'success' })
}
</script>
<style lang="less" scoped>
.cli {
  background-image: url(@/assets/images/home/tiny-robot-home/cli-bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  .cli-container {
    margin: 120px auto 0;
    padding: 80px 0 93px;
    .cli-title {
      font-size: 44px;
      line-height: 72px;
      text-align: center;
      font-weight: 700;
      background: linear-gradient(90deg, #ff943f, #e449db, #9d36f0, #1273ff);
      background-clip: text;
      color: transparent;
      width: fit-content;
      margin: auto;
    }
    .cli-subtitle {
      font-size: 18px;
      line-height: 25px;
      margin-top: 10px;
      text-align: center;
      color: #595959;
    }
    .cli-content {
      margin: 40px auto 0;
      padding: 14px 12px 14px 24px;
      width: 650px;
      height: 56px;
      border-radius: 199px;
      box-sizing: border-box;
      border: 2px solid transparent;
      background: linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, rgba(148, 171, 255, 0.45), rgba(189, 159, 255, 0.45)) border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .copy-left {
        display: flex;
        align-items: center;
        gap: 8px;
        .icon{
          width: 28px;
        }
        .command {
          font-size: 20px;
        }
      }
      .copy-right {
        width: 92px;
        height: 36px;
        padding: 7px 21px;
        border-radius: 72px;
        background: #191919;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        cursor: pointer;
        .copy{
          width: 16px;
        }
        &:hover{
          background: #595959;
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .cli {
    .cli-container {
      margin: 48px auto 0;
      padding: 40px 0;
      .cli-title {
        font-size: 22px;
        line-height: 24px;
      }
      .cli-subtitle {
        font-size: 12px;
        line-height: 16px;
        margin-top: 8px;
      }
      .cli-content {
        margin: 20px auto 0;
        padding: 9px 4px 9px 10px;
        width: 100%;
        height: 34px;
        .copy-left {
          gap: 4px;
          .icon{
            width: 16px;
          }
          .command {
            font-size: 12px;
          }
        }
        .copy-right {
          width: 56px;
          height: 26px;
          padding: 6px 8px;
          gap: 2px;
          font-size: 12px;
          .copy{
            width: 12px;
          }
        }
      }
    }
  }
}
</style>
