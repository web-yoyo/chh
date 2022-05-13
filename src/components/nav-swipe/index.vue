<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(image, index) in images" :key="index"
      ><img :src="image"
    /></van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
  const images = [
    'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  ]
</script>
<style lang="scss">
  .my-swipe .van-swipe-item {
    display: flex;
    justify-content: center;
    img {
      width: 375px;
      height: 200px;
    }
  }
</style>
