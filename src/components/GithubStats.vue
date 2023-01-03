<script setup>
import { ref } from "vue";
</script>
<template>
  <div id="github">
    <h1>Github Stats</h1>
  </div>
</template>

<style scoped>
#github {
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
