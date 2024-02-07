<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import About from './components/About.vue';
import Formation from './components/Formation.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Portfolio from './components/Portfolio.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';
const modalOpened=ref(false);
</script>

<template>
  <div :class="modalOpened?'modal-overlay':''">
<Header />
<About class="overlay"/>
<Formation class="overlay"/>
<Skills class="overlay"/>
<Experience class="overlay"/>
<Portfolio @modal-opened="modalOpened=!modalOpened"/>
<Footer class="overlay"/>
</div>
</template>

<style>
body {
  font-family: Poppins,sans-serif;
  font-size: 16px;
  color: #676a81;
}

.modal-overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #7171716a; /* Rose background color with some transparency */
}
.modal-overlay .overlay {
      filter: blur(4px);

 opacity: 0.5;}
</style>
