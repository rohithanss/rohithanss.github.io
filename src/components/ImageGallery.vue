<script setup>
import { ref } from "vue";

const images = [
  { itemImageSrc: "photo.png", alt: "adsf" },
  { itemImageSrc: "photo.png", alt: "adsf" },
  { itemImageSrc: "photo.png", alt: "adsf" },
  { itemImageSrc: "photo.png", alt: "adsf" },
  { itemImageSrc: "photo.png", alt: "adsf" },
];
const activeIndex = 2;
const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 5,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
];

let imgStyle = {
  width: "20%",
  height: "100%",
};
</script>
<template>
  <h1>image</h1>
  <div class="section">
    <div class="inside" :style="{ width: '500vw' }">
      <div :style="imgStyle" v-for="{ itemImageSrc, alt } in images">
        <Image
          :src="itemImageSrc"
          alt="Image Text"
          :imageStyle="{ width: '50%' }"
          preview
        >
          <template #indicator>
            <i class="pi pi-eye" :style="{ 'font-size': '20px' }"></i>
          </template>
        </Image>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  background-color: var(--surface-card);
  width: 100vw;
  min-height: 80vh;
  margin: 50px auto;
  padding: 20px 30px;
  display: flex;
  gap: 25px;
  align-items: center;
}
.inside {
  display: flex;
}
.inside > div {
  display: flex;
  justify-content: center;
}
</style>
