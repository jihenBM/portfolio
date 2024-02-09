<template lang="">
  <div>
    <!--experience start -->
    <section id="experience" class="experience anim-experience">
      <div class="section-heading text-center">
        <h2>experience</h2>
      </div>
      <div class="container">
        <div class="experience-content">
          <div class="main-timeline">
            <ul>
              <li v-for="(experience, index) in experiences" :key="index">
                <div class="single-timeline-box fix">
                  <div class="row">
                    <div
                      class="col-lg-5"
                      :class="
                        index % 2 != 0
                          ? 'order-lg-2 col-md-offset-1 experience-time-responsive'
                          : 'order-lg-1 '
                      "
                    >
                      <div class="experience-time" :class="index % 2 != 0 ? '' : 'text-right'">
                        <h2>
                          <span v-if="index % 2 != 0">
                            <font-awesome-icon
                              icon="fa fa-circle"
                              class="i"
                              aria-hidden="true"
                            ></font-awesome-icon
                          ></span>
                          {{ experience.period }}
                        </h2>
                        <h3>{{ experience.job }}</h3>
                      </div>
                      <!--/.experience-time-->
                    </div>
                    <!--/.col-->
                    <div
                      :class="index % 2 != 0 ? 'order-lg-1' : 'order-lg-2 col-md-offset-1'"
                      class="col-lg-5"
                    >
                      <div class="timeline">
                        <div class="timeline-content" :class="index % 2 != 0 ? 'text-right' : ''">
                          <h4 class="title">
                            <span v-if="index % 2 == 0">
                              <font-awesome-icon
                                icon="fa fa-circle"
                                class="i"
                                aria-hidden="true"
                              ></font-awesome-icon
                            ></span>
                            {{ experience.company }}
                          </h4>
                          <h5 v-if="experience.localisation">{{ experience.localisation }}</h5>
                          <div class="description">
                            <ul v-for="(item, index) in experience.description" :key="index">
                              <li style="list-style-type: circle">{{ item }}</li>
                            </ul>
                          </div>
                        </div>
                        <!--/.timeline-content-->
                      </div>
                      <!--/.timeline-->
                    </div>
                    <!--/.col-->
                    <div
                      v-if="index % 2 != 0"
                      class="col-md-offset-1 order-lg-1 col-lg-5 experience-time-main"
                    >
                      <div class="experience-time">
                        <h2>
                          <span>
                            <font-awesome-icon
                              icon="fa fa-circle"
                              class="i"
                              aria-hidden="true"
                            ></font-awesome-icon
                          ></span>
                          {{ experience.period }}
                        </h2>
                        <h3>{{ experience.job }}</h3>
                      </div>
                      <!--/.experience-time-->
                    </div>
                    <!--/.col-->
                  </div>
                </div>
                <!--/.single-timeline-box-->
              </li>
            </ul>
          </div>
          <!--.main-timeline-->
        </div>
        <!--.experience-content-->
      </div>
    </section>
    <!--/.experience-->
    <!--experience end -->
  </div>
</template>
<script lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  data() {
    return {
      experiences: [
        {
          company: 'Freelance',
          job: 'Full-stack | DevOps engineer',
          period: 'Feb - Present',
          description: [
            'Development and maintenance of the e-commerce site line 13: - Design,development and implementation of an e-commerce site for line 13. - Deployment automation to ensure fast and reliable updates. Development and maintenance of the rimexpert call for tenders site'
          ]
        },
        {
          localisation: 'Menzeh 6,Tunisia',
          job: 'Full-stack | DevOps engineer',
          period: 'Dec 2022 - Present',
          company: 'Herodot Studio',
          description: [
            'Development and maintenance of web applications',
            'Implementation of inter-service communication solutions using the gRPC protocol',
            'Development and execution of unit tests in order to identify bugs early',
            'Implementation place of isolated development environments using containers',
            'Deployment and management of infrastructures on the Google cloud',
            'Identifying vulnerabilities, bugs, and bad coding practices',
            'Improving readability and code robustness',
            'Identifying areas of the code requiring better coverage'
          ]
        },
        {
          localisation: 'Menzeh 6,Tunisia',
          job: 'End-of-study internship',
          period: 'Jan - SEP 2022',
          company: 'Herodot Studio',
          description: [
            'Ensuring the high availability of the game in the Herodot studio using GKE (Google Kubernetes Engine) and Terraform,',
            'Setting up a CI/CD pipeline such as Compilation and automatic execution of tests, construction of docker images and them store on Google Container Registry',
            'Developing a backend server using python gRPC technologies',
            'Packaging applications with Poetry'
          ]
        },
        {
          localisation: 'Full-remote',
          job: 'Internship',
          period: 'Jan - Nov 2021',
          company: 'MsDigital',
          description: [
            'Participation in the implementation of a web and mobile application for the Maria Cantina restaurant, using Laravel for the Backend, Ionic for the Frontend and Angular and Firebase to distribute orders in real time'
          ]
        }
      ]
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    const trigger = gsap.timeline({
      scrollTrigger: {
        trigger: '.anim-experience',
        start: 'top 100%',
        onEnter: () => {
          // play the animation forward
          trigger.play()
        }
      }
    })
    trigger.fromTo(
      '.anim-experience',
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
  }
}
</script>
<style>
@media (min-width: 768px) {
  .container {
    width: 750px;
    max-width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
    max-width: 970px;
  }
}

ul {
  padding-left: 0;
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
    max-width: 1170px;
  }
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
  padding: 0;
  margin: 0;
}
</style>
