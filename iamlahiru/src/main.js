import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import { MotionPlugin } from '@vueuse/motion'
import 'floating-vue/dist/style.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import FloatingVue from 'floating-vue'
import { createStore } from 'vuex'
import VueNumber from 'vue-number-animation'
// Create a new store instance.
const windowHeight = createStore({
  state() {
    return {
      windowHeight: 0,
      isMobile: false,
      isScrollDark: false,
      activePage: 0,
      scrollCurrentPage: 1,
    }
  },
  mutations: {
    setWindowHeight(state, value) {
      state.windowHeight = value
    },
    setIsMobile(state, value) {
      state.isMobile = value
    },
    setIsScrollDark(state, value) {
      state.isScrollDark = value
    },
    setActivePage(state, value) {
      state.activePage = value
    },
    setScrollCurrentPage(state, value) {
      state.scrollCurrentPage = value
    },
  },
})
const app = createApp(App)
app.use(VueSmoothScroll, {
  duration: 5000,
  updateHistory: false,
})
app.use(VueNumber)
app.use(windowHeight)
app.use(FloatingVue, {
  themes: {
    'info-tooltip': {
      $extend: 'tooltip',
      $resetCss: true,
    },
  },
})
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
