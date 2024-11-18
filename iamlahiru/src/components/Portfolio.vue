<template>
  <div class="portfolio" ref="portfolioRef" style="position: relative">
    <div class="portfolio-page" v-motion-slide-visible-bottom :duration="1000" :delay="0">
      <div class="portfolio-container">
        <div class="title-container">
          <div class="iml-sub-title">Take a look at some of my work.</div>
          <div class="iml-desc">My work spans research, design, and development.</div>
        </div>
        <div class="items-container">
          <div class="items-set">
            <div class="item" v-for="(portfolioItem, index) in portfolioSet" v-bind:key="index">
              <div class="item-box-wrapper">
                <div
                  class="item-box"
                  @click="openModal(index)"
                  v-bind:style="{ 'background-image': 'url(' + portfolioItem.cover + ')' }"
                ></div>
                <div class="main-title">{{ portfolioItem.title }}</div>
                <div class="sub-title">{{ portfolioItem.subTitle }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
      :imageSrc="imageSrc[0]"
      :selectedPortfolioItem="selectedPortfolio"
      @closeModal="closeModal"
      :key="modalKey"
      :isModalOpen="isModalOpen"
    ></Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'Protfolio',
  data() {
    return {
      isModalOpen: false,
      modalKey: 0,
      portfolioSet: [
        {
          name: 'Sampath Bank Ultra Rewards Points System',
          title: 'Sampath Bank Ultra Rewards',
          subTitle: 'Online rewards system in Sri Lanka',
          description:
            'This website is developed for Sampath Bank Ultra Rewards program which support users to spend their loyalty points in different ways such as for flight booking, hotel booking, buying vouchers for different merchants, Online shopping etc.',
          image: 'https://iamlahiru.com/portfolio-bg/rewards.png',
          cover: 'https://iamlahiru.com/portfolio-bg/sampath_ur_cover.png',
          primaryColors: ['#f75704', '#3d5064'],
          designTech: [
            { label: 'Adobe Photoshop', icon: 'ps' },
            { label: 'Adobe Illustrator', icon: 'ai' },
          ],
          devTech: [
            { label: 'HTML', icon: 'html' },
            { label: 'CSS', icon: 'css' },
            { label: 'Sass', icon: 'sass' },
            { label: 'JavaScript', icon: 'js' },
            { label: 'jQuery', icon: 'jq' },
          ],
          referenceLink: 'https://loyalty.sampathbank.lk/Ultrarewards',
        },
        {
          name: 'findmyfare.com website',
          title: 'findmyfare.com',
          subTitle: "Sri Lanka's largest flight booking system",
          description:
            'Findmyfare.com is a unique and first of its kind online travel portal in Sri Lanka to provide affordable air tickets, hotel accommodations and exciting holiday packages.',
          image: 'https://iamlahiru.com/portfolio-bg/fmf.png',
          cover: 'https://iamlahiru.com/portfolio-bg/findmyfare_cover.png',
          primaryColors: ['#045894', '#fb4f0f'],
          designTech: [
            { label: 'Adobe Photoshop', icon: 'ps' },
            { label: 'Adobe Illustrator', icon: 'ai' },
          ],
          devTech: [
            { label: 'HTML', icon: 'html' },
            { label: 'CSS', icon: 'css' },
            { label: 'Sass', icon: 'sass' },
            { label: 'JavaScript', icon: 'js' },
            { label: 'jQuery', icon: 'jq' },
            { label: 'Angular', icon: 'ng' },
          ],
          referenceLink: 'https://www.findmyfare.com/',
        },
        {
          name: 'Eden Waste Solution',
          title: 'Eden Waste Solution',
          subTitle: 'Waste management website',
          description: 'Eden Waste Solution is a waste management company based in Australia.',
          image: 'https://iamlahiru.com/portfolio-bg/eden.png',
          cover: 'https://iamlahiru.com/portfolio-bg/ew_cover.png',
          primaryColors: ['#036001', '#f0f0f0'],
          designTech: [
            { label: 'Adobe Photoshop', icon: 'ps' },
            { label: 'Adobe Illustrator', icon: 'ai' },
          ],
          devTech: [
            { label: 'HTML', icon: 'html' },
            { label: 'CSS', icon: 'css' },
            { label: 'JavaScript', icon: 'js' },
            { label: 'Sass', icon: 'sass' },
          ],
          referenceLink: 'https://www.edenwaste.com.au/',
        },
        {
          name: 'EB Creasy website',
          title: 'EB Creasy',
          subTitle: 'Website that provide automotive, industrial and home solutions etc',
          description:
            'This website is developed for EB Creasy & Company PLC which provides different range of products such as automotive, industrial and home solutions,renewable energy solution. I mainly focus on this website to highlight the products and brands to the users to get the overall idea of the services from the first sight when they visit.',
          image: 'https://iamlahiru.com/portfolio-bg/eb.png',
          cover: 'https://iamlahiru.com/portfolio-bg/eb_cover.png',
          primaryColors: ['#ffe01c', '#3b3b3b'],
          designTech: [
            { label: 'Adobe Photoshop', icon: 'ps' },
            { label: 'Adobe Illustrator', icon: 'ai' },
          ],
          devTech: [
            { label: 'HTML', icon: 'html' },
            { label: 'CSS', icon: 'css' },
            { label: 'Sass', icon: 'sass' },
            { label: 'JavaScript', icon: 'js' },
            { label: 'jQuery', icon: 'jq' },
          ],
          referenceLink: null,
        },
        {
          name: 'Singapore Exchange PostTrade Product (Trading System)',
          title: 'Singapore Exchange PostTrade Product',
          subTitle: 'Trading system for Singapore Exchange',
          description:
            'When I was working in MillenniumIT I got an opportunity to redesign the Singapore Exchange PostTrade product which support different types of services in trading platform. The main challenge was there to organize the components and elements in a single viewport to give the best user experience to the customers. After going through several iteration in design stage I was come up with this design and developed the user interfaces with using JAVA language on top of Vaadin framework.',
          image: 'https://iamlahiru.com/portfolio-bg/sgx.png',
          cover: 'https://iamlahiru.com/portfolio-bg/sgx_cover.png',
          primaryColors: ['#324561', '#49c665', '#ebebeb'],
          designTech: [
            { label: 'Adobe Photoshop', icon: 'ps' },
            { label: 'Adobe Illustrator', icon: 'ai' },
            { label: 'Inkscape', icon: 'is' },
          ],
          devTech: [
            { label: 'Java', icon: 'java' },
            { label: 'Vaadin', icon: 'vaadin' },
            { label: 'HTML', icon: 'html' },
            { label: 'CSS', icon: 'css' },
            { label: 'Sass', icon: 'sass' },
            { label: 'JavaScript', icon: 'js' },
          ],
          referenceLink: null,
        },
        {
          name: 'MillenniumIT Dev Day mobile application',
          title: 'MillenniumIT Dev Day mobile app',
          subTitle: 'Mobile app created for developer day of MillenniumIT 2014',
          description:
            'Developer Day of MillenniumIT is the annual gathering of all the developers within the company. Several industry leads also participate with this event to share thier knowledge and experience with the employees. So I developed a mobile app for the event to show the event location, agenda, speakers and other information. This app was developed using jQuery Mobile Bootstrap3 and phoneGap.',
          image: 'https://iamlahiru.com/portfolio-bg/devday.png',
          cover: 'https://iamlahiru.com/portfolio-bg/mit_cover.png',
          primaryColors: ['#214756', '#f6a522'],
          designTech: [
            { label: 'Adobe Photoshop', icon: 'ps' },
            { label: 'Adobe Illustrator', icon: 'ai' },
          ],
          devTech: [
            { label: 'Cordova', icon: 'cordova' },
            { label: 'PhoneGap', icon: 'pg' },
            { label: 'HTML', icon: 'html' },
            { label: 'CSS', icon: 'css' },
            { label: 'Sass', icon: 'sass' },
            { label: 'JavaScript', icon: 'js' },
            { label: 'jQuery', icon: 'jq' },
          ],
          referenceLink: null,
        },
        {
          name: 'NavigateX logo design',
          title: 'NavigateX logo design',
          subTitle: 'Indoor navigation system app logo',
          description:
            'This logo is also designed for a indoor navigation system  mobile application.',
          image: 'https://iamlahiru.com/portfolio-bg/navigatex.png',
          cover: 'https://iamlahiru.com/portfolio-bg/navigatex_cover.png',
          primaryColors: ['#2b9ffb', '#21dfac', '#174669'],

          designTech: [{ label: 'Inkscape', icon: 'is' }],
          devTech: [],
          referenceLink: null,
        },
        {
          name: 'Smartnav mobile app logo design',
          title: 'Smartnav logo design',
          subTitle: 'Logo used for Smartnav mobile app',
          description:
            'Smartnav is a mobile app which navigate the users in indoor environment. This application is developed for a research project in University. So I designed this logo for the application to emphasise the feeling of navigation and location.',
          image: 'https://iamlahiru.com/portfolio-bg/smartnav.png',
          cover: 'https://iamlahiru.com/portfolio-bg/smartnav_cover.png',
          primaryColors: ['#ffc642', '#fe0033'],
          designTech: [{ label: 'Adobe Illustrator', icon: 'is' }],
          devTech: [],
          referenceLink: null,
        },
        {
          name: 'Delaiah brand logo design',
          title: 'Delaiah branding',
          subTitle: 'Logo design created for Delaiah brand',
          description:
            'Delaiah is a name of a ladies shoe brand which is going to be published very soon in Sri Lanka. So I was asked to design the logo for this brand. The main requirement of this logo was to create a typographic logo which should be with neat and clean design.',
          image: 'https://iamlahiru.com/portfolio-bg/delaiah.png',
          cover: 'https://iamlahiru.com/portfolio-bg/delaiah_cover.png',
          primaryColors: ['#cba858', '#ddbe5e', '#f2e7b0'],
          designTech: [
            { label: 'Adobe Photoshop', icon: 'ps' },
            { label: 'Adobe Illustrator', icon: 'ai' },
          ],
          devTech: [],
          referenceLink: null,
        },
        {
          name: 'Realtime switch borad',
          title: 'Realtime switch borad',
          subTitle: 'Dynamic HTML switch board developed using javaScript',
          description:
            'This interface is designed and developed to display the status of a real world switch board system. When the actual switches are changed, this application will display the same in the screen realtime. Also it will display the humidity battery level and the signal strength. This is a completely dynamic UI which can change switch state(on/off), wiring system and the temperature values.',
          image: 'https://iamlahiru.com/portfolio-bg/switch.png',
          cover: 'https://iamlahiru.com/portfolio-bg/switch_cover.png',
          primaryColors: ['#626262', '#fe3a3a', '#2ab700', '#31a0ff'],
          designTech: [{ label: 'Inkscape', icon: 'is' }],
          devTech: [
            { label: 'HTML', icon: 'html' },
            { label: 'CSS', icon: 'css' },
            { label: 'Sass', icon: 'sass' },
            { label: 'JavaScript', icon: 'js' },
            { label: 'jQuery', icon: 'jq' },
          ],
          referenceLink: null,
        },
        {
          name: 'Dynamic Energy Meter',
          title: 'Dynamic Energy Meter',
          subTitle: 'Real time synamic energy meter developed using javaScript',
          description:
            'This meter was designed and developed to showcase the RPM(Revolutions Per Minute) and PSI(Pounds per Square Inch) values in real time.',
          image: 'https://iamlahiru.com/portfolio-bg/energy.png',
          cover: 'https://iamlahiru.com/portfolio-bg/energy_cover.png',
          primaryColors: ['#f75704', '#3d5064'],
          designTech: [
            { label: 'Adobe Photoshop', icon: 'ps' },
            { label: 'Adobe Illustrator', icon: 'ai' },
          ],
          devTech: [
            { label: 'HTML', icon: 'html' },
            { label: 'CSS', icon: 'css' },
            { label: 'Sass', icon: 'sass' },
            { label: 'JavaScript', icon: 'js' },
            { label: 'jQuery', icon: 'jq' },
          ],
          referenceLink: null,
        },
        {
          name: 'SES2011 - Supplier Evaluation System',
          title: 'SES2011 - Supplier Evaluation System',
          subTitle: 'Supplier Evaluation System designed for DSI group Sri Lanka',
          description:
            'SES2011 is developed for DSI - D Samson Industries (Pvt) Ltd. which handles all the supplier process and generates several reports consists with the results of the evaluation. The system is developed using JAVA SE Edition.',
          image: 'https://iamlahiru.com/portfolio-bg/ses.png',
          cover: 'https://iamlahiru.com/portfolio-bg/ses_cover.png',
          primaryColors: ['#f30000', '#690000', '#6bcbee'],
          designTech: [{ label: 'Adobe Photoshop', icon: 'ps' }],
          devTech: [{ label: 'Java', icon: 'java' }],
          referenceLink: null,
        },
        {
          name: 'DMPO - Supplier Management System',
          title: 'DMPO - Supplier Management System',
          subTitle: 'Supplier Management System developed for Distric Milk Producers Organization',
          description:
            'DMPO Anuradhapura is a JAVA based desktop application which manage the milk suppliers in Anuradhapura district in Sri Lanka. The client for this project was the District Milk Producers Organization in Anuradhapura.',
          image: 'https://iamlahiru.com/portfolio-bg/dmpo.png',
          cover: 'https://iamlahiru.com/portfolio-bg/dmpo_cover.png',
          primaryColors: ['#01c6fd', '#214952'],
          designTech: [{ label: 'Adobe Photoshop', icon: 'ps' }],
          devTech: [{ label: 'Java', icon: 'java' }],
          referenceLink: null,
        },
        // {
        //   name: 'xxxx',
        //   description: 'aaaaa',
        //   image: 'xxxxxxxxxxx',
        //   primaryColors: ['#333', '#333'],
        //   designTech: ['ps', 'ai'],
        //   devTech: ['js', 'vue'],
        //   referenceLink: 'aaaaaa',
        // },
        // {
        //   name: 'xxxx',
        //   description: 'aaaaa',
        //   image: 'xxxxxxxxxxx',
        //   primaryColors: ['#333', '#333'],
        //   designTech: ['ps', 'ai'],
        //   devTech: ['js', 'vue'],
        //   referenceLink: 'aaaaaa',
        // },
      ],
      selectedPortfolio: null,
      imageSrc: [
        'https://iamlahiru.com/portfolio-bg/rewards.png',
        'https://iamlahiru.com/portfolio-bg/fmf.png',
        'https://iamlahiru.com/portfolio-bg/eb.png',
      ],
    }
  },
  props: {
    msg: String,
  },
  components: { Modal },

  methods: {
    closeModal: function () {
      this.isModalOpen = false
    },
    openModal(index) {
      this.modalKey++
      this.selectedPortfolio = this.portfolioSet[index]
      this.isModalOpen = true
    },
  },
  mounted() {},
  created() {
    this.selectedPortfolio = this.portfolioSet[0]
  },
}
</script>

<style lang="scss">
.portfolio {
  background-color: #1f1f20;
  background: linear-gradient(90deg, rgb(24 23 29) 0%, rgb(34 34 37) 49%, rgb(39 39 47) 100%);
  padding: 0 42px !important;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding-top: 150px !important;
  @media (max-width: 992px) {
    padding: 118px 0;
    padding: 118px 42px 42px 42px !important;
  }
  .portfolio-page {
    max-width: 1280px;
    display: flex;
    justify-content: center;
    .portfolio-container {
      display: flex;
      padding: 0;

      .title-container {
        width: 20%;
        .iml-sub-title {
          font-size: 26px;
          font-weight: 500;
          margin-bottom: 10px;
          margin-top: 20px;
        }
        .iml-desc {
          font-size: 18px;
          font-weight: 400;
          margin-bottom: 30px;
          opacity: 0.5;
        }
      }

      .items-container {
        width: 80%;
        .items-set {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .item {
            width: 33.33%;
            padding: 20px;
            color: #ffffff;

            @media (max-width: 768px) {
              width: 100%;
              padding: 20px 0;
            }
            .item-box-wrapper {
              .item-box {
                width: 100%;
                min-height: 200px;
                background-color: #272727;
                border-radius: 10px;
                box-shadow:
                  0 10px 15px -3px #0000001a,
                  0 4px 6px -2px #0000000d !important;
                transition: 0.2s ease-out;
                margin-bottom: 10px;
                cursor: pointer;
                background-size: cover;
                background-position: center;
                &:hover {
                  transform: perspective(999px) rotateX(7deg) translate3d(0, -4px, 5px);
                }
              }
              .main-title {
                font-size: 16px;
                font-weight: 600;
                color: #dbd8e5;
              }
              .sub-title {
                font-size: 15px;
                font-weight: 400;
                color: #dbd8e5;
                opacity: 0.7;
              }
            }
          }
        }
      }

      @media (max-width: 1200px) {
        flex-direction: column;

        .title-container {
          width: 100%;
        }

        .items-container {
          width: 100%;
          .items-set {
          }
        }
      }
    }
  }
  .iml-modal-wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1050;
  }
}
</style>
