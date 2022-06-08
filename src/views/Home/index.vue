<template>
  <RouterView />
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">音乐</van-tabbar-item>
    <van-tabbar-item icon="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o">逛逛</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const active = ref(0)
  const tabbarPath = ['/home/music', '/home/search', '/home/list', '/home/about']

  watch(
    () => router.currentRoute.value,
    (val) => {
      let index = tabbarPath.indexOf(val.path)
      active.value = index
    },
    { immediate: true },
  )

  const onChange = (index: string | number) => {
    router.push(tabbarPath[index])
  }
</script>
