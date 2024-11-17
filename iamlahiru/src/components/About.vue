<template>
  <div class="about" v-bind:style="[!isMobileComp ? { height: windowHeightComp + 'px' } : '']">
    <div class="about-page" v-motion-slide-visible-bottom :duration="800" :delay="200">
      <div class="about-container">
        <div class="about-details-container">
          <div class="iml-section">
            <div class="iml-section-inner">
              <div class="iml-section-left">
                <div class="iml-sub-title">Want to know a little about me?</div>
                <div class="para-content">
                  <p>
                    From a young age, I've been captivated by the world of creative arts, drawn to
                    the colors, forms, and designs that spark imagination and bring ideas to life.
                    This early passion naturally evolved into a love for UI/UX design—a field where
                    creativity and functionality meet. I always dreamed of a career where I could
                    blend my artistic instincts with my technical skills, designing interfaces that
                    are both beautiful and seamlessly functional.
                  </p>
                  <p>
                    Since entering the IT field in 2014, I’ve dedicated over nine years to refining
                    my skills in front-end development and UI/UX design. With a deep-rooted passion
                    for both design and coding, I find joy in creating seamless, impactful digital
                    experiences that feel intuitive and engaging. This blend of creativity and
                    technical expertise has become my signature, guiding me as I continue to craft
                    user-centered solutions that reflect my vision and dedication.
                  </p>
                </div>
              </div>
              <div class="iml-section-right">
                <img src="../assets/images/my-self.png" alt="Lahiru Chathuranga" />
              </div>
            </div>
            <a
              href="https://iamlahiru.com/resume/Resume_Lahiru_Chathuranga.pdf"
              target="_blank"
              class="btn-resume"
              >My Resume</a
            >
          </div>
          <div class="iml-section">
            <div class="iml-section-left">
              <div class="iml-sub-title">Tools behind my pixel magic.</div>
              <div class="para-content">
                <div class="skill-icons-container">
                  <div class="skill-icon-row">
                    <div class="skill-icon js" v-tooltip="'JavaScript'"></div>
                    <div class="skill-icon html" v-tooltip="'HTML5'"></div>
                    <div class="skill-icon css" v-tooltip="'CSS3'"></div>
                    <div class="skill-icon jquery" v-tooltip="'jQuery'"></div>
                    <div class="skill-icon vue" v-tooltip="'Vue.js'"></div>
                    <div class="skill-icon angular" v-tooltip="'Angular'"></div>
                    <div class="skill-icon react" v-tooltip="'React'"></div>
                    <div class="skill-icon github" v-tooltip="'github'"></div>
                    <div class="skill-icon npm" v-tooltip="'npm'"></div>
                    <div class="skill-icon sass" v-tooltip="'Sass'"></div>
                    <div class="skill-icon bootstrap" v-tooltip="'Bootstrap'"></div>
                    <div class="skill-icon vscode" v-tooltip="'Visual Studio Code'"></div>
                    <div class="skill-icon ps" v-tooltip="'Adobe Photoshop'"></div>
                    <div class="skill-icon ai" v-tooltip="'Adobe Illustrator'"></div>
                    <div class="skill-icon xd" v-tooltip="'Adobe XD'"></div>
                    <div class="skill-icon figma" v-tooltip="'Figma'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="image-container">
          <img src="../assets/images/my-self.png" alt="Lahiru Chathuranga" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {}
  },
  props: {
    msg: String,
  },
  computed: {
    windowHeightComp: function () {
      return this.$store.state.windowHeight
    },
    isMobileComp: function () {
      return this.$store.state.isMobile
    },
  },
  components: {},

  methods: {},
  mounted() {},
  unmounted() {},
  created() {},
}
</script>

<style lang="scss">
.about {
  background-color: #1f1f20;
  background: linear-gradient(90deg, rgb(24 23 29) 0%, rgb(34 34 37) 49%, rgb(39 39 47) 100%);
  padding: 0 42px !important;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding-top: 150px !important;

  @media (max-width: 1600px) {
    padding-top: 372px !important;
  }
  @media (max-width: 992px) {
    padding-top: 0px !important;
  }
  .about-page {
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;
    .about-container {
      display: flex;
      padding: 0;
      .about-details-container {
        width: 70%;
        padding-right: 120px;
        box-sizing: border-box;

        @media (max-width: 992px) {
          padding: 118px 0 60px 0;
        }
        .iml-section {
          padding: 30px 0;

          @media (max-width: 1200px) {
            .iml-section-inner {
              display: flex;

              .iml-section-right {
                display: flex;
                align-items: center;
                img {
                  width: 288px;
                }
              }
            }
          }
          @media (max-width: 768px) {
            .iml-section-inner {
              display: flex;
              flex-direction: column;
              .iml-section-right {
                // display: none;
                display: flex;
                justify-content: center;
              }
            }
          }
          @media (min-width: 1200px) {
            .iml-section-right {
              display: none;
            }
          }
          .iml-section-left {
            .iml-sub-title {
              font-size: 26px;
              font-weight: 500;
              margin-bottom: 30px;
            }

            .para-content {
              margin-bottom: 50px;
              p {
                font-size: 18px;
                font-weight: 400;
              }
            }
            .skill-icons-container {
              .skill-icon-row {
                display: flex;
                gap: 30px;
                margin-bottom: 30px;
                flex-wrap: wrap;
                max-width: 400px;
                max-width: 800px;
                .skill-icon {
                  width: 70px;
                  height: 70px;
                  background-color: #2b2b2b;
                  border-radius: 70px;
                  border: 1px solid #353535;
                  background-repeat: no-repeat;
                  background-size: 50px;
                  background-position: center;
                  transition: all 0.5s;
                  &:hover {
                    transform: scale(1.1);
                    background-color: #353535;
                  }
                  &.js {
                    background-image: url('../assets/images/techs/js.png');
                  }
                  &.html {
                    background-image: url('../assets/images/techs/html.png');
                  }
                  &.css {
                    background-image: url('../assets/images/techs/css.png');
                  }
                  &.jquery {
                    background-image: url('../assets/images/techs/jquery.png');
                  }
                  &.vue {
                    background-image: url('../assets/images/techs/vue.png');
                  }
                  &.angular {
                    background-image: url('../assets/images/techs/angular.png');
                  }
                  &.react {
                    background-image: url('../assets/images/techs/react.png');
                  }
                  &.github {
                    background-image: url('../assets/images/techs/github.png');
                  }

                  &.ps {
                    background-image: url('../assets/images/techs/ps.png');
                  }
                  &.ai {
                    background-image: url('../assets/images/techs/ai.png');
                  }
                  &.xd {
                    background-image: url('../assets/images/techs/xd.png');
                  }
                  &.figma {
                    background-image: url('../assets/images/techs/figma.png');
                  }
                  &.bootstrap {
                    background-image: url('../assets/images/techs/bootstrap.png');
                  }
                  &.vscode {
                    background-image: url('../assets/images/techs/vscode.png');
                  }
                  &.npm {
                    background-image: url('../assets/images/techs/npm.png');
                  }
                  &.sass {
                    background-image: url('../assets/images/techs/sass.png');
                  }
                }
              }
            }
          }

          .btn-resume {
            background-color: #3e3a4d;
            color: #ffffff;
            font-size: 16px;
            font-weight: 500;
            width: fit-content;
            border-radius: 10px;
            padding: 8px 15px;
            text-decoration: none;
            transition: all 0.5s;
            display: block;
            box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(0, 0, 0, 0.9) !important;

            @media (max-width: 768px) {
              margin: auto;
            }
            &:hover {
              transform: scale(1.03);
              background-color: #9745ff;
            }
            &:active {
              transform: scale(1);
            }
          }
        }
      }

      .image-container {
        width: 30%;
        position: relative;
        display: flex;
        align-items: center;

        @media (max-width: 1200px) {
          display: none;
        }
        img {
          width: 100%;
        }
      }

      @media (max-width: 1200px) {
        flex-direction: column;
        .about-details-container {
          width: 100%;
          padding-right: 0px;
        }
        .image-container {
          width: 100%;
        }
      }
    }
  }
}
</style>
