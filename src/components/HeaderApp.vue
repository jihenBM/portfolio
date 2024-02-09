<script setup lang="ts">
import { ref } from 'vue'

const toggleNav = ref(false)
</script>

<template>
  <div class="greetings">
    <!-- top-area Start -->
    <header class="top-area">
      <div class="header-area">
        <!-- Start Navigation -->
        <nav class="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div class="container d-md-flex flex-lg-nowrap justify-content-md-between">
            <!-- Start Header Navigation -->
            <div class="navbar-header d-md-flex flex-row-reverse flex-lg-row">
              <button
                type="button"
                class="navbar-toggle"
                @click="toggleNav = !toggleNav"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <font-awesome-icon
                  class="i"
                  :icon="toggleNav ? 'fa fa-xmark' : 'fa fa-bars'"
                ></font-awesome-icon>
              </button>
              <router-link class="navbar-brand" to="/">Jihen</router-link>
            </div>
            <!--/.navbar-header-->
            <!-- End Header Navigation -->

            <!-- Collect the nav links.header-text, forms, and other content for toggling -->
            <div
              class="collapse navbar-collapse menu-ui-design"
              :class="toggleNav ? 'in' : ''"
              id="navbar-menu"
            >
              <ul
                class="nav navbar-nav navbar-right flex-column flex-lg-row"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li class="smooth-menu active"></li>
                <li class="smooth-menu"><a href="#about">about</a></li>
                <li class="smooth-menu"><a href="#education">education</a></li>
                <li class="smooth-menu"><a href="#skills">skills</a></li>
                <li class="smooth-menu"><a href="#experience">experience</a></li>
                <li class="smooth-menu"><a href="#portfolio">portfolio</a></li>
              </ul>
              <!--/.nav -->
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!--/.container-->
        </nav>
        <!--/nav-->
        <!-- End Navigation -->
      </div>
      <!--/.header-area-->

      <div class="clearfix"></div>
    </header>
    <!-- /.top-area-->
    <!-- top-area End -->
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-header {
    float: left;
  }
  .navbar-right {
    float: right !important;
    margin-right: -15px;
  }
}
a {
  text-decoration: none;
}

.navbar-collapse {
  padding-right: 15px;
  padding-left: 15px;
}
@media (max-width: 992px) {
  nav.navbar.bootsnav .navbar-nav {
    padding-left: 0px !important;
  }
}
</style>
