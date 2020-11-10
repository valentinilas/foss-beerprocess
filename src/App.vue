<template>
  <div id="app">
    <app-navigation />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <loader :spinner="loaded" />
  </div>
</template>


<script>
import Navigation from "./components/navigation/navigation.vue";
import Loader from "./components/loader/loader.vue";

export default {
  name: "App",
  data() {
    return {
      spinner: this.loaded,
     
    };
  },
  components: {
    "app-navigation": Navigation,
    loader: Loader,
  },
  computed: {
    loaded() {
      return this.$store.getters.getLoadedStatus;
    },
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
    // Register an event listener when the Vue component is ready
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },

  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize);
  },
  created() {
    this.$store.dispatch("preload");
  },
};
</script>

<style lang="scss" src="./app.scss" ></style>