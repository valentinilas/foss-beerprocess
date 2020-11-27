<template>
  <div>
     <router-link class="in-page-link in-page-link--welcome" to="/step-3-talk">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Mashing</div>
         </div>
     </router-link>
      <transition name="zoom">
     <router-link v-if="ended" class="in-page-link in-page-link--how-to" to="/step-3-talk-howto">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Measure a sample</div>
         </div>
     </router-link>
      </transition>
      <router-link class="in-page-link in-page-link--lautering" to="/step-4">
         <div class="in-page-link__wrapper">
             <div class="in-page-link__icon"></div>
             <div class="in-page-link__text">Lautering</div>
         </div>
     </router-link>
    <video id="step-3" class="step-video" width="1280" height="720" autoplay preload loop disablePictureInPicture >
      <source src="../../assets/videos/waiting-03.mp4" type="video/mp4" />
    </video>
  </div>
</template>


<script lang="js" src="./Step-3.js"></script>
<style lang="scss" src="./Step-3.scss" ></style>