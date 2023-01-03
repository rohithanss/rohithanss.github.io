<script setup>
import NavBar from "./components/NavBar.vue";
import MobileNavBar from "./components/MobileNavBar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import GithubStats from "./components/GithubStats.vue";
import Contact from "./components/Contact.vue";
import ImageGallery from "./components/ImageGallery.vue";

import { ref, computed } from "vue";

const visible = ref(false);
const showCI = ref(true);
function showBar() {
  visible.value = true;
}
</script>

<template>
  <div id="nav-container"><NavBar></NavBar></div>
  <div id="mobile-nav">
    <MobileNavBar @show-sidebar="showBar"></MobileNavBar>
  </div>

  <Sidebar
    id="sidebar-con"
    v-model:visible="visible"
    position="right"
    :show-close-icon="showCI"
    close-icon="pi pi-times"
  >
    <NavBar
  /></Sidebar>
  <Home class="section"></Home>
  <About></About>
  <Skills></Skills>
  <Projects class="section"></Projects>
  <GithubStats></GithubStats>
  <Contact class="section"></Contact>
  <!-- <ImageGallery></ImageGallery> -->
</template>

<style scoped>
.section {
  background-color: var(--surface-card);
  width: 100vw;
  min-height: 80vh;
  margin: 50px auto;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: var(--primary-color);
}
#mobile-nav {
  display: none;
}

@media screen and (max-width: 710px) {
  #about {
    height: auto;
  }
  #nav-container {
    display: none;
  }
  #mobile-nav {
    display: block;
  }
}
</style>
