<script setup>
const props = defineProps([
  "imgSrc",
  "title",
  "description",
  "techStack",
  "features",
  "github",
  "deployed",
]);

function openWeb() {
  window.open(props.deployed, "_blank");
}

function openRepo() {
  window.open(props.github, "_blank");
}
</script>
<template>
  <div class="project-card" data-aos="fade-up" data-aos-duration="1500">
    <div class="project-image">
      <Image
        :src="props.imgSrc"
        alt="Image Text"
        :imageStyle="{ width: '100%' }"
        preview
      >
        <template #indicator>
          <i class="pi pi-eye" :style="{ 'font-size': '20px' }"></i>
        </template>
      </Image>
    </div>
    <div class="project-info">
      <h3 class="project-title">Name: {{ title }}</h3>

      <p class="project-description">
        <span>{{ title }}</span>
        {{ description }}
      </p>

      <p class="project-features">
        <span>Features:</span>
        {{ features }}
      </p>

      <p class="project-tech-stack"><span>Tech Stack:</span> {{ techStack }}</p>

      <div class="btn-div">
        <Button
          class="p-button-outlined p-button-success project-github-link"
          @click="openRepo"
          >Github</Button
        >
        <Button
          class="p-button-outlined p-button-danger project-deployed-link"
          @click="openWeb"
          >Deployed</Button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  border-radius: var(--border-radius);
  border: 2px solid var(--surface-border);
  gap: 30px;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.project-image {
  width: 40%;
  display: flex;
  justify-content: center;
}

.btn-div {
  display: flex;
  gap: 20px;
}
.p-image {
  width: 100%;
}
.project-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
}
.project-info > p > span {
  font-weight: 600;
  color: var(--text-color);
}
.project-info > p {
  color: var(--text-color-secondary);
}
@media screen and (max-width: 1100px) {
  .project-image {
    width: 50%;
  }
  .project-info {
    width: 45%;
  }
}
@media screen and (max-width: 900px) {
  .project-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
  }
  .project-image {
    width: 100%;
  }
  .project-info {
    width: 100%;
  }
}
@media screen and (max-width: 710px) {
}
@media screen and (max-width: 450px) {
}
</style>
