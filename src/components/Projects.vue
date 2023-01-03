<script setup>
import { ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
let images = [
  {
    imgSrc: "/over.png",
    alt: "abc",
    title: "Over-Stock Clone",
    techStack: "HTML, CSS, JavaScript, ExpressJS, and MongoDB",

    github: "https://github.com/rohithanss/fluffy-cough-192",
    deployed: "https://kars-stock.netlify.app/",
  },
  {
    imgSrc: "/jolly.png",
    alt: "abc",
    title: "Survey Money Clone",
    techStack: "HTML, CSS,and JavaScript",
    github: "https://github.com/rohithanss/jolly-rat-6057",
    deployed: "https://jolly-rat-6057.netlify.app/",
  },
  {
    imgSrc: "/pharmeasy.png",
    alt: "abc",
    title: "PharmEasy Clone",
    techStack: "HTML, CSS, JavaScript, and JSON server",
    github: "https://github.com/rohithanss/purple-crook-1402",
    deployed: "https://marspharmacy.netlify.app/",
  },
  {
    imgSrc: "/over.png",
    alt: "abc",
    title: "Over-Stock Clone",
    techStack: "HTML, CSS, JavaScript, ExpressJS, and MongoDB",
    github: "https://github.com/rohithanss/fluffy-cough-192",
    deployed: "https://kars-stock.netlify.app/",
  },
];
</script>
<template>
  <div id="projects">
    <h1>Projects</h1>
    <ProjectCard
      v-for="{ imgSrc, title, techStack, github, deployed } in images"
      :imgSrc="imgSrc"
      :title="title"
      :techStack="techStack"
      :github="github"
      :deployed="deployed"
    ></ProjectCard>
  </div>
</template>

<style scoped>
h1 {
  color: var(--primary-color);
}
</style>
