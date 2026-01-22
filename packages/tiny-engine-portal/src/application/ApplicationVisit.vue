<template>
  <iframe class="tiny-engine-iframe" :src="tinyEngineUrl"></iframe>
</template>
<script>
import { TINY_ENGINE_DEFAULT_URL, TINY_ENGINE_DESIGNER_URL } from '../controller/utils'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    return {
      tinyEngineUrl: route.name === 'applicationVisit' ? TINY_ENGINE_DEFAULT_URL : TINY_ENGINE_DESIGNER_URL
    }
  }
}
</script>
<style lang="less">
.tiny-engine-iframe {
  width: 100%;
  height: 99%;
  border: none;
}
</style>
