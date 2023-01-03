<script setup>
import { ref } from "vue";
let contacts = ref([
  {
    url: "https://github.com/rohithanss",
    title: "Github",
    id: "c1",
    className: "contact-github",
  },
  {
    url: "https://www.linkedin.com/in/rohithanss/",
    title: "Linkedin",
    id: "c2",
    className: "contact-linkedin",
  },
  { url: null, title: "9878377527", id: "c3", className: "contact-phone" },
  {
    url: "mailto:rhans6125@gmail.com",
    title: "Email: rhans6125@gmail.com",
    id: "c4",
    className: "contact-email",
  },
]);
function openLink(link) {
  if (link == null) {
    return;
  }
  window.open(link, "_blank");
}
</script>
<template>
  <div id="contact">
    <h1>contact</h1>
    <h3
      v-for="{ url, title, id, className } in contacts"
      :id="className"
      :key="id"
      @click="openLink(url)"
    >
      {{ title }}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  color: var(--primary-color);
}
h3 {
  align-items: center;
  color: var(--text-color-secondary);
  cursor: pointer;
  transition: all 500ms;
}
h3:hover {
  color: var(--text-color);
}
</style>
