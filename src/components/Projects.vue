<script setup>
import { ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
let images = [
  { itemImageSrc: "/photo.png", alt: "abc" },
  { itemImageSrc: "/photo.png", alt: "abc" },
  { itemImageSrc: "/rh.png", alt: "abc" },
];
</script>
<template>
  <div id="projects">
    <h1>Projects</h1>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
  </div>
</template>

<style scoped>
h1 {
  color: var(--primary-color);
}
</style>
