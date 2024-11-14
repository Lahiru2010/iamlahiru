import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import { MotionPlugin } from '@vueuse/motion'
import 'floating-vue/dist/style.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import FloatingVue from 'floating-vue'

import VueNumber from 'vue-number-animation'
const app = createApp(App)

app.use(VueSmoothScroll, {
  duration: 5000,
  updateHistory: false,
})
app.use(VueNumber)
app.use(FloatingVue)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
