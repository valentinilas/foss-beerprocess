<template>
  <transition name="fade" mode="out-in">
    <div>
      <router-link class="in-page-link in-page-link--welcome" to="/step-1-talk">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Welcome</div>
        </div>
      </router-link>
      <router-link class="in-page-link in-page-link--grinding" to="/step-2">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Malt grinding</div>
        </div>
      </router-link>
      <video id="step-start" class="step-video" width="1280" height="720" autoplay preload loop disablePictureInPicture>
        <source src="../../assets/videos/waiting-01.mp4" type="video/mp4" />
      </video>
    </div>
  </transition>
</template>

<script lang="js" src="./Step-1.js"></script>
<style lang="scss" src="./Step-1.scss"></style>
