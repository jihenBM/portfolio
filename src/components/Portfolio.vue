<template lang="">
  <!--portfolio start -->
  <section id="portfolio" class="portfolio">
    <div class="portfolio-details">
      <div class="section-heading text-center">
        <h2>portfolio</h2>
      </div>
      <div class="container">
        <div class="portfolio-content">
          <div class="isotope">
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <div class="item mb-4">
                  <div class="item-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                      class="w-100 shadow-1-strong rounded"
                      alt="Boat on Calm Water"
                    />
                  </div>

                  <div class="isotope-overlay item-0">
                    <button @click="displayModal()"> Metaowl <br/> - <br/> Game Analytics Platform </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>
                <div class="item mb-4">
                  <div class="item-1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                      class="w-100 shadow-1-strong rounded"
                      alt="Wintry Mountain Landscape"
                    />
                  </div>
                  <div class="isotope-overlay item-1">
                    <button @click="displayModal()"> Herodot Studio  </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>
              </div>

              <div class="col-lg-4 mb-lg-0">
                <div class="item mb-4">
                  <div class="item-1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                      class="w-100 shadow-1-strong rounded"
                      alt="Wintry Mountain Landscape"
                    />
                  </div>
                  <div class="isotope-overlay">
                    <button @click="displayModal()"> RimExpert <br/> - <br/> Calls for Tenders <br/>and  <br/>Employment Platform </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>

                <div class="item mb-4">
                  <div class="item-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                      class="w-100 shadow-1-strong rounded"
                      alt="Boat on Calm Water"
                    />
                  </div>

                  <div class="isotope-overlay item-0">
                    <button @click="displayModal()"> Apollo <br/> - <br/> Apache Airflow </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <div class="item mb-4">
                  <div class="item-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                      class="w-100 shadow-1-strong rounded"
                      alt="Boat on Calm Water"
                    />
                  </div>

                  <div class="isotope-overlay item-0">
                    <button @click="displayModal()"> Aivataria  <br/> - <br/>  Animated Avatar <br/> Management Platform  </button>
                  </div>
                  <!-- /.isotope-overlay -->
                </div>

                <div class="item mb-4">
                  <div class="item-1">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                    class="w-100 shadow-1-strong rounded"
                    alt="Wintry Mountain Landscape"
                  /></div>
                  <div class="isotope-overlay item-1">
                    <button @click="displayModal()"> Dari.tn <br/> - <br/> Real Estate Website </button>
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
  <ModalProject/>
</template>
<script>
import ModalProject from "@/components/modalProject.vue";
export default {}
</script>
<style scoped>
@media (min-width: 778px) {
  .isotope .item-0 {
    max-height: 192px;
    overflow: hidden;
  }

  .isotope .item-1 {
    max-height: 534px;
    overflow: hidden;
  }
}
button{
	text-decoration: none;
}

</style>
