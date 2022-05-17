<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(image, index) in images" :key="index"
      ><div class="img-bg"><img :src="getImagUrl(image)" /></div
    ></van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
  import { getImagUrl } from '/@/utils/index'
  const images = ['home01.png', 'home02.png']
</script>
<style lang="scss">
  .my-swipe .van-swipe-item {
    display: flex;
    justify-content: center;
    .img-bg {
      position: relative;
      width: 375px;
      height: 200px;
    }
    img {
      position: absolute;
      top: -50px;
      width: 375px;
    }
  }
</style>
