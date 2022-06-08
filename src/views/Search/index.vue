<template>
  <div class="search-home">
    <div class="title"> 网易云热门评论</div>
    <commentList :list="lyricList" @on-reset="onReset" @to-load="toLoad" />
  </div>
  <TestForm v-if="false" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import TestForm from '@/components/form/test-form.vue'
  import commentList from '@/components/comment-list.vue'
  import { fetchIrc } from '/@/api/service'

  const lyricList = ref<string[]>([])
  const getLyric = async (index) => {
    const data = await fetchIrc()
    lyricList.value.splice(index, 1, data)
  }

  lyricList.value = new Array(16).fill(null)
  const getLyricData = (initNum) => {
    for (let i = initNum; i < initNum + 8; i++) {
      getLyric(i)
    }
  }
  let initNum = 0
  getLyricData(initNum)

  const onReset = () => {
    lyricList.value = new Array(16).fill(null)
    getLyricData((initNum = 0))
  }
  const toLoad = () => {
    getLyricData((initNum = initNum + 8))
  }
</script>

<style lang="scss">
  .search-home {
    .title {
      font-size: 28px;
      text-align: center;
      line-height: 108px;
    }
  }
</style>
