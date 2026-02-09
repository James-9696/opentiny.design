<template>
  <div class="tiny-engine-app-visit">
    <div id="loading" class="tiny-engine-loading"></div>
    <iframe class="tiny-engine-iframe" :src="tinyEngineUrl"></iframe>
  </div>
</template>
<script>
import { TINY_ENGINE_DEFAULT_URL, TINY_ENGINE_DESIGNER_URL } from '../controller/utils'
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
import { Loading } from '@opentiny/vue'

export default {
  setup() {
    const route = useRoute()
    const tinyEngineUrl = route.name === 'applicationVisit' ? TINY_ENGINE_DEFAULT_URL : TINY_ENGINE_DESIGNER_URL

    const loadingInstance = ref(null)
    //回调函数
    const openAppNewTab = (event) => {
      if (event.data.type === 'openNewTab') {
        const href = window.location.href.split('?')[0]
        const searchParams = event.data.url.split('?')[1]
        window.open(`${href}?${searchParams}`)
      }
    }
    window.addEventListener('message', openAppNewTab, false)

    onMounted(() => {
      const url = new URL(window.location.href)
      const type = url.hash.split('?')[1]
        if (url.hash.includes('id')) {
          const iframe = document.querySelector('iframe')
          iframe.src = `${TINY_ENGINE_DESIGNER_URL}?${type}`
        }
      loadingInstance.value = Loading.service({
        text: '加载中...',
        target: document.getElementById('loading'),
        size: 'large'
      })
      document.querySelector('iframe').onload = function () {
        document.querySelector('iframe').style.display = 'block'
        document.getElementById('loading').style.display = 'none'
      }
    })

    onUnmounted(() => {
      window.removeEventListener('message', openAppNewTab)
    })
    return {
      tinyEngineUrl
    }
  }
}
</script>
<style lang="less">
.tiny-engine-app-visit{
  height: 100vh;
}
.tiny-engine-iframe {
  width: 100%;
  height: 99%;
  border: none;
}
.tiny-engine-loading {
  display: block;
  height: 100vh;
}
</style>
