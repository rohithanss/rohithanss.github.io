<script setup>
const props = defineProps([
  "imgSrc",
  "title",
  "description",
  "techStack",
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
  <div class="project-card">
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
      <h3 class="project-title">{{ title }}</h3>
      <h4 class="project-description">Description:</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam
        numquam doloribus impedit odio, inventore ut perferendis vel labore
        laboriosam saepe nihil fuga eius tempore dolorum eos suscipit explicabo
        quisquam libero consequatur dolores quae in mollitia voluptates? Fugiat,
        voluptates quibusdam cupiditate minus totam, magni, provident dolores
        quod iure repellendus aliquid.
      </p>
      <h4 class="project-tech-stack">Teck Stack:{{ techStack }}</h4>
      <div>
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

.p-image {
  width: 100%;
}
.project-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
}
.project-info > div {
  display: flex;
  gap: 20px;
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
