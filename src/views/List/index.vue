<template>
  <NavSwipe />
  <div class="main">
    <van-nav-bar class="hot-title" title="微博热搜" />
    <HomeList ref="refHomelist" :active="active" />
    <TuweiDialog />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NavSwipe from '@/components/nav-swipe/index.vue'
  import HomeList from '@/components/home-list/index.vue'
  import TuweiDialog from '@/components/tuwei-dialog.vue'
  const active = ref(0)
  const refHomelist = ref(null)
</script>

<style lang="scss" scoped>
  .main {
    :deep().van-nav-bar__title {
      color: #e31818;
    }
    .item {
      width: 100px;
      height: 100px;
      background: #000;
    }
  }
</style>
