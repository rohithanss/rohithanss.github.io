<script setup></script>
<template>
  <div id="nav-menu">
    <img src="/rh.png" alt="" />
    <!-- <h2>RH</h2> -->
    <i class="pi pi-bars" @click="$emit('showSidebar')"></i>
  </div>
</template>

<style scoped>
#nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 25px;
  border: 1px solid var(--surface-border);
  background-color: var(--surface-c);
  background-color: var(--surface-card);
}

div > img {
  height: 30px;
}
div > h2 {
  color: var(--text-color);
  cursor: pointer;
}
i {
  cursor: pointer;
  color: var(--text-color-secondary);
  font-size: 17px;
}
i:hover {
  color: var(--primary-color);
}
</style>
