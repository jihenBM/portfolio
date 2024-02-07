<template>
  <div>
    <!--skills start -->
    <section id="skills" class="skills anim-skills" style="overflow: hidden;">
      <div class="skill-content">
        <div class="section-heading text-center">
          <h2>skills</h2>
        </div>
        <div class="clients-area container d-flex justify-content-center">
          <swiper
            :navigation="false" 
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              420: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1160: {
                slidesPerView: 5,
                spaceBetween: 20
              }
            }"
            :centerInsufficientSlides="true"
            :centeredSlidesBounds="true"
            :css-mode="true"
            :loop="true"
            :modules="modules"
            :autoplay="{ delay: 1800 }"
          >
            <swiper-slide v-for="(item, index) in skills" :key="index">
              <div class="itemi d-flex justify-content-center">
                <img :src="item.src" :alt="item.alt" loading="lazy" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="container">
          <div class="row"></div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.skill-content-->
    </section>
    <!--/.skills-->
    <!--skills end -->
  </div>
</template>
<script >
import { gsap } from "gsap";
import { ref, onMounted } from 'vue'
// Import Swiper Vue.js components
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
export default {
  data() {
    return {
      skills: [
        { src: '/images/clients/flask.png', alt: 'flask' },
        { src: '/images/clients/django.png', alt: 'django' },
        { src: '/images/clients/angular.png', alt: 'Angular' },
        { src: '/images/clients/nuxt.png', alt: 'Nuxt 3' },
        { src: '/images/clients/vue.png', alt: 'Vue.js 3' },
        { src: '/images/clients/linux.png', alt: 'linux' },
        { src: '/images/clients/tailwind.png', alt: 'Tailwind' },
        { src: '/images/clients/bootstrap.png', alt: 'Bootstrap' },
        { src: '/images/clients/ansible.png', alt: 'ansible' },
        { src: '/images/clients/terraform.png', alt: 'terraform' },
        { src: '/images/clients/gcp.png', alt: 'gcp' },
        { src: '/images/clients/postgreSQL.png', alt: 'PostgreSQL' },
        { src: '/images/clients/grpc.png', alt: 'gRPC' },
        { src: '/images/clients/mysql.png', alt: 'MySQL' },
        { src: '/images/clients/docker.jpg', alt: 'Docker' }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [ EffectFade, Navigation, Pagination, Autoplay]
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
     const trigger = gsap.timeline({
      scrollTrigger: {
        trigger: '.anim-skills',
        start: "top 100%",
        onEnter: () => {
          // play the animation forward
          trigger.play();
        },
      },
    });
     trigger.fromTo(
      '.anim-skills',
      {
        opacity: 0,
        y: '30%',
      },
      {
        opacity: 1,
        y: '0%',
        duration: 1, // Adjust the duration as needed
      }
    );
  },
}
</script>
<style>
.itemi img {
  filter: grayscale(100%);
  opacity: 0.9;
}

.itemi img:hover {
  scale: 1.1;
  transition: ease-in 0.2s;
  filter: none;
}

</style>
