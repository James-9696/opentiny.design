<template>
  <div ref="homeRef" class="home">
    <FirstScreen />
    <TechnicalCore />
    <DualEngine />
    <ProductMatrix />
    <RobotComponent />
    <SceneCases />
    <UseUs />
    <Cli />
  </div>
</template>
<script setup>
import { nextTick, onMounted, onUnmounted, ref } from "vue"
import FirstScreen from "./components/FirstScreen.vue"
import TechnicalCore from "./components/TechnicalCore.vue"
import DualEngine from "./components/DualEngine.vue"
import ProductMatrix from "./components/ProductMatrix.vue"
import RobotComponent from "./components/RobotComponent.vue"
import SceneCases from "./components/SceneCases.vue"
import UseUs from "./components/UseUs.vue"
import Cli from "./components/Cli.vue"

const homeRef = ref()
let fadeObserver

const initFadeInUp = async () => {
  if (typeof window === "undefined" || !homeRef.value) return

  await nextTick()

  const sections = homeRef.value.querySelectorAll(".fade-in-up")
  if (!sections.length) return

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"))
    return
  }

  fadeObserver?.disconnect()
  fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
        } else if (entry.intersectionRatio === 0) {
          entry.target.classList.remove("is-visible")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  )

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isVisible) {
      section.classList.add("is-visible")
    }

    fadeObserver?.observe(section)
  })
}

onMounted(() => {
  initFadeInUp()
})

onUnmounted(() => {
  fadeObserver?.disconnect()
  fadeObserver = undefined
})
</script>
<style lang="less" scoped>
.home{
  --max-width: 1440px;
  --mobile-width: calc(100% - 40px);

  :deep(.fade-in-up) {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  :deep(.fade-in-up.is-visible) {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (min-width: 1024px) {
  .home{
    :deep(.first-screen){
      .first-screen-wrap{
        max-width: var(--max-width);
      }
    }
    :deep(.technical-core){
      max-width: var(--max-width);
    }
    :deep(.dual-engine){
      max-width: var(--max-width);
    }
    :deep(.product-matrix){
      .product-matrix-container{
        max-width: var(--max-width);
      }
    }
    :deep(.robot-component){
      max-width: var(--max-width);
    }
    :deep(.scene-cases){
      max-width: var(--max-width);
    }
    :deep(.use-us){
      max-width: var(--max-width);
    }
    :deep(.cli){
      .cli-container{
        max-width: var(--max-width);
      }
    }
  }
}
@media (max-width: 1023px) {
  .home{
    :deep(.first-screen){
      .first-screen-wrap{
        max-width: var(--mobile-width);
      }
    }
    :deep(.technical-core){
      max-width: var(--mobile-width);
    }
    :deep(.dual-engine){
      max-width: var(--mobile-width);
    }
    :deep(.product-matrix){
      .product-matrix-container{
        max-width: var(--mobile-width);
      }
    }
    :deep(.robot-component){
      max-width: var(--mobile-width);
    }
    :deep(.scene-cases){
      max-width: var(--mobile-width);
    }
    :deep(.use-us){
      max-width: var(--mobile-width);
    }
    :deep(.cli){
      .cli-container{
        max-width: var(--mobile-width);
      }
    }
  }
}
</style>
