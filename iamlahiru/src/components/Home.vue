<template>
  <div class="home" v-bind:style="[!isMobileComp ? { height: windowHeightComp + 'px' } : '']">
    <div class="home-container" v-bind:class="{ expand: isShowRemainingContent }">
      <div class="main-title-box" v-bind:class="{ small: isShowRemainingContentBefore }">
        <div class="main-title" v-bind:class="{ small: isShowRemainingContentBefore }">
          <div class="text">
            <TransitionGroup name="fade" tag="span">
              <span v-for="item in mainTitlePart1Array" :key="item">
                {{ item }}
              </span>
            </TransitionGroup>
          </div>
          <div class="highlight">
            <TransitionGroup name="fade" tag="span">
              <span v-for="item in mainTitlePart2Array" :key="item">
                {{ item }}
              </span>
            </TransitionGroup>
          </div>
        </div>
        <div>
          <Transition name="fade">
            <div
              class="sub-title"
              v-bind:class="{ small: isShowRemainingContentBefore }"
              v-if="isShowSubTitle"
            >
              I craft seamless experiences through creativity and code.
            </div>
          </Transition>
        </div>
      </div>
      <div>
        <div class="brain-container" v-if="isShowRemainingContent">
          <div class="desc-item left" v-motion-slide-visible-right :duration="700" :delay="500">
            <div class="desc-title">&lt;developer&gt;</div>
            <div class="desc-subtitle">
              Front end developer who writes clean,<br />
              elegant and efficient code.
            </div>
            <div class="desc-percentage">
              <NumberAnimation
                ref="number1"
                :from="0"
                :to="55"
                :format="theFormat"
                :duration="3"
                :delay="300"
                autoplay
                easing="linear"
              />
            </div>
          </div>
          <div class="brain-image">
            <img
              class="brain-img"
              src="../assets/images/brain.png"
              v-motion-pop-visible
              :delay="200"
              :duration="800"
              :hovered="{ scale: 1.1 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
              }"
              true
            />
          </div>
          <div class="desc-item right" v-motion-slide-visible-left :duration="700" :delay="500">
            <div class="desc-title">designer</div>
            <div class="desc-subtitle">
              Product designer specialising in <br />UI design and design systems.
            </div>
            <div class="desc-percentage">
              <NumberAnimation
                ref="number2"
                :from="0"
                :to="45"
                :format="theFormat"
                :duration="3"
                :delay="300"
                autoplay
                easing="linear"
              />
            </div>
          </div>
        </div>
        <div
          class="skills"
          v-motion-fade
          :duration="300"
          :delay="1200"
          v-if="isShowRemainingContent"
        >
          <span>I love </span
          ><span class="skill-type">
            <div class="skill-set">
              <div class="skill">
                <vue-typewriter-effect :strings="skills" :loop="true" />
              </div>
            </div>
          </span>
        </div>
        <div
          class="social-icons"
          v-motion-fade
          :duration="300"
          :delay="1500"
          v-if="isShowRemainingContent"
        >
          <a
            class="social-icon in"
            href="https://www.linkedin.com/in/lahirucb/"
            target="_blank"
          ></a>
          <a class="social-icon fb" href="https://www.facebook.com/LahiruCB/" target="_blank"></a>
          <a class="social-icon email" href="mailto: lahiru.cntr@gmail.com"></a>
          <a class="social-icon dribble" href="https://dribbble.com/Lahiru191" target="_blank"></a>
          <a
            class="social-icon be"
            href="https://www.behance.net/LahiruChathuranga"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumberAnimation from 'vue-number-animation'
import VueTypewriterEffect from 'vue-typewriter-effect'
export default {
  name: 'home',
  data() {
    return {
      windowHeight: 0,
      isShowRemainingContent: false,
      isShowSubTitle: false,
      isShowRemainingContentBefore: false,
      isShowRemainingContentAfter: false,

      mainTitlePart1Array: [],
      mainTitlePart1: '',
      mainTitlePart1StringArray: [],

      mainTitlePart2Array: [],
      mainTitlePart2: '',
      mainTitlePart2StringArray: [],

      mainSubTitlePartArray: [],
      mainSubTitlePart: '',
      mainSubTitlePartStringArray: [],

      skills: [
        'JavaScript',
        'HTML5',
        'CSS',
        'SCSS',
        'Vue.js',
        'Angular',
        'React',
        'Bootstrap',
        'Tailwind',
        'Photoshop',
        'Illustrator',
      ],
      currentItem: -1,
    }
  },
  props: {
    msg: String,
  },
  components: { NumberAnimation, VueTypewriterEffect },
  computed: {
    windowHeightComp: function () {
      return this.$store.state.windowHeight
    },
    isMobileComp: function () {
      return this.$store.state.isMobile
    },
  },
  methods: {
    addTutorial(e) {
      e.preventDefault()
      this.tutorials.push(this.add)
    },
    remove(tutorial) {
      this.tutorials = this.tutorials.filter((e) => e !== tutorial)
    },
    theFormat(number) {
      return number.toFixed(0) + '%'
    },
  },
  mounted() {
    // this.$refs.number1.play()
  },
  created() {
    this.currentItem = 0
    this.windowHeight = this.$store.state.windowHeight
    setInterval(() => {
      if (this.currentItem == this.skills.length - 1) {
        this.currentItem = -1
      }
      this.currentItem++
    }, 2000)

    this.mainTitlePart1String = 'Hi. I am '
    this.mainTitlePart1Array = []
    this.mainTitlePart1StringArray = this.mainTitlePart1String.split('')
    for (let index = 0; index < this.mainTitlePart1StringArray.length; index++) {
      setTimeout(() => {
        this.mainTitlePart1Array.push(this.mainTitlePart1StringArray[index])
      }, 200 * index)
    }
    this.mainTitlePart2String = ' Lahiru'
    this.mainTitlePart2Array = []
    this.mainTitlePart2StringArray = this.mainTitlePart2String.split('')
    for (let index = 0; index < this.mainTitlePart2StringArray.length; index++) {
      setTimeout(
        () => {
          this.mainTitlePart2Array.push(this.mainTitlePart2StringArray[index])
        },
        1700 + 100 * index,
      )
    }

    this.mainSubTitlePartString = 'I craft seamless experiences through creativity and code.'
    this.mainSubTitlePartArray = []
    this.mainSubTitlePartStringArray = this.mainSubTitlePartString.split('')
    for (let index = 0; index < this.mainSubTitlePartStringArray.length; index++) {
      setTimeout(
        () => {
          this.mainSubTitlePartArray.push(this.mainSubTitlePartStringArray[index])
        },
        3200 + 50 * index,
      )
    }

    setTimeout(() => {
      this.isShowSubTitle = true
    }, 3000)
    setTimeout(() => {
      this.isShowRemainingContentBefore = true
    }, 5000)
    setTimeout(() => {
      this.isShowRemainingContent = true
    }, 5500)

    setTimeout(() => {
      this.isShowRemainingContentAfter = true
    }, 7550)
  },
}
</script>

<style lang="scss">
.home {
  padding: 0 42px !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
