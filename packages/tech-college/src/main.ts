import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import './style.css'
import App from './App.vue'
import { router } from './router'

// createApp(App).use(router).mount('#app')

const mountApp = (TDCommon) => {
  window.tinycommon = new TDCommon(['#header', '#footer'])
  tinycommon.renderHeader()
  tinycommon.renderFooter()
  const app = createApp(App)
  app.use(router).use(createHead()).mount('#app')
}

mountApp(window.TDCommon)
