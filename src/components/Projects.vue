<script setup>
import { ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
let images = [
  {
    imgSrc: "/flashTyper.png",
    alt: "abc",
    title: "Flash Typer Play",
    description:
      "is an online type racer, where players can compete with each other on the basis of their typing speed.",
    features:
      "Compete with other Players, Practice alone, Leaderboard with top players' name and speed, and Admin can manage all players and add/edit paragraphs for race.",
    techStack: "VueJS, NodeJS, ExpressJS, Socket.io, Redis and MongoDB",

    github: "https://github.com/rohithanss/Flash-Type-Racer",
    deployed: "https://flash-typer-play.netlify.app/",
  },
  {
    imgSrc: "/over.png",
    alt: "abc",
    title: "OverStock",
    description:
      "is an e-commerce Website primarily sales furniture as well home decors.",
    features:
      "User's Wishlist, Cart, Payment, and Order pages as well as Seller's Order management, Customer details, Edit and Add new products.",
    techStack: "HTML, CSS, JavaScript, ExpressJS, and MongoDB",

    github: "https://github.com/rohithanss/OverStock-Clone",
    deployed: "https://kars-stock.netlify.app/",
  },
  {
    imgSrc: "/jolly.png",
    alt: "abc",
    title: "SurveyMonkey",
    techStack: "HTML, CSS,and JavaScript",
    description:
      "helps businesses to take feedback from employees, customers etc., and analysis the same.",
    features:
      "Home Page, Login/Signup page, and Plans and Pricing Page, along with full responsiveness.",
    github: "https://github.com/rohithanss/SurveyMonkey-Clone",
    deployed: "https://jolly-rat-6057.netlify.app/",
  },
  {
    imgSrc: "/pharmeasy.png",
    alt: "abc",
    title: "PharmEasy",
    techStack: "HTML, CSS, JavaScript, and JSON server",
    description:
      "is an online pharmacy store sells medicines, along with provide lab test booking service.",

    features:
      "User's Cart, and Payment pages, as well as Seller's Order management, Customer details, Edit and Add new products.",
    github: "https://github.com/rohithanss/Pharmeasy-Clone",

    deployed: "https://marspharmacy.netlify.app/",
  },
  // {
  //   imgSrc: "/blogapp.png",
  //   alt: "abc",
  //   title: "Rohit's Blog App",
  //   techStack: "VueJS, ExpressJS, Socket.io and MongoDB",
  //   description:
  //     "is a simple blog app, where a writer can add a simple text blog.",
  //   features:
  //     "User can read, like and comment only, Writer can add, edit and delete his Blogs, Admin can edit all users info and delete them, signup and forgot password with OTP",
  //   github: "https://github.com/rohithanss/rohit-blog-app",
  //   deployed: "https://rohit-blog-app.netlify.app/",
  // },
];
</script>
<template>
  <div id="projects">
    <h1>Projects</h1>
    <ProjectCard
      v-for="{
        imgSrc,
        title,
        techStack,
        description,
        github,
        deployed,
        features,
      } in images"
      :imgSrc="imgSrc"
      :title="title"
      :techStack="techStack"
      :github="github"
      :description="description"
      :features="features"
      :deployed="deployed"
    ></ProjectCard>
  </div>
</template>

<style scoped>
h1 {
  color: var(--primary-color);
}
</style>
