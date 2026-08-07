<template>
  <div class="ai-guide">
    <div class="guide-inner">
      <!-- 标题区域 -->
      <div class="guide-header">
        <div class="guide-title">带你三分钟改造智能应用</div>
        <div class="guide-subtitle">Web 应用也能够定义 MCPServer，实现各个平台都能调用 WebMCP</div>
      </div>

      <!-- 内容区域 -->
      <div class="guide-layout">
        <!-- 左侧大卡片 -->
        <div class="demo-video-card">
          <div class="video-card-title">视频教程手把手带你改造</div>
          <div class="video-card-desc">
            引入 OpenTiny NEXT 对应用进行智能化改造后，可以使用个人手机扫不同端应用的二维码，用自然语言向AI智能体提需求，就能自主规划任务，自动完成。
          </div>
          <div class="video-card-tags">
            <img class="tag-icon" :src="getImgUpdateUrl('video-icon')" />
            <tiny-tag type="primary"><span class="tag-span">视频以企业出差场景为例</span></tiny-tag>
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
          <!-- 查看更多 -->
          <div class="video-player-describe">
            <a class="video-player-describe-a" href="https://www.bilibili.com/video/BV1YnCKBLE4V" target="_blank" rel="noopener noreferrer">查看其他案例</a>
          </div>
        </div>

        <!-- 右侧上下卡片 -->
        <div class="compare-cards">
          <div class="compare-card">
            <div class="compare-badge">Before</div>
            <div class="compare-card-body">
              <div class="compare-card-text">
                <div class="compare-card-title">应用智能化改造前</div>
                <div class="compare-card-desc">
                  员工需要在不同终端手动操作来完成流程，比如在移动端填写出差申请，在Web端填写外出公干申请，在桌面端添加日程安排等。
                </div>
                <div class="compare-card-tags">
                  <tiny-tag type="info" light>需手动重复操作</tiny-tag>
                </div>
              </div>
              <div class="compare-card-image"></div>
            </div>
          </div>
          <div class="compare-card">
            <div class="compare-badge">After</div>
            <div class="compare-card-body">
              <div class="compare-card-text">
                <div class="compare-card-title">应用智能化改造后</div>
                <div class="compare-card-desc">
                  员工只需在统一的AI对话框，通过自然语言让智能体自主规划任务，自动完成不同端的出差申请、外出公干、添加日程等流程。
                </div>
                <div class="compare-card-tags">
                  <tiny-tag type="info">一句话完成任务</tiny-tag>
                </div>
              </div>
              <div class="compare-card-after-image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 视频全屏遮罩 -->
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
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { TinyTag } from '@opentiny/vue'
import { $pub } from '../../../tools/utils'
import './index.less'

const videoVisible = ref(false)
const isPlaying = ref(false)
const videoLoading = ref(false)
const videoRef = ref(null)
const posterUrl = $pub('images/home/slogan/video_poster.webp')
const videoSrc = $pub('images/home/slogan/business_trip.mp4')
const getImgUpdateUrl = (name) => new URL(`../../../assets/images/new-icon/floor4/${name}.svg`, import.meta.url).href


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
