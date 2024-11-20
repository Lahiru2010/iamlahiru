<template>
  <!-- <div class="about" v-bind:style="[!isMobileComp ? { height: windowHeightComp + 'px' } : '']"> -->

  <div class="contact" v-bind:style="[!isMobileComp ? { height: windowHeightComp + 'px' } : '']">
    <div class="contact-page" v-motion-slide-visible-bottom :duration="800" :delay="200">
      <div class="contact-container">
        <div class="contact-section">
          <div class="contact-details-container">
            <div class="contact-info-container">
              <div class="contact-title">CONTACT ME</div>
              <div class="contact-sub-title">LET'S GET IN TOUCH</div>
              <div class="contact-desc">
                Feel free to contact me via social media or email, <br />and let me know how I can
                assist you with your requirements.
              </div>
              <div class="contact-link-list">
                <a href="https://www.linkedin.com/in/lahirucb/" target="_blank" class="link-item"
                  >LinkedIn</a
                >
                <a href="https://iamlahiru.medium.com/" target="_blank" class="link-item">Medium</a>
                <a href="https://dribbble.com/Lahiru191" target="_blank" class="link-item"
                  >Dribble</a
                >
                <a href="https://www.behance.net/iamlahiru" target="_blank" class="link-item"
                  >Behance</a
                >
                <a href="https://www.instagram.com/lahi2010/" target="_blank" class="link-item"
                  >Instagram</a
                >
              </div>
            </div>

            <div class="contact-form-container">
              <div class="contact-form">
                <form ref="form" @submit.prevent="sendEmail">
                  <div class="form-input-container">
                    <input
                      type="text"
                      placeholder="Name"
                      name="user_name"
                      id="user_name"
                      v-model="nameValue"
                    />
                  </div>
                  <div class="form-input-container">
                    <input
                      type="text"
                      placeholder="Email"
                      name="user_email"
                      id="user_email"
                      v-model="emailValue"
                    />
                  </div>
                  <div class="form-input-container">
                    <textarea
                      placeholder="Message"
                      name="message"
                      id="message"
                      v-model="messageValue"
                    ></textarea>
                  </div>

                  <div class="form-input-container">
                    <input
                      type="submit"
                      class="contact-btn-send"
                      value="SEND"
                      :disabled="isLoading"
                      v-bind:class="{ disabled: isLoading }"
                    />
                  </div>
                  <div class="message-container">
                    <div class="message" v-if="responseMessage != ''">{{ responseMessage }}</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-section">
        <footer>
          <div class="footer-container">
            <div class="footer-left">
              <span>Made with </span><span class="heart"></span> <span>by Lahiru Chathuranga</span>
            </div>
            <div class="footer-right">{{ new Date().getFullYear() }} All rights reserved</div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
  name: 'contact',
  data() {
    return {
      windowHeight: 0,
      isLoading: false,
      isSuccess: false,
      responseMessage: '',
      sent: false,
      nameValue: '',
      emailValue: '',
      messageValue: '',
    }
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

  methods: {
    sendEmail() {
      let self = this
      self.isLoading = true
      emailjs
        .sendForm('service_ukxsp76', 'template_3cj5g56', this.$refs.form, {
          publicKey: '236kTlwoPbKFTBmNt',
        })
        .then(
          () => {
            console.log('SUCCESS!')

            self.responseMessage = 'Request sent successfully !'
            self.isLoading = false
            self.nameValue = ''
            self.emailValue = ''
            self.messageValue = ''
            setTimeout(() => {
              self.responseMessage = ''
            }, 5000)
          },
          (error) => {
            console.log('FAILED...', error.text)
            self.responseMessage = 'Request failed!'

            self.isLoading = false
            setTimeout(() => {
              self.responseMessage = ''
            }, 5000)
          },
        )
    },
  },
  mounted() {},
  unmounted() {},
  created() {
    this.windowHeight = this.$store.state.windowHeight
  },
}
</script>

<style lang="scss">
.contact {
  background-color: #1f1f20;
  background: linear-gradient(90deg, rgb(24 23 29) 0%, rgb(34 34 37) 49%, rgb(39 39 47) 100%);
  padding: 0 42px !important;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-top: 150px !important;

  @media (max-width: 1600px) {
    padding-top: 122px !important;
    height: initial !important;
  }
  @media (max-width: 992px) {
    padding-top: 0px !important;
  }
  .contact-page {
    max-width: 1280px;
    width: 100%;
    margin: auto;
    .contact-container {
      display: flex;
      padding: 0;
      flex-direction: column;

      .contact-details-container {
        width: 100%;
        box-sizing: border-box;

        @media (max-width: 992px) {
          padding: 118px 0 60px 0;
        }
      }
      .contact-section {
        .contact-details-container {
          display: flex;
          padding-bottom: 100px;
          @media (max-width: 992px) {
            flex-direction: column;
          }
          .contact-info-container {
            .contact-title {
              font-size: 46px;
              font-weight: 600;
              line-height: 40px;
            }

            .contact-sub-title {
              font-size: 46px;
              font-weight: 600;
              color: #ff0059;
            }

            .contact-desc {
              font-size: 20px;
              font-weight: normal;
            }

            .contact-link-list {
              display: flex;
              gap: 20px;
              margin-top: 50px;
              .link-item {
                color: #ffffff;
                text-decoration: none;

                transition: all 0.3s;
                &:hover {
                  color: #ff0059;
                  transform: scale(1.1);
                }
              }
            }
          }

          .contact-form-container {
            width: 400px;
            margin-left: auto;
            margin-right: 30px;

            @media (max-width: 992px) {
              width: 100%;
              margin-top: 65px;
            }

            .contact-form {
              width: 400px;
              display: flex;
              flex-direction: column;
              gap: 20px;
              form {
                display: flex;
                flex-direction: column;
                gap: 20px;

                @media (max-width: 992px) {
                  width: 100%;
                }
                .form-input-container {
                  input {
                    &:active {
                      outline: none;
                      border-color: #ff0059;
                      transform: scale(0.9);
                    }
                    &:focus {
                      outline: none;
                      border-color: #ff0059;
                      transform: scale(0.99);
                    }
                    transition: all 1s ease;
                  }

                  textarea {
                    &:active {
                      outline: none;
                      border-color: #ff0059;
                      transform: scale(0.9);
                    }
                    &:focus {
                      outline: none;
                      border-color: #ff0059;
                      transform: scale(0.99);
                    }
                    transition: all 1s ease;
                  }
                  input,
                  textarea {
                    width: 100%;
                    background-color: #1f1f20;
                    color: #fff;
                    font-size: 18px;
                    border: none;
                    border-radius: 6px;
                    width: 100%;
                    padding: 12px 20px;
                    border: 1px solid transparent;
                  }
                  textarea {
                    min-height: 160px;
                  }

                  .contact-btn-send {
                    background-color: #ff0059;
                    color: #ffffff;
                    border: none;
                    width: 100%;
                    border-radius: 6px;
                    padding: 10px;
                    font-weight: 600;

                    transition: all 1s ease;
                    &:active {
                      transform: scale(0.9);
                    }
                    &.disabled {
                      opacity: 0.8;
                      background-color: #d45f88;
                    }
                  }
                }
                .message-container {
                  height: 24px;

                  .message {
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
.footer-section {
  footer {
    max-width: 1280px;
    width: 100%;
    margin: auto;

    .footer-container {
      display: flex;
      background-color: rgba(0, 0, 0, 0.24);
      padding: 50px;
      border-radius: 10px;
      display: flex;

      @media (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .footer-left {
        display: flex;

        @media (max-width: 576px) {
          margin: auto;
        }
        @media (min-width: 576px) {
          margin-right: auto;
        }
        span {
          display: block;

          &.heart {
            padding: 0 10px;
            width: 25px;
            height: 26px;
            background-image: url('../assets/images/heart.png');
            background-size: 14px;
            background-repeat: no-repeat;
            background-position: 6px 7px;
          }
        }
      }

      .footer-right {
        @media (min-width: 576px) {
          margin-left: auto;
        }
      }
    }
  }
}
</style>
