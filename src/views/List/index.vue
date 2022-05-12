<template>
  <h1>List</h1>
  <MyHello />
  <div class="main">
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<script setup lang="ts">
  import MyHello from '@/components/my-hello.vue'
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
