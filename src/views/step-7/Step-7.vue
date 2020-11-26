<template>
  <div>
     <router-link class="in-page-link in-page-link--welcome" to="/step-7-talk">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Finished beer</div>
         </div>
     </router-link>

    <video id="step-7" class="step-video" width="1280" height="720" autoplay preload loop disablePictureInPicture >
      <source src="../../assets/videos/waiting-07.mp4" type="video/mp4" />
    </video>
  </div>
</template>


<script lang="js" src="./Step-7.js"></script>
<style lang="scss" src="./Step-7.scss" ></style>