<template>
  <div class="agent-capability-section">
    <h1 class="main-title">能帮开发者做什么？</h1>
    <p class="sub-title">让Agent可以直接操作页面，低成本让传统前端拥有 AI 自主执行能力</p>

    <div class="cards-wrapper">
      <!-- 问题 -->
      <div class="column">
        <tiny-tag class="section-tag tag-problem" size="medium" effect="light">
          <template #default>
            <span class="tag-inner">
              <img :src="getImgUrl('part-two-a')" class="tag-icon" />
              <span>问题</span>
            </span>
          </template>
        </tiny-tag>
        <div 
          class="card card-small card-problem-bg" 
          :style="{ backgroundImage: `url(${getBgUrl('part-two-d')})` }"
        >
          <tiny-tag type="info" class="card-label">需手动重复操作</tiny-tag>
          <div class="card-title">MCP 无法操作页面</div>
          <div class="card-content">
            员工需要在不同终端手动操作来完成流程，比如在移动端填写出差申请，在Web端填写外出公干申请，在桌面端添加日程安排等
          </div>
        </div>
      </div>

      <!-- 方案 -->
      <div class="column">
        <tiny-tag class="section-tag tag-solution" size="medium" effect="light">
          <template #default>
            <span class="tag-inner">
              <img :src="getImgUrl('part-two-b')" class="tag-icon" />
              <span>方案</span>
            </span>
          </template>
        </tiny-tag>
        <div 
          class="card card-small card-solution-bg" 
          :style="{ backgroundImage: `url(${getBgUrl('part-two-e')})` }"
        >
          <tiny-tag type="info" class="card-label">一句话完成任务</tiny-tag>
          <div class="card-title">变成 MCP 工具操作页面</div>
          <div class="card-content">
            员工只需在统一的AI对话框，通过自然语言让智能体自主规划任务，自动完成不同端的出差申请、外出公干、添加日程等流程
          </div>
        </div>
      </div>

      <!-- 效果 -->
      <div class="column">
        <tiny-tag class="section-tag tag-effect" size="medium" effect="light">
          <template #default>
            <span class="tag-inner">
              <img :src="getImgUrl('part-two-c')" class="tag-icon" />
              <span>效果</span>
            </span>
          </template>
        </tiny-tag>
        <div class="card card-large">
          <tiny-tag type="info" class="card-label">智能体自主完成任务</tiny-tag>
          <div class="card-title">一句话就能完成填表、审批、数据录入</div>
          <div class="card-content">
            保姆级视频，简单易操作，三分钟高完成
          </div>
          <div class="video-player-wrap" @click="openVideo">
            <div class="video-frame">
              <div class="video-poster">
                <div class="play-icon">
                  <img :src="getImgUpdateUrl('play')">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 视频全屏模态框 -->
  <transition name="modal">
    <div v-if="videoVisible" class="video-modal" @click.self="closeVideo">
      <div class="video-modal-body">
        <div class="video-frame">
          <!-- 视频加载骨架屏 -->
          <div v-if="videoLoading" class="video-skeleton">
            <div class="skeleton-shimmer"></div>
            <div class="skeleton-spinner">
              <svg viewBox="0 0 50 50" class="spinner-svg">
                <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="4"/>
                <circle cx="25" cy="25" r="20" fill="none" stroke="#fff" stroke-width="4" 
                  stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="60" class="spinner-circle"/>
              </svg>
            </div>
            <div class="skeleton-text">视频加载中...</div>
          </div>

          <video
            ref="videoRef"
            id="master_control"
            class="video-player"
            controls
            preload="metadata"
            width="1080"
            :poster="posterUrl"
            @play="isPlaying = true"
            @pause="isPlaying = false"
            @waiting="videoLoading = true"
            @canplay="videoLoading = false"
            @loadeddata="videoLoading = false"
            @error="videoLoading = false"
          >
            <source :src="videoSrc" type="video/mp4" />
          </video>

          <!-- 未播放时的播放按钮（带脉冲动画） -->
          <div v-if="!isPlaying && !videoLoading" class="modal-play-btn" @click="playVideo">
            <div class="play-btn-pulse"></div>
            <img :src="getImgUpdateUrl('play')">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { $pub } from '../../../../tools/utils'
import { Tag as TinyTag } from '@opentiny/vue'
import './page-two.less'

const getImgUrl = (name: string) => 
  new URL(`../../../../assets/images/new-icon/next-page/${name}.svg`, import.meta.url).href

const getBgUrl = (name: string) => 
  new URL(`../../../../assets/images/new-icon/next-page/${name}.png`, import.meta.url).href

const getImgUpdateUrl = (name: string) => 
  new URL(`../../../../assets/images/new-icon/floor4/${name}.svg`, import.meta.url).href

// ==================== 视频相关 ====================
const videoVisible = ref(false)
const isPlaying = ref(false)
const videoLoading = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)
const posterUrl = $pub('images/home/slogan/video_poster.webp')
const videoSrc = $pub('images/home/slogan/business_trip.mp4')

const openVideo = () => {
  videoVisible.value = true
  isPlaying.value = false
  videoLoading.value = true
}

const closeVideo = () => {
  videoVisible.value = false
  isPlaying.value = false
  videoLoading.value = false
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }
}

const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play()
  }
}

// 监听模态框打开，预加载视频
watch(videoVisible, (visible) => {
  if (visible && videoRef.value) {
    videoRef.value.load()
  }
})
</script>