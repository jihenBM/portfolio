<template>
  <section id="portfolio" class="d-flex align-items-center portfolio anim-portfolio" >
    <div class="container">
      <div class="rounded bg-white w-100">
        <!--  -->
        <div
          class="d-flex gap-5 flex-column justify-content-evenly justify-content-md-center h-100 align-items-center"
        >
          <div class="header position-relative pt-5 pt-md-0">
            <h5 class="title" id="exampleModalLabel">{{ project.title }}</h5>
          </div>
          <div class="gap-5 d-flex flex-md-row flex-column align-items-center">
            <div>
              <div v-if="!['RimExpert'].includes(project.title)">
                <video
                  class="w-100 px-4 px-md-0"
                  v-for="(item, index) in project.videos"
                  :key="index"
                  controls
                  :autoplay="index == 0"
                  loop
                >
                  <source :src="'/portfolio' + item" type="video/mp4" />
                </video>
              </div>
              <div v-else>
                <img
                  class="img-modal"
                  :src="'/portfolio' + item"
                  :alt="item.title"
                  v-for="(item, index) in project.src"
                  :key="index"
                />
              </div>
            </div>
            <div :style="project.title != 'Herodot Studio' ? 'max-width:350px' : 'width:71%'">
              <ul>
                <li
                  style="list-style: square"
                  v-for="(item, index) in project.description"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
              <a v-if="project.link" :href="project.link" target="_blank" style="color: #d92cf9">
                Visit the website
              </a>
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
import { useProjectStore } from '@/stores/projects'

export default {
  mounted() {
    const indx = Number(this.$route.params.index)
    this.project = this.store.projects[indx]
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
  data() {
    return {
      project: Object as any,
      store: useProjectStore()
    }
  }
}
</script>
<style scoped>
.w-95 {
  width: 95%;
}

.w-40 {
  width: 40%;
}

section {
  padding-top: 110px;
  min-height: 90vh;
}

@media (max-width: 778px) {
  section {
    padding-top: 80px;
  }
}

video {
  max-width: 600px;
}

img {
  max-height: 500px;
}

h5 {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 0px 15px;
  text-transform: uppercase;
}

li:last-child {
  font-weight: 600;
}
</style>
