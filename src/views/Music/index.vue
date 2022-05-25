<template>
  <div class="main-look">
    <MusicCard />
  </div>
</template>

<script setup lang="ts">
  import MusicCard from '@/components/music-card/index.vue'
</script>

<style lang="scss">
  .main-look {
    color: #323233;
    font-size: 28px;
    padding-top: 100px;
    padding-bottom: 50px;
    background: linear-gradient(180deg, #ff976a, rgba(0, 0, 0, 0));
  }
</style>
