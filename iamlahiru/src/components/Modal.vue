<template>
  <div class="iml-modal" v-if="isModalOpen">
    <Transition name="fade">
      <div class="iml-modal-overlay" v-if="isModalOverlayOpen" @click.self="closeModal">
        <div class="iml-modal-close" @click="closeModal"></div>
        <Transition name="fade">
          <div class="iml-image-preloader" v-if="!isCurrentImageLoaded"></div>
        </Transition>
        <div
          class="iml-modal-container"
          v-if="isModalPopupOpen"
          @click="preventDefault"
          v-bind:class="{
            'slide-up-fade-in': isCurrentImageLoaded,
            'slide-down-fade-out': !isModalPopupOpenBefore,
          }"
        >
          <div class="iml-modal-image-container">
            <img class="iml-image" v-bind:src="selectedPortfolioItem.image" @load="onImgLoad" />
          </div>
          <div class="iml-modal-decription">
            <div class="iml-modal-title">{{ selectedPortfolioItem.name }}</div>
            <div class="iml-modal-description">
              <p>
                {{ selectedPortfolioItem.description }}
              </p>
            </div>

            <div class="iml-section">
              <div class="iml-section-title">Primary colours</div>
              <div class="iml-section-content">
                <div class="iml-item-line colors">
                  <div
                    class="iml-item"
                    v-for="color in selectedPortfolioItem.primaryColors"
                    :key="color"
                    :style="{ 'background-color': color }"
                  ></div>
                </div>
              </div>
            </div>
            <div class="iml-section">
              <div class="iml-section-title">Technologies used</div>
              <div v-if="selectedPortfolioItem.designTech.length > 0">
                <div class="iml-section-sub-title">For design</div>
                <div class="iml-section-content">
                  <div class="iml-item-line tech-design">
                    <div
                      class="iml-item"
                      v-for="desTech in selectedPortfolioItem.designTech"
                      :key="desTech"
                      v-bind:class="[desTech.icon]"
                      v-tooltip="desTech.label"
                    ></div>
                  </div>
                </div>
              </div>
              <div v-if="selectedPortfolioItem.devTech.length > 0">
                <div class="iml-section-sub-title">For front-end development</div>
                <div class="iml-section-content">
                  <div class="iml-item-line tech-develop">
                    <div
                      class="iml-item"
                      v-for="devTech in selectedPortfolioItem.devTech"
                      :key="devTech"
                      v-bind:class="[devTech.icon]"
                      v-tooltip="devTech.label"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="iml-section">
              <div class="iml-section-title">Reference Link</div>
              <div class="iml-section-content">
                <a
                  class="iml-link"
                  v-if="selectedPortfolioItem.referenceLink != null"
                  :href="selectedPortfolioItem.referenceLink"
                  target="_blank"
                  >{{ selectedPortfolioItem.referenceLink }}</a
                >
                <span class="iml-link not" v-else> Not available </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      isModalOverlayOpen: false,
      isModalPopupOpen: false,
      isModalPopupOpenBefore: false,
      isImageLoaded: false,
      isCurrentImageLoaded: false,
    }
  },
  emits: ['closeModal'],
  props: {
    msg: String,
    isModalOpen: {
      default: true,
      type: Boolean,
    },
    imageSrc: {
      default: '',
      type: String,
    },
    selectedPortfolioItem: {
      default: null,
      type: Object,
    },
  },
  components: {},
  methods: {
    closeModal: function () {
      let self = this
      self.isModalPopupOpenBefore = false

      setTimeout(() => {
        self.isModalPopupOpen = false
      }, 300)
      setTimeout(() => {
        self.isModalOverlayOpen = false
      }, 310)

      setTimeout(() => {
        self.$emit('closeModal')
      }, 5000)
    },
    onImgLoad: function () {
      this.isImageLoaded = true
      this.isCurrentImageLoaded = true
    },
  },
  created() {
    let self = this
    setTimeout(() => {
      self.isModalOverlayOpen = true
    }, 100)

    setTimeout(() => {
      self.isModalPopupOpen = true
      self.isModalPopupOpenBefore = true
    }, 200)
  },
}
</script>

<style lang="scss">
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(30px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
