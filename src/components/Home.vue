<script setup></script>
<template>
  <div id="home">
    <img
      data-aos="fade-right"
      data-aos-duration="1500"
      class="bitmoji"
      src="/abc.png"
      alt=""
    />

    <div>
      <h3 id="greeting">Hello there, I'm</h3>
      <h1 id="user-detail-name">Rohit Hans</h1>
      <h2 id="user-title">Full Stack Web Developer</h2>
    </div>
    <img class="home-img" src="/photo.png" alt="profile-pic" />
  </div>
</template>

<style scoped>
#home {
  flex-direction: row;
  width: 100vw;
  position: relative;
}
.bitmoji {
  position: absolute;
  left: 0;
  top: 10px;
  z-index: 0;
  width: 15%;
}
#home > div {
  font-size: 16px;
}
h3 {
  font-size: 1.5em;
}
h2 {
  font-size: 2.5em;
}
h1 {
  color: var(--primary-color);
  text-align: left;
  font-size: 4em;
}

.home-img {
  width: 30%;
  border-radius: 50%;
}

@media screen and (max-width: 1100px) {
  #home > div {
    font-size: 14px;
  }
  .home-img {
    width: 35%;
  }
}
@media screen and (max-width: 900px) {
  #home > div {
    font-size: 12px;
  }
  .home-img {
    width: 40%;
  }
}
@media screen and (max-width: 710px) {
  #home {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 20px;
  }
  #greeting {
    display: none;
  }
  #home > div > * {
    text-align: center;
  }
  .home-img {
    width: 45%;
  }
}
@media screen and (max-width: 450px) {
  #home > div > * {
    text-align: center;
  }
  .home-img {
    width: 70%;
  }
  .bitmoji {
    width: 35%;
  }
}
</style>
