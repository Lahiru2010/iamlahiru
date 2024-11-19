<template>
  <div class="header">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      :class="{ 'navbar-scrolled': isScrollDarkComp }"
    >
      <div class="container-fluid">
        <a class="navbar-brand" v-bind:href="currentUrl">
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
                :class="{ active: activePageComp == 1 }"
                aria-current="page"
                href="javascript:;"
                v-on:click="scrollToHome"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:;"
                class="nav-link"
                :class="{ active: activePageComp == 2 }"
                v-on:click="scrollToAbout"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:;"
                class="nav-link"
                :class="{ active: activePageComp == 3 }"
                v-on:click="scrollToPortfolio"
                >Portfolio</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:;"
                class="nav-link"
                :class="{ active: activePageComp == 3 }"
                v-on:click="scrollToPortfolio"
                >Contact</a
              >
            </li>
            <!-- <li class="nav-item">
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
    return {
      windowTop: 0,
      darkHeader: false,
      isHome: false,
      isAbout: false,
      isPortfolio: false,
      clickedPage: 1,
      currentUrl: location.toString(),
    }
  },
  emits: ['scrollToAboutView', 'scrollToHomeView', 'scrollToPortfolioView'],
  props: {
    msg: String,
  },
  components: {},
  computed: {
    isScrollDarkComp: function () {
      return this.$store.state.isScrollDark
    },
    activePageComp: function () {
      return this.$store.state.activePage
    },
    scrollCurrentPageComp: function () {
      return this.$store.state.scrollCurrentPage
    },
  },
  methods: {
    scrollToPortfolio: function () {
      this.isHome = false
      this.isAbout = false
      this.isPortfolio = true

      this.$emit('scrollToPortfolioView')
    },
    scrollToAbout: function () {
      this.isHome = false
      this.isAbout = true
      this.isPortfolio = false
      this.$emit('scrollToAboutView')
    },
    scrollToHome: function () {
      this.isHome = true
      this.isAbout = false
      this.isPortfolio = false
      this.$emit('scrollToHomeView')
    },
  },
  created() {},
}
</script>

<style lang="scss">
.header {
  .navbar-toggler-icon {
    border-radius: 3px;
    height: 36px;
  }

  .navbar-toggler {
    &:focus {
      box-shadow: 0 0 0px 1px #ff1e56;
      border-color: #ff1e56 !important;
    }
  }
  .navbar-scrolled {
    transition: all 0.5s;
    background-color: rgba(31, 31, 32, 0.549) !important;
    border-color: rgba(54, 54, 58, 0.702);
    color: #fff;
    .navbar-toggler {
      .navbar-toggler-icon {
        background: url('../assets/images/nav-bar.png');
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 3px;
        border-color: #9b9d9f;
      }
    }

    .navbar-collapse {
      .navbar-nav {
        @media (max-width: 992px) {
          border-top: 1px solid #333333;
        }
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
