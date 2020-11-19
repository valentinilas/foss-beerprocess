<template>
  <div>
     <router-link class="in-page-link in-page-link--welcome" to="/step-2">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Watch "Malt grinding"</div>
         </div>
     </router-link>
      <router-link class="in-page-link in-page-link--grinding" to="/step-6">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Watch "Mashing"</div>
         </div>
     </router-link>
    <video id="step-2" class="step-video" width="1280" height="720" autoplay preload loop disablePictureInPicture>
      <source src="../../assets/videos/waiting-02.mp4" type="video/mp4" />
    </video>
  </div>
</template>


<script lang="js" src="./Step-2.js"></script>
<style lang="scss" src="./Step-2.scss" ></style>