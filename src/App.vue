<script setup>
import { ref, computed, onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import MobileNavBar from "./components/MobileNavBar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import GithubStats from "./components/GithubStats.vue";
import Contact from "./components/Contact.vue";

import "primevue/resources/themes/md-light-deeppurple/theme.css";

const clickMePos = ref(200);
const clickMeStyle = computed(() => {
  return {
    position: "absolute",
    transition: "all 500ms",
    cursor: "pointer",
    top: `${clickMePos.value}px`,
    "z-index": 2,
  };
});
const visible = ref(false);
const showCI = ref(true);
function showBar() {
  visible.value = true;
}
onMounted(() => {
  window.onscroll = () => {
    let val = window.scrollY;
    clickMePos.value = 300 + val;
  };
});
</script>

<template>
  <div id="main-container">
    <!-- <h1 id="click-me" :style="clickMeStyle">click me</h1> -->
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
    <Skills class="section"></Skills>
    <Projects class="section"></Projects>
    <GithubStats></GithubStats>
    <Contact class="footer"></Contact>
    <!-- <ImageGallery></ImageGallery> -->
  </div>
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
  position: sticky;
  top: 0;
  z-index: 3;
  display: none;
}
#nav-container {
  position: sticky;
  top: 0;
  z-index: 3;
}
#main-container {
  position: relative;
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
