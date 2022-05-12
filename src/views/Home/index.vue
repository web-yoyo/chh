<template>
  <RouterView />
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o">逛逛</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const active = ref(0)
  const tabbarPath = ['/home/list', '/home/search', '/home/look', '/home/about']

  const onChange = (index: string | number) => {
    router.push(tabbarPath[index])
  }
</script>
