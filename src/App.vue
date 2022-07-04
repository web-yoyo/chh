<template>
  <router-view />
</template>

<script setup lang="ts">
  const checkWeixin = () => {
    var u = navigator.userAgent
    console.log(u, 'navigator.userAgent')

    // 判断是否为微信浏览器
    if (u.indexOf('MicroMessenger') > -1 || u.indexOf('MQQBrowser') > -1) {
      return true
    }
    return false
  }
  console.log(checkWeixin())
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
