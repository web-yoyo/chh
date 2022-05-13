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
            v-for="(item, index) in props.active === 0 ? list : list_B"
            :key="index"
            :title="item"
          />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const props = defineProps({
    active: {
      type: Number,
      default: 0,
    },
  })
  const list = ref<number[]>([])
  const list_B = ref<string[]>([])
  const loading = ref(false)
  const finished = ref(false)
  const refreshing = ref(false)

  const onLoad = () => {
    setTimeout(() => {
      if (refreshing.value) {
        list.value = []
        list_B.value = []
        refreshing.value = false
      }

      if (props.active === 0) {
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1)
        }
      } else {
        for (let i = 0; i < 10; i++) {
          list_B.value.push(list_B.value.length + 1 + 'B')
        }
      }

      loading.value = false

      if (list.value.length >= 40 || list_B.value.length >= 40) {
        finished.value = true
      }
    }, 500)
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
