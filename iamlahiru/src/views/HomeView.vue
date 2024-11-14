<template>
  <HeaderComponent
    @scrollToAboutView="scrollToAbout"
    @scrollToHomeView="scrollToHome"
  ></HeaderComponent>
  <div ref="homeRef">
    <Home></Home>
  </div>
  <div ref="aboutRef">
    <About></About>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
export default {
  name: 'HomeView',
  data() {
    return {}
  },
  props: {
    msg: String,
  },
  components: {
    HeaderComponent,
    Home,
    About,
  },
  mounted() {},
  methods: {
    scrollToAbout: function () {
      const refVar = 'aboutRef'
      // this.$refs[refVar].scrollIntoView({ behavior: 'smooth' })
    },
    scrollToHome: function () {
      const refVar = 'homeRef'
      // this.$refs[refVar].scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss">
.name {
}
</style>
