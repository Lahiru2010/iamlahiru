<template>
  <!-- <div class="about" v-bind:style="[!isMobileComp ? { height: windowHeightComp + 'px' } : '']"> -->
  <div class="about">
    <div class="about-page" v-motion-slide-visible-bottom :duration="800" :delay="200">
      <div class="about-container">
        <div class="about-section">
          <div class="about-details-container">
            <div class="iml-section">
              <div class="iml-section-inner">
                <div class="iml-section-left">
                  <div class="iml-sub-title">Want to know a little about me?</div>
                  <div class="para-content">
                    <p>
                      From a young age, I've been captivated by the world of creative arts, drawn to
                      the colors, forms, and designs that spark imagination and bring ideas to life.
                      This early passion naturally evolved into a love for UI/UX design—a field
                      where creativity and functionality meet. I always dreamed of a career where I
                      could blend my artistic instincts with my technical skills, designing
                      interfaces that are both beautiful and seamlessly functional.
                    </p>
                    <p>
                      Since entering the IT field in 2014, I’ve dedicated over nine years to
                      refining my skills in front-end development and UI/UX design. With a
                      deep-rooted passion for both design and coding, I find joy in creating
                      seamless, impactful digital experiences that feel intuitive and engaging. This
                      blend of creativity and technical expertise has become my signature, guiding
                      me as I continue to craft user-centered solutions that reflect my vision and
                      dedication.
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

        <div class="journey-container">
          <div class="iml-sub-title">A journey defined by growth.</div>
          <div class="iml-sub-paragraph">
            <p>
              Here’s a glimpse of my career: I’ve worked with multidisciplinary companies on diverse
              web products.
            </p>
          </div>
          <div class="jurney-set">
            <div class="journey-set-row first">
              <div class="journey-item up width-45">
                <div class="journey-item-content">
                  <div class="item-right">
                    <div class="item-icon baby"></div>
                    <div class="item-details">
                      <div class="item-main-title">Hello World</div>
                      <div class="item-sub-title">Earth smells good!</div>
                    </div>
                  </div>
                  <div class="item-left">
                    <div class="item-year">1989</div>
                  </div>
                </div>
                <div class="journey-item-line"></div>
              </div>

              <div class="journey-item down">
                <div class="journey-item-line"></div>
                <div class="journey-item-content">
                  <div class="item-left content-order-0">
                    <div class="item-year">2008</div>
                  </div>
                  <div class="item-right content-order-1">
                    <div class="item-icon school"></div>
                    <div class="item-details">
                      <div class="item-main-title">Left School</div>
                      <div class="item-sub-title">Nalanda College</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="journey-item up width-14">
                <div class="journey-item-content">
                  <div class="item-right">
                    <div class="item-icon graduate"></div>
                    <div class="item-details">
                      <div class="item-main-title">Graduated</div>
                      <div class="item-sub-title">
                        Sri Lanka Institute of Information Technology
                      </div>
                    </div>
                  </div>
                  <div class="item-left">
                    <div class="item-year">2013</div>
                  </div>
                </div>
                <div class="journey-item-line"></div>
              </div>

              <div class="journey-item down">
                <div class="journey-item-line"></div>
                <div class="journey-item-content">
                  <div class="item-left content-order-0">
                    <div class="item-year">2013</div>
                  </div>
                  <div class="item-right content-order-1">
                    <div class="item-icon employee"></div>
                    <div class="item-details">
                      <div class="item-main-title">UI/UX Engineer</div>
                      <div class="item-sub-title">BPO Connect</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="journey-set-row">
              <div class="journey-item up item-order-4 width-30">
                <div class="journey-item-content">
                  <div class="item-right">
                    <div class="item-icon employee"></div>
                    <div class="item-details">
                      <div class="item-main-title">Software Engineer</div>
                      <div class="item-sub-title">MillenniumIT</div>
                    </div>
                  </div>
                  <div class="item-left">
                    <div class="item-year">2014</div>
                  </div>
                </div>
                <div class="journey-item-line"></div>
              </div>

              <div class="journey-item down item-order-3 width-36">
                <div class="journey-item-line"></div>
                <div class="journey-item-content">
                  <div class="item-left content-order-0">
                    <div class="item-year">2017</div>
                  </div>
                  <div class="item-right content-order-1">
                    <div class="item-icon employee"></div>
                    <div class="item-details">
                      <div class="item-main-title">Senior UI/UX Engineer</div>
                      <div class="item-sub-title">findmyfare</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="journey-item up item-order-2 width-15">
                <div class="journey-item-content">
                  <div class="item-right">
                    <div class="item-icon employee"></div>
                    <div class="item-details">
                      <div class="item-main-title">Senior UI/UX Engineer</div>
                      <div class="item-sub-title">Creative Software</div>
                    </div>
                  </div>
                  <div class="item-left">
                    <div class="item-year">2018</div>
                  </div>
                </div>
                <div class="journey-item-line"></div>
              </div>

              <div class="journey-item down item-order-1">
                <div class="journey-item-line last"></div>
                <div class="journey-item-content">
                  <div class="item-left content-order-0">
                    <div class="item-year">2021</div>
                  </div>
                  <div class="item-right content-order-1">
                    <div class="item-icon employee"></div>
                    <div class="item-details">
                      <div class="item-main-title">Associate Lead UI/UX Engineer</div>
                      <div class="item-sub-title">Creative Software</div>
                      <div class="item-sub-label">Current Position</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="journey-item down item-order-0 width-80p">
                <div class="journey-item-line last-item"></div>
                <div class="journey-item-content">
                  <div class="item-left"></div>
                </div>
              </div>
            </div>
          </div>
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
    padding-top: 122px !important;
    height: initial !important;
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
      flex-direction: column;
      .about-section {
        display: flex;
      }
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

      .journey-container {
        .jurney-set {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          height: fit-content;
          position: relative;
          padding-top: 50px;
          overflow: hidden;

          .journey-set-row {
            display: flex;
            height: 212px;

            @media (max-width: 768px) {
              flex-direction: column;
              height: fit-content;
              gap: 50px;
              padding: 0 0px;
            }
            &:after {
              content: '';
              width: 1px;
              height: 121px;
              position: absolute;
              background-color: #fff;
              right: 0;
              bottom: 114px;
              opacity: 0.2;

              @media (max-width: 768px) {
                display: none;
              }
            }
            &.first {
              &:after {
                top: 148px;
              }
            }

            .journey-item {
              width: 25%;
              position: relative;
              &.width-45 {
                width: 45%;
              }

              &.width-14 {
                width: 14%;
              }

              &.width-30 {
                width: 30%;
              }

              &.width-36 {
                width: 36%;
              }

              &.width-15 {
                width: 15%;
              }

              &.width-80p {
                width: 80px;
              }

              &.item-order-0 {
                order: 0;
              }
              &.item-order-1 {
                order: 1;
              }
              &.item-order-2 {
                order: 2;
              }
              &.item-order-3 {
                order: 3;
              }
              &.item-order-4 {
                order: 4;
              }

              @media (max-width: 768px) {
                &.width-45 {
                  width: 100%;
                }

                &.width-14 {
                  width: 100%;
                }

                &.width-30 {
                  width: 100%;
                }

                &.width-36 {
                  width: 100%;
                }

                &.width-15 {
                  width: 100%;
                }

                &.width-80p {
                  width: 100%;
                }

                &.item-order-0 {
                  order: 4 !important;
                }
                &.item-order-1 {
                  order: 3 !important;
                }
                &.item-order-2 {
                  order: 2 !important;
                }
                &.item-order-3 {
                  order: 1 !important;
                }
                &.item-order-4 {
                  order: 0 !important;
                }
              }
              &.down {
                // margin-top: 55px;

                .journey-item-content {
                  top: 108px;

                  .content-order-0 {
                    order: 0;
                  }
                  .content-order-1 {
                    order: 1;
                  }
                  @media (max-width: 768px) {
                    .content-order-0 {
                      order: 1;
                    }
                    .content-order-1 {
                      order: 0;
                    }
                    position: relative;
                    top: initial;
                  }
                  .item-left {
                    width: 38px;
                    height: 20px;
                    .item-year {
                      position: absolute;
                      font-size: 16px;
                      font-weight: 600;
                      top: 0;
                      bottom: initial;

                      @media (max-width: 768px) {
                        position: relative;
                        top: -6px;
                      }
                    }
                  }

                  .item-right {
                    .item-icon {
                      width: 30px;
                      height: 50px;
                      position: absolute;
                      top: initial;
                      bottom: 0;

                      @media (max-width: 768px) {
                        top: 0;
                      }
                    }
                  }
                }
              }
              .journey-item-content {
                display: flex;
                flex-direction: column;
                // align-items: center;
                gap: 3px;
                position: absolute;
                width: 500px;
                top: 14px;

                @media (max-width: 768px) {
                  position: relative;
                  top: initial;
                }
                .item-left {
                  width: 38px;
                  height: 20px;
                  @media (max-width: 768px) {
                    margin-left: 54px;
                  }
                  .item-year {
                    position: absolute;
                    font-size: 16px;
                    font-weight: 600;
                    bottom: 0;
                  }
                }

                .item-right {
                  .item-icon {
                    width: 30px;
                    height: 50px;
                    position: absolute;
                    top: 0;
                    background-position: center;
                    background-repeat: no-repeat;
                    @media (max-width: 768px) {
                      margin-left: 54px;
                    }
                    &.baby {
                      background-image: url('../assets/images/journey/icon-baby.png');
                    }

                    &.school {
                      background-image: url('../assets/images/journey/icon-school.png');
                    }

                    &.graduate {
                      background-image: url('../assets/images/journey/icon-graduate.png');
                    }

                    &.employee {
                      background-image: url('../assets/images/journey/icon-employee.png');
                    }
                  }
                  .item-details {
                    margin-left: 38px;
                    position: relative;

                    @media (max-width: 768px) {
                      margin-left: 95px;
                    }
                    .item-main-title {
                      font-size: 18px;
                      font-weight: 500;
                      line-height: 24px;
                    }

                    .item-sub-title {
                      font-size: 15px;
                      font-weight: 400;
                      opacity: 0.8;
                    }
                    .item-sub-label {
                      font-size: 11px;
                      background-color: #f40a5c;
                      color: #fff;
                      width: fit-content;
                      border-radius: 50px;
                      font-weight: 500;
                      padding: 1px 8px;
                      position: absolute;
                      line-height: 19px;
                      top: 53px;
                    }
                  }
                }
              }

              .journey-item-line {
                position: relative;
                width: 100%;
                height: 15px;
                margin: 10px 0;
                position: absolute;
                top: 80px;

                &:before {
                  content: '';
                  position: absolute;
                  width: 15px;
                  height: 15px;
                  background-color: #fff;
                  border-radius: 10px;
                  border: 3px solid #f40a5c;
                  left: 7px;

                  @media (max-width: 768px) {
                    left: 30px;
                    top: -39px;
                  }
                }

                &.last-item {
                  &:before {
                    content: '';
                    display: none;
                  }
                }
                &.last {
                  &:before {
                    animation: pulse-animation 2s infinite;
                  }
                  &:after {
                    @media (max-width: 768px) {
                      display: none;
                    }
                  }
                }
                &:after {
                  content: '';
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  margin: auto;
                  width: calc(100% - 30px);
                  height: 1px;
                  background-color: #fff;
                  margin: auto 30px;
                  opacity: 0.2;

                  @media (max-width: 768px) {
                    width: 1px;
                    height: 100%;
                    left: 7px;
                  }
                }

                &.last-item {
                  &:after {
                    width: 30px;
                    right: -30px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px #f40a5c;
  }
  100% {
    box-shadow: 0 0 0 30px #f40a5c00;
  }
}
</style>
