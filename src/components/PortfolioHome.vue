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
                <div
                  class="item mb-4"
                  @click="$router.push({ name: 'portfolio', params: { index: 5 } })"
                >
                  <div class="item-0">
                    <img
                      :src="'/portfolio' + store.projects[5].src[0]"
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
                <div
                  class="item mb-4"
                  @click="$router.push({ name: 'portfolio', params: { index: 1 } })"
                >
                  <div class="item-1">
                    <img
                      :src="'/portfolio' + store.projects[1].src[0]"
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
                <div
                  class="item mb-4"
                  @click="$router.push({ name: 'portfolio', params: { index: 2 } })"
                >
                  <div class="item-1">
                    <img
                      :src="'/portfolio' + store.projects[2].src[0]"
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

                <div
                  class="item mb-4"
                  @click="$router.push({ name: 'portfolio', params: { index: 3 } })"
                >
                  <div class="item-0">
                    <img
                      :src="'/portfolio' + store.projects[3].src[0]"
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
                <div
                  class="item mb-4"
                  @click="$router.push({ name: 'portfolio', params: { index: 4 } })"
                >
                  <div class="item-0">
                    <img
                      :src="'/portfolio' + store.projects[4].src[0]"
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

                <div
                  class="item mb-4"
                  @click="$router.push({ name: 'portfolio', params: { index: 0 } })"
                >
                  <div class="item-1">
                    <img
                      :src="'/portfolio' + store.projects[0].src[0]"
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
  </section>
</template>
<script lang="ts">
import { useProjectStore } from '@/stores/projects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  data() {
    return {
      store: useProjectStore()
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
/* .img-modal {
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
} */

.header h5 {
  color: #d92cf9;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 0px 15px;
  text-transform: uppercase;
  text-align: center;
}
</style>
