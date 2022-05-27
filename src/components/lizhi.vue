<template>
  <div class="lizhi-list">
    <van-cell-group>
      <van-cell
        v-for="item in playList"
        :key="item"
        @click="onPlay(item)"
        :title="item"
        value="李健"
      />
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const playList = ref(['人民不需要自由', '和你在一起', '下雨'])
  const emit = defineEmits<{ (e: 'getItem', name: string): void }>()
  emit('getItem', '人民不需要自由')
  const onPlay = (item: string) => {
    emit('getItem', item)
  }
</script>
<style lang="scss">
  .lizhi-list {
    margin-top: 20px;
    padding-bottom: 100px;
    .van-cell-group {
      background: #ffe4d9;
    }
    .van-cell {
      background: #ffe4d9;
    }
  }
</style>
