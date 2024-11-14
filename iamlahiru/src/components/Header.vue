<template>
  <div class="header">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      :class="{ 'navbar-scrolled': darkHeader }"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div class="logo"><img src="../assets/images/logo.png" /></div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: isHome }"
                aria-current="page"
                href="#"
                v-on:click="scrollToHome"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" :class="{ active: isAbout }" v-on:click="scrollToAbout"
                >About</a
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return { windowTop: 0, darkHeader: false, isHome: true, isAbout: false }
  },
  emits: ['scrollToAboutView', 'scrollToHomeView'],
  props: {
    msg: String,
  },
  components: {},

  methods: {
    scrollToAbout: function () {
      this.isHome = false
      this.isAbout = true
      this.$emit('scrollToAboutView')
    },
    scrollToHome: function () {
      this.isHome = true
      this.isAbout = false
      this.$emit('scrollToHomeView')
    },
    handleScroll(event) {
      this.windowTop = window.top.scrollY
      console.info(this.windowTop)
      if (this.windowTop > 1000) {
        this.darkHeader = true
      } else {
        this.darkHeader = false
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss">
.header {
  .navbar-scrolled {
    transition: all 0.5s;
    background-color: #1f1f20 !important;
    border-color: #2e2e2f;
    color: #fff;

    .navbar-collapse {
      .navbar-nav {
        .nav-item {
          * {
            cursor: pointer;
          }
          .nav-link {
            color: #fff !important;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
