<template>
  <HeaderComponent
    @scrollToPortfolioView="scrollToPortfolio"
    @scrollToAboutView="scrollToAbout"
    @scrollToHomeView="scrollToHome"
    @scrollToContactView="scrollToContact"
  ></HeaderComponent>
  <div ref="homeRef">
    <Home></Home>
  </div>
  <div ref="aboutRef">
    <About></About>
  </div>
  <div ref="portfolioRef">
    <Portfolio></Portfolio>
  </div>  
  <div ref="contactRef">
    <Contact></Contact>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'
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
    Portfolio,
    Contact,
  },
  computed: {
    windowHeightComp: function () {
      return this.$store.state.windowHeight
    },
    isMobileComp: function () {
      return this.$store.state.isMobile
    },
  },
  mounted() {
    this.onResize()
    this.$nextTick(() => {
      this.scrollToHome()
      window.addEventListener('resize', this.onResize)
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToContact: function () {
      const refVar = 'contactRef'
      this.$store.commit('setActivePage', 4)
      this.$refs[refVar].scrollIntoView({ behavior: 'smooth' })
    },    
    scrollToPortfolio: function () {
      const refVar = 'portfolioRef'
      this.$store.commit('setActivePage', 3)
      this.$refs[refVar].scrollIntoView({ behavior: 'smooth' })
    },
    scrollToAbout: function () {
      const refVar = 'aboutRef'
      this.$store.commit('setActivePage', 2)
      this.$refs[refVar].scrollIntoView({ behavior: 'smooth' })
    },
    scrollToHome: function () {
      const refVar = 'homeRef'
      this.$store.commit('setActivePage', 1)
      this.$refs[refVar].scrollIntoView({ behavior: 'smooth' })
    },
    onResize() {
      this.$store.commit('setWindowHeight', window.innerHeight)

      if (window.innerWidth < 992) {
        this.$store.commit('setIsMobile', true)
      } else {
        this.$store.commit('setIsMobile', false)
      }
    },
    handleScroll() {
      const aboutTop = this.$refs.aboutRef.getBoundingClientRect().top
      const homeTop = this.$refs.homeRef.getBoundingClientRect().top
      const portfolioTop = this.$refs.portfolioRef.getBoundingClientRect().top
      const contactTop = this.$refs.contactRef.getBoundingClientRect().top
      if (homeTop < 100) {
        this.$store.commit('setIsScrollDark', false)
        this.$store.commit('setActivePage', 1)
      }
      if (aboutTop < 100) {
        this.$store.commit('setIsScrollDark', true)
        this.$store.commit('setActivePage', 2)
      }
      if (portfolioTop < 100) {
        this.$store.commit('setActivePage', 3)
      }      if (contactTop < 100) {
        this.$store.commit('setActivePage', 4)
      }

      console.info('top :' + top)
    },
  },
}
</script>

<style lang="scss">
.name {
}
</style>
