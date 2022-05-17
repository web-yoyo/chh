<template>
  <NavSwipe />
  <van-tabs v-model:active="active" @change="onTabChange">
    <van-tab title="标签 A" />
    <van-tab title="标签 B" />
  </van-tabs>
  <div class="main">
    <HomeList ref="refHomelist" :active="active" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NavSwipe from '@/components/nav-swipe/index.vue'
  import HomeList from '@/components/home-list/index.vue'
  const active = ref(0)
  const refHomelist = ref(null)
  const onTabChange = () => {
    ;(refHomelist as any).value.onRefresh()
  }
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
