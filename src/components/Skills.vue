<script setup>
import { ref } from "vue";
</script>
<template>
  <div id="skills">
    <h1>Skills</h1>
  </div>
</template>

<style scoped>
#skills {
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
</style>
