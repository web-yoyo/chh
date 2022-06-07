<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(image, index) in images" :key="index"
      ><div class="img-bg"><img :src="image.includes('http') ? image : getImagUrl(image)" /></div
    ></van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { getImagUrl, getRndInteger } from '/@/utils/index'
  import { fetchImg } from '/@/api/service'
  const images = ['bdd01.png', 'bdd02.png', 'bdd03.png', 'bdd04.png']
  onMounted(() => {
    for (let i = 0; i < 4; i++) {
      getImg(i)
    }
  })

  const ImgType = ['男', '女']
  const getImg = async (index) => {
    const data = await fetchImg(ImgType[getRndInteger(0, 1)])
    if (data.code === 1) {
      images.splice(index, 1, data.imgurl)
    }
  }
</script>
<style lang="scss">
  .my-swipe .van-swipe-item {
    display: flex;
    justify-content: center;
    .img-bg {
      position: relative;
      width: 375px;
      height: 300px;
    }
    img {
      position: absolute;
      top: -50px;
      width: 375px;
    }
  }
</style>
