<template>
  <div>
     <router-link class="in-page-link in-page-link--welcome" to="/step-1">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Watch "Welcome"</div>
         </div>
     </router-link>
      <router-link class="in-page-link in-page-link--grinding" to="/step-1">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Watch "Grinding"</div>
         </div>
     </router-link>
    <video id="step-start" class="step-video" width="1280" height="720" autoplay muted preload loop disablePictureInPicture >
      <source src="../../assets/videos/sample.mp4" type="video/mp4" />
    </video>
  </div>
</template>




<script lang="js" src="./Start.js"></script>
<style lang="scss" src="./Start.scss" ></style>