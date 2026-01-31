import { ref, computed } from 'vue'

const mobileScreenWidth = 814
const width = ref(window.innerWidth)
export const isMobile = computed(() => width.value <= mobileScreenWidth)
