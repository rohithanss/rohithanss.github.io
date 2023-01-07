<script setup>
import { ref } from "vue";
let contacts = ref([
  {
    url: "https://github.com/rohithanss",
    title: " Github",
    id: "c1",
    className: "contact-github",
    icon: "pi pi-github",
    animate: {
      "data-aos": "fade-left",
      "data-aos-duration": "2000",
    },
  },
  {
    url: "https://www.linkedin.com/in/rohithanss/",
    title: " Linkedin",
    id: "c2",
    className: "contact-linkedin",
    icon: "pi pi-linkedin",
    animate: {
      "data-aos": "fade-right",
      "data-aos-duration": "2000",
    },
  },
  {
    url: null,
    title: " 9878377527",
    id: "c3",
    className: "contact-phone",
    icon: "pi pi-phone",
    animate: {
      "data-aos": "fade-left",
      "data-aos-duration": "2000",
    },
  },
  {
    url: "mailto:rhans6125@gmail.com",
    title: " rhans6125@gmail.com",
    id: "c4",
    className: "contact-email",
    icon: "pi pi-envelope",
    animate: {
      "data-aos": "fade-right",
      "data-aos-duration": "2000",
    },
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
      v-for="{ url, title, id, className, icon, animate } in contacts"
      :id="className"
      :key="id"
      @click="openLink(url)"
      v-bind="animate"
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
i {
  font-size: 25px;
}
h3 {
  color: var(--text-color-secondary);
  cursor: pointer;
  font-size: 25px;
  transition: all 500ms;
}
h3:hover {
  color: var(--text-color);
}
</style>
