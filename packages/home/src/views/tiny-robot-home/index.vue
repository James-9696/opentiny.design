<template>
  <div class="home">
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
import FirstScreen from "./FirstScreen.vue"
import TechnicalCore from "./TechnicalCore.vue"
import DualEngine from "./DualEngine.vue"
import ProductMatrix from "./ProductMatrix.vue"
import RobotComponent from "./RobotComponent.vue"
import SceneCases from "./SceneCases.vue"
import UseUs from "./UseUs.vue"
import Cli from "./Cli.vue"
</script>
<style lang="less" scoped>
.home{
  --max-width: 1440px;
  --mobile-width: calc(100% - 40px);
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