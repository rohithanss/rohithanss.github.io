<script setup>
import { ref, computed } from "vue";

const skills = ref([
  {
    title: "HTML",
    image: "skills/html.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "CSS",
    image: "skills/css.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "JavaScript",
    image: "skills/js.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "AngularJS",
    image: "skills/angularJs.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "VueJS",
    image: "skills/vueJs.png",
    imgStyle: false,
    titleStyle: {},
  },

  {
    title: "NodeJS",
    image: "skills/nodejs.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "ExpressJS",
    image: "skills/expressJs.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "MongoDB",
    image: "skills/mongodb.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "MySQL",
    image: "skills/mysql.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "Socket.io",
    image: "skills/socket.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "Redis",
    image: "skills/redis.png",
    imgStyle: false,
    titleStyle: {},
  },
]);

const tools = ref([
  {
    title: "GitHub",
    image: "skills/github.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "Git",
    image: "skills/git.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "VS Code",
    image: "skills/vscode.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "Burp Suite",
    image: "skills/burpSuite.png",
    imgStyle: false,
    titleStyle: {},
  },
  {
    title: "PrimeVue",
    image: "skills/primevue.png",
    imgStyle: false,
    titleStyle: {},
  },
]);

const imgHover = ref(false);
const mouseOver = (i, type) => {
  if (type == "skills") {
    skills.value[i].titleStyle = {
      color: "var(--primary-color)",
      letterSpacing: "1px",
    };
    skills.value[i].imgStyle = true;
  } else {
    tools.value[i].titleStyle = {
      color: "var(--primary-color)",
      letterSpacing: "1px",
    };
    tools.value[i].imgStyle = true;
  }
};
const mouseOut = (i, type) => {
  if (type == "skills") {
    skills.value[i].titleStyle = {};
    skills.value[i].imgStyle = false;
  } else {
    tools.value[i].titleStyle = {};
    tools.value[i].imgStyle = false;
  }
};
</script>
<template>
  <div id="skills" data-aos="fade-up" data-aos-duration="1000">
    <h1>Skills</h1>

    <div class="card-container skills-container">
      <div
        class="skills-card"
        v-for="({ title, image, imgStyle, titleStyle }, index) of skills"
        :key="index"
        data-aos="fade-up"
        data-aos-duration="1000"
        @mouseover="mouseOver(index, 'skills')"
        @mouseout="mouseOut(index, 'skills')"
      >
        <img
          class="skills-card-img"
          :src="image"
          :class="{ imgOver: imgStyle }"
          alt="html"
        />
        <h2 class="skills-card-name" :style="titleStyle">{{ title }}</h2>
      </div>
    </div>
    <!-- <h1>Tools</h1> -->
    <div class="card-container tools-container">
      <div
        class="skills-card"
        v-for="({ title, image, imgStyle, titleStyle }, index) of tools"
        :key="index"
        @mouseover="mouseOver(index, 'tools')"
        @mouseout="mouseOut(index, 'tools')"
      >
        <img
          class="skills-card-img"
          :src="image"
          :class="{ imgOver: imgStyle }"
          alt="html"
        />
        <h2 class="skills-card-name" :style="titleStyle">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
#skills {
  background-color: var(--surface-card);
  width: 100vw;
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

.card-container {
  gap: 30px 50px;
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(3, 145px);
  width: auto;
  height: auto;
  margin: auto;
  box-sizing: content-box;
  transition: all 250ms;
}

.tools-container {
  display: none;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(1, 145px);
}
.card-container > .skills-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px;
  border-radius: var(--border-radius);
}
.skills-card-img {
  width: 50%;
  transition: all 250ms;
}

.imgOver {
  width: 60%;
}
.skills-card-name {
  font-size: 25px;
  color: var(--text-color-secondary);
  cursor: pointer;
  transition: all 250ms;
}
@media screen and (max-width: 900px) {
  .card-container {
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(4, 140px);
    gap: 30px 40px;
  }
  .tools-container {
    grid-template-rows: repeat(2, 140px);
  }
  .skills-card-img {
    width: 50%;
  }

  .imgOver {
    width: 60%;
  }
  .skills-card-name {
    font-size: 25px;
  }
}
@media screen and (max-width: 710px) {
  .card-container {
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(4, 140px);
  }
  .tools-container {
    grid-template-rows: repeat(2, 140px);
  }
  .skills-card-img {
    width: 45%;
  }

  .imgOver {
    width: 55%;
  }
  .skills-card-name {
    font-size: 25px;
  }
}
@media screen and (max-width: 550px) {
  .card-container {
    gap: 20px 10px;
    grid-template-columns: repeat(3, 130px);
    grid-template-rows: repeat(4, 130px);
  }
  .tools-container {
    grid-template-rows: repeat(2, 130px);
  }
  .skills-card-img {
    width: 35%;
  }

  .imgOver {
    width: 45%;
  }
  .skills-card-name {
    font-size: 17px;
  }
}
@media screen and (max-width: 450px) {
  .card-container {
    gap: 10px 10px;
    justify-content: center;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(4, 100px);
  }
  .tools-container {
    grid-template-rows: repeat(2, 100px);
  }
  .skills-card-img {
    width: 35%;
  }

  .imgOver {
    width: 45%;
  }
  .skills-card-name {
    font-size: 17px;
  }
}
</style>
