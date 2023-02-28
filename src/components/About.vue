<script setup>
function openResume() {
  window.open("/fw21_1221-Rohit-Hans-Resume.pdf");
  window.location.href =
    "https://drive.google.com/u/0/uc?id=1PQXZpuqWcGN2Xnw2Z792DUU6qgZRKU_a&export=download";
}
function openGit() {
  window.open("https://github.com/rohithanss");
}
</script>
<template>
  <div id="about" class="about section">
    <img class="bitmoji" src="/xyz.png" alt="" />

    <h1>About</h1>
    <h3 id="user-detail-intro">
      A passionate and adaptable full stack web developer, skilled in
      JavaScript, Node JS, Express, MongoDB, with proficiency in
      problem-solving. A dependable and responsible team player with an eye to
      detail. Looking for a position to enhance once skills while significantly
      contributing to the company's growth.
    </h3>
    <div class="btn-div">
      <Button
        data-aos="fade-right"
        class="p-button-warning p-button-outlined"
        id="resume-button-2"
        @click="openResume"
      >
        <i class="pi pi-download"></i> Resume</Button
      >

      <Button
        class="p-button-warning p-button-outlined"
        data-aos="fade-left"
        @click="openGit"
      >
        <i class="pi pi-github"></i> Github</Button
      >
    </div>
  </div>
</template>

<style scoped>
#about {
  background-color: var(--surface-card);
  width: 100vw;
  min-height: 80vh;
  margin: 50px auto;
  padding: 20px 15%;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.bitmoji {
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 8%;
}
#user-detail-intro {
  letter-spacing: 1px;
  word-spacing: 5px;
  line-height: 27px;
}
h1 {
  color: var(--primary-color);
}
h3 {
  align-items: center;
  color: var(--text-color-secondary);
}
.p-button {
  gap: 10%;
  width: 20%;
  justify-content: center;
}
.btn-div {
  display: flex;
  gap: 10%;
  justify-content: center;
  width: 100%;
}

@media screen and (max-width: 1100px) {
}
@media screen and (max-width: 900px) {
}
@media screen and (max-width: 710px) {
  #about > div {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    align-items: center;
  }
  .p-button {
    width: 70%;
  }
  #user-detail-intro {
    text-align: center;
    letter-spacing: 0px;
    word-spacing: 5px;
    line-height: 27px;
  }
}
@media screen and (max-width: 450px) {
  #user-detail-intro {
    font-size: 16px;
  }
  .bitmoji {
    left: 5%;
    width: 20%;
  }
}
</style>
