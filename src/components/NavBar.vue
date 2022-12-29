<script setup>
import { ref } from "vue";

function home() {
  window.location.hash = "#home";
}
function about() {
  window.location.hash = "#about";
}
function skills() {
  window.location.hash = "#skills";
}
function projects() {
  window.location.hash = "#projects";
}
function contact() {
  window.location.hash = "#contact";
}
// function contact() {
//   window.location.hash = "#contact";
// }
</script>
<template>
  <div id="nav-bar">
    <img src="/rh.png" alt="" />
    <!-- <h2>RH</h2> -->
    <div>
      <p @click="home" class="nav-link home">Home</p>
      <p @click="about" class="nav-link about">About</p>
      <p @click="skills" class="nav-link skills">Skills</p>
      <p @click="projects" class="nav-link projects">Projects</p>
      <p @click="contact" class="nav-link contact">Contact</p>
      <p class="nav-link resume">Resume</p>
    </div>
  </div>
</template>

<style scoped>
#nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 25px;
  border: 1px solid var(--surface-border);
  background-color: var(--surface-c);
  background-color: var(--surface-card);
}
div {
  display: flex;
  align-items: center;
  gap: 25px;
}
div > img {
  height: 40px;
}
div > h2 {
  color: var(--text-color);
  cursor: pointer;
}
div > p {
  font-size: 17px;
  color: var(--text-color-secondary);
  cursor: pointer;
  padding: 5px;
  border-radius: var(--border-radius);
  transition: all 250ms;
}
div > p:hover {
  color: var(--primary-color);
  background-color: var(--primary-text-color);
}

@media screen and (max-width: 710px) {
  #nav-bar {
    flex-direction: column;
    border: none;
    width: 100%;
    background-color: none;
  }
  #nav-bar > img {
    display: none;
  }
  #nav-bar > div {
    width: 100%;
    flex-direction: column;
  }
  #nav-bar > div > p {
    width: 100%;
    text-align: center;
  }
  #nav-bar > div > p:hover {
    background-color: var(--surface-border);
  }
}
</style>
