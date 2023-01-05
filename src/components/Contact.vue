<script setup>
import { ref } from "vue";
let contacts = ref([
  {
    url: "https://github.com/rohithanss",
    title: " Github",
    id: "c1",
    className: "contact-github",
    icon: "pi pi-github",
  },
  {
    url: "https://www.linkedin.com/in/rohithanss/",
    title: " Linkedin",
    id: "c2",
    className: "contact-linkedin",
    icon: "pi pi-linkedin",
  },
  {
    url: null,
    title: " 9878377527",
    id: "c3",
    className: "contact-phone",
    icon: "pi pi-phone",
  },
  {
    url: "mailto:rhans6125@gmail.com",
    title: " rhans6125@gmail.com",
    id: "c4",
    className: "contact-email",
    icon: "pi pi-envelope",
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
    <h1>Contact</h1>
    <h3
      v-for="{ url, title, id, className, icon } in contacts"
      :id="className"
      :key="id"
      @click="openLink(url)"
    >
      <i :class="icon"></i>
      {{ title }}
    </h3>
  </div>
</template>

<style scoped>
#contact {
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
h3 {
  color: var(--text-color-secondary);
  cursor: pointer;
  transition: all 500ms;
}
h3:hover {
  color: var(--text-color);
}
</style>
