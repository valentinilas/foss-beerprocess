<template>
  <div>
    <transition name="zoom">
      <router-link v-if="videoEnded" class="in-page-link in-page-link--startover" to="/step-1">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Start over</div>
        </div>
      </router-link>
    </transition>
    <transition name="zoom">
      <router-link v-if="videoEnded" class="in-page-link in-page-link--testimonial" to="/step-8">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">See testimonial</div>
        </div>
      </router-link>
    </transition>
    <transition name="zoom">
      <router-link v-if="videoEnded" class="in-page-link in-page-link--water" to="/step-9">
        <div class="in-page-link__wrapper">
          <div class="in-page-link__icon"></div>
          <div class="in-page-link__text">Watering hole</div>
        </div>
      </router-link>
    </transition>
    <video id="step-7-talk" class="step-video" width="1280" height="720" autoplay preload disablePictureInPicture>
      <source src="../../assets/videos/07-packaging.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script lang="js" src="./Step-7-talk.js"></script>
<style lang="scss" src="./Step-7-talk.scss"></style>
