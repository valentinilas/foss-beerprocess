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
  // data() {
  //   return {
  //     spinner: this.loaded,
  //   };
  // },
  components: {
    "app-navigation": Navigation,
    loader: Loader,
  },
  computed:{
    loaded(){
      return this.$store.getters.getLoadedStatus;
    }
  },
  created(){
    this.$store.dispatch('preload');
  }
};
</script>

<style lang="scss" src="./app.scss" ></style>