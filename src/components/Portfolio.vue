<template lang="">
  <!--portfolio start -->
  <section id="portfolio" class="portfolio position-relative anim-portfolio">
    <div class="portfolio-details" :style="toggleModal ? 'opacity:0.5; filter: blur(4px);' : ''">
      <div class="section-heading text-center">
        <h2>portfolio</h2>
      </div>
      <div class="container">
        <div class="portfolio-content">
          <div class="isotope">
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <div class="item mb-4" @click="displayModal(videos[5])">
                  <div class="item-0">
                    <img
                      :src="'/portfolio'+videos[5].src[0]"
                      class="w-100 h-100 shadow-1-strong rounded"
                      alt="dari"
                      loading="lazy"
                    />
                  </div>

                  <div class="isotope-overlay item-0">
                    <button>
                      Dari.tn <br />
                      - <br />
                      Real Estate Website
                    </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>
                <div class="item mb-4" @click="displayModal(videos[1])">
                  <div class="item-1">
                    <img
                      :src="'/portfolio'+videos[1].src[0]"
                      class="w-100 shadow-1-strong rounded"
                      alt="herodot-website"
                      loading="lazy"
                    />
                  </div>
                  <div class="isotope-overlay item-1">
                    <button>Herodot Studio</button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>
              </div>

              <div class="col-lg-4 mb-lg-0">
                <div class="item mb-4" @click="displayModal(videos[2])">
                  <div class="item-1">
                    <img
                      :src="'/portfolio'+videos[2].src[0]"
                      class="w-100 shadow-1-strong rounded"
                      alt="rimexpert"
                      loading="lazy"
                    />
                  </div>
                  <div class="isotope-overlay">
                    <button>
                      RimExpert <br />
                      - <br />
                      Calls for Tenders <br />and <br />Employment Platform
                    </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>

                <div class="item mb-4" @click="displayModal(videos[3])">
                  <div class="item-0">
                    <img
                      :src="'/portfolio'+videos[3].src[0]"
                      class="w-100 shadow-1-strong rounded"
                      alt="ligne 13"
                      loading="lazy"
                    />
                  </div>

                  <div class="isotope-overlay item-0">
                    <button>
                      Ligne 13 <br />
                      - <br />
                      E-commerce site <br />
                      for <br />
                      Recycled Bags
                    </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <div class="item mb-4" @click="displayModal(videos[4])">
                  <div class="item-0">
                    <img
                      :src="'/portfolio'+videos[4].src[0]"
                      class="w-100 h-100 shadow-1-strong rounded"
                      alt="aivataria"
                      style="object-fit: cover"
                      loading="lazy"
                    />
                  </div>

                  <div class="isotope-overlay item-0">
                    <button>
                      Aivataria <br />
                      - <br />
                      Animated Avatar <br />
                      Management Platform
                    </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>

                <div class="item mb-4" @click="displayModal(videos[0])">
                  <div class="item-1">
                    <img
                      :src="'/portfolio'+videos[0].src[0]"
                      class="w-100 shadow-1-strong rounded"
                      alt="metaowl"
                      loading="lazy"
                    />
                  </div>
                  <div class="isotope-overlay item-1">
                    <button>
                      Metaowl <br />
                      - <br />
                      Game Analytics Platform
                    </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="toggleModal"
      class="modal position-fixed rounded bg-white d-block top-50 start-50 translate-middle"
    >
      <!--  -->
      <div class="show d-block p-4" id="exampleModal" v-click-outside="clickOutside">
        <div class="dialog">
          <div class="content">
            <div class="header position-relative">
              <h5 class="title" id="exampleModalLabel">{{ videoSelected.title }}</h5>
              <font-awesome-icon
                style="cursor: pointer; font-size: 20px"
                @click="clickOutside"
                class="position-absolute end-0 top-0"
                icon="fa-solid fa-xmark"
              />
            </div>
            <div class="body p-4">
              <div class="d-flex gap-3 justify-content-center">
                <video
                  v-for="(item, index) in videoSelected.videos"
                  :key="index"
                  controls
                  :autoplay="index == 0"
                  loop
                >
                  <source :src="'/portfolio'+item" type="video/mp4" />
                </video>
                <img
                  class="img-modal"
                  :src="'/portfolio'+item"
                  :alt="item.title"
                  v-for="(item, index) in videoSelected.src"
                  :key="index"
                  v-if="['RimExpert'].includes(videoSelected.title)"
                />

                <div></div>
              </div>
              <div class="mt-5">
                <p v-for="(item, index) in videoSelected.description" :key="index">
                  {{ item }}
                </p>
                <a
                  v-if="videoSelected.link"
                  :href="videoSelected.link"
                  target="_blank"
                  style="color: #d92cf9"
                >
                  Visit the website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  emits: ['modalOpened'],
  data() {
    return {
      toggleModal: false,
      videoSelected: {},
      videos: [
        {
          title: 'Metaowl',
          description: [
            'Working closely with data scientists to determine the most relevant data and insights to present on the site, maximizing their usefulness for game studios. Advanced chart design, such as box plots, Sankey charts, as well as zoomable charts, providing a rich visual representation of data related to player behavior, engagement patterns, and monetization strategies.',
            'Implemented custom display features, allowing users to choose between dark or light mode.',
            'Implemented the ability for customers to upload their own game maps in FBX format. Integration of Three.js for interactive 3D visualization, including analysis of busy areas for in-depth insights into player behavior.',
            'Design and implementation of a dedicated microservice, responsible for receiving data sent by the MetaOwl SDK. This server is responsible for efficiently storing data in the Kafka platform.',
            'Technologies used: PostgreSQL, Flask, Django, Poetry, Kafka, Apex Chart, Nuxt 3, Tailwind, Ansible, Gitlab CI/CD, GCP'
          ],
          link: 'https://meta-owl.io/',
          src: ['/images/portfolio/metaowl.png'],
          videos: ['/videos/metaowl.mp4']
        },
        {
          title: 'Herodot Studio',
          description: [
            'development and maintenance of the Herodot Studio company website.',
            'Technologies used: Django, Nuxt 3, Tailwind, Gitlab CI/CD, GCP'
          ],
          link: 'https://www.herodotstudio.com/',
          src: ['/images/portfolio/herodot.png'],
          videos: ['/videos/herodot-latest.mp4', '/videos/herodot-old.mp4']
        },
        {
          title: 'RimExpert',
          description: [
            'Design and implementation of a bilingual platform (French and Arabic) with an optimal user interface for clients.',
            'Robust administrator dashboard with advanced features for managing tenders, jobs, and advertising spaces.',
            'Integration of a custom text editor for easy content editing by users.',
            'Incorporation of Chart.js and Google Analytics for interactive data visualization, including hourly visitor counts, geographic distribution, and most viewed pages.',
            'Technologies used: Django, Angular, Chart.js, Google Analytics, PostgreSQL, Docker, OVH, Bootstrap'
          ],
          link: 'https://rimexpert.net',
          src: ['/images/portfolio/rimexpert.png']
        },
        {
          title: 'Ligne 13',
          description: [
            'Design and complete development of an e - commerce site specializing in the sale of bags Manufactured from recycled materials.',
            'Advanced search engine allowing users to filter products by color, size, keywords, etc.',
            "Automatic generation of invoices in PDF format with Django, automatically sent to sellers and buyers' emails.",
            'Technologies used: Angular, Tailwind, django, GCP'
          ],
          src: ['/images/portfolio/ligne13.png'],
          videos: ['/videos/ligne13.mp4']
        },
        // {
        //   title: 'Apollo',
        //   description: [
        //     'Implemented an automated notification system to Discord in case of task failure in Airflow workflows, enhancing responsiveness to operational issues.',
        //     'Incorporated DevOps practices into the project, focusing on the following aspects:',
        //     '- Established comprehensive test coverage with unit tests to ensure code stability and facilitate iterations.',
        //     '- Integrated a test coverage badge into the GitLab repository for immediate visibility into code quality.',
        //     '- Implemented a continuous deployment process using Ansible.',
        //     '- Fully dockerized the application.',
        //     'Technologies used: Airflow, Docker, Gitlab CI/CD, GCP, Ansible'
        //   ],
        //   src: ['/images/portfolio/apollo.png', '/images/portfolio/notif-metaowl.png']
        // },
        {
          title: 'Aivataria',
          description: [
            'Designed and implemented a user-friendly client interface allowing users to upload their avatars and choose from a selection of animations.',
            'Created a dedicated interface for administrators to upload completed animated avatars.',
            'Integrated a feature enabling clients to download the deliverable once the administrator has finalized the animation.',
            'Technologies used: Django, Angular, PostgreSQL, Docker, Bootstrap'
          ],
          src: ['/images/portfolio/aivataria.png'],
          videos: ['/videos/aivataria.mp4']
        },
        {
          title: 'Dari.tn',
          description: [
            'Implemented JWT-based authentication for secure user access.',
            'Developed an advanced search engine for filtering properties by location, type, and price.',
            'Established an advertisement management system, allowing users to publish, edit, and remove their listings.',
            'Integrated instant messaging for real-time communication between users.',
            'Incorporated a price estimation feature.',
            'Technologies used: Spring Boot, Spring JPA, Spring Security, Angular, Lombok'
          ],
          src: ['/images/portfolio/dari.png'],
          videos: ['/videos/dari.mp4']
        }
      ]
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    const trigger = gsap.timeline({
      scrollTrigger: {
        trigger: '.anim-portfolio',
        start: 'top 100%',
        onEnter: () => {
          // play the animation forward
          trigger.play()
        }
      }
    })
    trigger.fromTo(
      '.anim-portfolio',
      {
        opacity: 0,
        y: '30%'
      },
      {
        opacity: 1,
        y: '0%',
        duration: 1 // Adjust the duration as needed
      }
    )
  },
  methods: {
    displayModal(videoSelected: any) {
      this.toggleModal = !this.toggleModal
      this.videoSelected = videoSelected
      this.$emit('modalOpened')
    },
    clickOutside() {
      this.toggleModal = false
      this.$emit('modalOpened')
    }
  }
}
</script>
<style scoped>
@media (max-width: 777px) {
  .isotope .item-1 {
    height: 400px;
    overflow: hidden;
    object-fit: unset;
  }
}
@media (min-width: 778px) {
  .isotope .item-0 {
    height: 192px;
    overflow: hidden;
  }
  .isotope img {
    object-fit: cover;
  }
  .isotope .item-1 {
    max-height: 534px;
    overflow: hidden;
  }
}
.img-modal {
  max-height: 300px;
}
button {
  text-decoration: none;
}

.modal {
  width: 85%;
  height: 600px;
  max-width: 1300px;
}

.modal video {
  width: 80%;
  max-width: 700px;
}

.header h5 {
  color: #d92cf9;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 0px 15px;
  text-transform: uppercase;
  text-align: center;
}
</style>
