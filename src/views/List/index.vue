<template>
  <van-tabs v-model:active="active">
    <van-tab title="标签 1" />
    <van-tab title="标签 2" />
  </van-tabs>
  <div class="main">
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const active = ref(0)
</script>

<style lang="scss">
  .main {
    display: flex;
    justify-content: space-between;
    .item {
      width: 100px;
      height: 100px;
      background: #000;
    }
  }
</style>
