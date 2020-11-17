<template>
  <div id="app">
    <app-navigation />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- Preload -->
     <video class="d-none" width="1280" height="720"  preload >
      <source src="./assets/videos/sample2.mp4" type="video/mp4" />
    </video>
     <video class="d-none" width="1280" height="720"  preload >
      <source src="./assets/videos/sample3.mp4" type="video/mp4" />
    </video>
     <video class="d-none" width="1280" height="720"  preload >
      <source src="./assets/videos/sample4.mp4" type="video/mp4" />
    </video>
     <video class="d-none" width="1280" height="720"  preload >
      <source src="./assets/videos/sample5.mp4" type="video/mp4" />
    </video>
     <video class="d-none" width="1280" height="720"  preload >
      <source src="./assets/videos/sample6.mp4" type="video/mp4" />
    </video>
  </div>
</template>


<script>
import Navigation from "./components/navigation/navigation.vue";

export default {
  name: "App",

  components: {
    "app-navigation": Navigation,
  },

  methods: {
    onResize() {
      var scale;
      let rootEl = document.getElementById("app");
      let windowWidth =  window.innerWidth;
      let windowHeight = window.innerHeight;
      let elWidth = rootEl.clientWidth;
      let elHeight = rootEl.clientHeight;

      scale = Math.min(windowWidth / elWidth, windowHeight / elHeight);
      if(windowWidth < 1920){
        rootEl.style.transform = "scale(" + scale + ")";
      }
     
    },
  },

  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }

};
</script>

<style lang="scss" src="./app.scss" ></style>