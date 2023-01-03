<script setup></script>
<template>
  <div class="project-card">
    <div class="project-image">
      <Image
        src="photo.png"
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
      <h3>title</h3>
      <h4>Description:</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam
        numquam doloribus impedit odio, inventore ut perferendis vel labore
        laboriosam saepe nihil fuga eius tempore dolorum eos suscipit explicabo
        quisquam libero consequatur dolores quae in mollitia voluptates? Fugiat,
        voluptates quibusdam cupiditate minus totam, magni, provident dolores
        quod iure repellendus aliquid.
      </p>
      <div>
        <Button class="p-button-outlined p-button-success">Github</Button>
        <Button class="p-button-outlined p-button-danger">Deployed</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  border-radius: var(--border-radius);
  border: 2px solid var(--surface-border);
  padding: 10px;
  margin-top: 20px;
  display: flex;
}
.project-image {
  width: 30%;
  display: flex;
  justify-content: center;
}

.p-image {
  width: 80%;
}
.project-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 70%;
}
.project-info > div {
  display: flex;
  gap: 20px;
}
</style>
