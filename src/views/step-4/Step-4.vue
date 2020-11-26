<template>
  <div>
     <router-link class="in-page-link in-page-link--welcome" to="/step-4-talk">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Lautering</div>
         </div>
     </router-link>
      <router-link class="in-page-link in-page-link--grinding" to="/step-5">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Boiling</div>
         </div>
     </router-link>
    <video id="step-4" class="step-video" width="1280" height="720" autoplay loop disablePictureInPicture >
      <source src="../../assets/videos/waiting-04.mp4" type="video/mp4" />
    </video>
  </div>
</template>


<script lang="js" src="./Step-4.js"></script>
<style lang="scss" src="./Step-4.scss" ></style>