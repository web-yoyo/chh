<template>
  <div class="nav-list">
    <div class="scroll">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            @click="openHot(item.url)"
          />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { fetchWbhot } from '/@/api/service'

  interface listType {
    title: string
    url: string
  }
  let list = ref<listType[]>([])
  const loading = ref(false)
  const finished = ref(false)
  const refreshing = ref(false)

  const onLoad = () => {
    if (refreshing.value) {
      list.value = []
      refreshing.value = false
    }
    fetchWbhot().then(({ data, success }) => {
      if (success) {
        list.value = data
      }
      loading.value = false
      if (list.value.length >= 50) {
        finished.value = true
      }
    })
  }

  const openHot = (url) => {
    window.location.href = url
  }

  const onRefresh = () => {
    // 清空列表数据
    finished.value = false
    refreshing.value = true
    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true
    onLoad()
  }
  defineExpose({ onRefresh })
</script>

<style scoped lang="scss">
  .nav-list {
    height: 500px;
    overflow: auto;
    .scroll {
      height: auto;
    }
    .van-cell {
      width: 375px;
      text-align: center;
    }
  }
</style>
