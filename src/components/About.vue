<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const animateH2 = ref(false)
const animateP = ref(false)
const animateA = ref(false)
onMounted(() => {
  // Add a delay if needed using setTimeout
  setTimeout(() => {
    animateH2.value = true
    animateP.value = true
    animateA.value = true
  }, 500) // Adjust the delay as per your requirement
})
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const trigger = gsap.timeline({
    scrollTrigger: {
      trigger: '.anim-about',
      start: 'top 100%',
      onEnter: () => {
        // play the animation forward
        trigger.play()
      }
    }
  })
  trigger.fromTo(
    '.anim-about',
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
})
</script>

<template>
  <!--welcome-hero start -->
  <section id="welcome-hero" class="welcome-hero">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="header-text">
            <h2
              style="font-size: 28px"
              :class="{ animated: animateH2, fadeInUp: animateH2 }"
              :style="{ opacity: animateH2 ? '1' : '0' }"
            >
              hi <span>,</span> i am <br />
              Ben Mustapha <br />Jihen <span>.</span>
            </h2>
            <p
              :class="{ animated: animateP, fadeInUp: animateP }"
              :style="{ opacity: animateP ? '1' : '0' }"
            >
              Full-stack | DevOps Engineer
            </p>
            <a
              style="text-decoration: none"
              :class="{ animated: animateA, fadeInDown: animateA }"
              :style="{ opacity: animateA ? '1' : '0' }"
              href="/download/cv-jihenBenMustapha.pdf"
              download
              >download resume</a
            >
          </div>
          <!--/.header-text-->
        </div>
        <!--/.col-->
      </div>
      <!-- /.row-->
    </div>
    <!-- /.container-->
  </section>
  <!--/.welcome-hero-->
  <!--welcome-hero end -->

  <!--about start -->
  <section id="about" class="about anim-about">
    <div class="section-heading text-center">
      <h2>about me</h2>
    </div>
    <div class="container">
      <div class="about-content">
        <div class="d-flex flex-column flex-lg-row">
          <div class="col-lg-7 px-5">
            <div class="single-about-txt">
              <h3>
                I am a Full Stack developer with 2 years of experience in DevOps, where I worked on
                the implementation of continuous integration (CI) and continuous deployment (CD),
                while continuing to develop complete web applications.
              </h3>
              <p>
                My dual skills in Full Stack development and DevOps allows me to approach projects
                holistically, ensuring that website development is not only functional, but also
                efficient and automated. I have strong problem-solving skills, which allows me to
                solve effectively tackle technical challenges that arise, and I am also able to work
                collaboratively within a team.
              </p>
              <div class="row">
                <div class="col-md-4">
                  <div class="single-about-add-info">
                    <h3>phone</h3>
                    <p>+21620288072</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="single-about-add-info">
                    <h3>email</h3>
                    <p>jihen.benmustapha@esprit.tn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-offset-1 img-wrapper col-lg-5 mx-auto">
            <div class="single-about-img">
              <img src="/images/about/profile_image.webp" alt="profile_image" loading="lazy" />
              <div class="about-list-icon">
                <ul class="p-0">
                  <li>
                    <a
                      href="https://tn.linkedin.com/in/jihen-ben-mustapha"
                      target="_blank"
                      class="p-0 ms-0"
                    >
                      <font-awesome-icon class="i ms-0" :icon="['fab', 'linkedin-in']" />
                    </a>
                  </li>
                  <!-- / li -->
                </ul>
                <!-- / ul -->
              </div>
              <!-- /.about-list-icon -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/.about-->
  <!--about end -->
</template>
<style>
@media screen and (min-width: 540px) {
  .header-text h2 {
    font-size: 54px !important;
  }
}
@media screen and (max-width: 440px) {
  .img-wrapper {
    width: 80% !important;
  }
}
.single-about-img img {
  object-fit: cover;
  width: 100%;
}
</style>
