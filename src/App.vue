<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import About from './components/About.vue';
import Formation from './components/Formation.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Portfolio from './components/Portfolio.vue';
import Footer from './components/Footer.vue';

</script>

<template>
<Header />
<About/>
<Formation/>
<Skills/>
<Experience/>
<Portfolio/>
<Footer/>
<RouterView />
</template>

<style>
body {
  font-family: Poppins,sans-serif;
  font-size: 16px;
  color: #676a81;
}
</style>
