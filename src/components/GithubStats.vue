<script setup>
import { ref, onMounted } from "vue";

let calendar = document.querySelector(".calendar");

onMounted(() => {
  document.getElementById("github-calendar").append(calendar);
});
</script>

<template>
  <div id="github">
    <h1>Github Stats</h1>

    <div class="stats-div">
      <div>
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=rohithanss&show_icons=true&locale=en"
          alt="rohithanss"
          style="margin-right: 10px; width: 100%"
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com?user=rohithanss&"
          alt="rohithanss"
          style="width: 100%"
        />
      </div>

      <div>
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=rohithanss&lans-count=4"
          alt="rohithanss"
          style="width: 100%"
        />
      </div>
    </div>
    <h1>Github Calendar</h1>
    <div id="github-calendar"></div>
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
.stats-div {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  width: 100%;
}
.stats-div > div:first-child {
  width: 40%;
  display: flex;
  gap: 5px;
  flex-direction: column;
}
.stats-div > div:last-child {
  width: 40%;
}
h1 {
  color: var(--primary-color);
}

#github-calendar {
  width: 80vw;
}
@media screen and (max-width: 900px) {
  .stats-div {
    flex-direction: column-reverse;
    gap: 15px;
  }
  .stats-div > div:last-child {
    width: 80%;
  }
  .stats-div > div:first-child {
    width: 80%;
    gap: 15px;
  }
}
</style>
