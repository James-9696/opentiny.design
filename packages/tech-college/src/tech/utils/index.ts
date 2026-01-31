import { ref, computed } from 'vue'

const mobileScreenWidth = 814
const width = ref(window.innerWidth)
export const isMobile = computed(() => width.value <= mobileScreenWidth)

const baseUrl = import.meta.env.BASE_URL
export const $pub = (url: string) => baseUrl + url

const originTitle = 'OpenTiny NEXT - 企业智能前端开发解决方案'
export const geneTitle = (title: string) => (title ? `${originTitle} | ${title}` : originTitle)
