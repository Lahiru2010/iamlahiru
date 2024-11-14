<template>
  <div class="home">
    <div class="home-container">
      <div class="main-title">
        <div class="text">Hi. I am</div>
        <div class="highlight">Lahiru</div>
      </div>
      <div class="sub-title">"I craft seamless experiences through creativity and code."</div>
      <div class="brain-container">
        <div class="desc-item left" v-motion-slide-visible-right :duration="700" :delay="200">
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
            :duration="300"
            :hovered="{ scale: 1.1 }"
          />
        </div>
        <div class="desc-item right" v-motion-slide-visible-left :duration="700" :delay="200">
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
      <div class="skills">
        <span>I love </span
        ><span class="skill-type">
          <div v-for="skill in skills" v-bind:key="skill" class="skill-set">
            <transition transition name="fade" mode="out-in">
              <div v-if="skill == skills[currentItem]" class="skill">
                {{ skill }}
              </div>
            </transition>
          </div>
        </span>
      </div>
      <div class="social-icons">
        <a class="social-icon in" href="https://www.linkedin.com/in/lahirucb/" target="_blank"></a>
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
</template>

<script>
import NumberAnimation from 'vue-number-animation'
export default {
  name: 'home',
  data() {
    return {
      skills: [
        'Javascript',
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
  components: { NumberAnimation },

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
    setInterval(() => {
      if (this.currentItem == this.skills.length - 1) {
        this.currentItem = -1
      }
      this.currentItem++
    }, 2000)
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
