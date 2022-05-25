<template>
  <div class="comment-list">
    <div class="main-list">
      <div class="scroll">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell v-for="(item, index) in props.list" :key="index">
              <template #default>
                <div class="item-title">{{ item }} </div>
                <!-- <van-button type="primary">复制</van-button> -->
              </template>
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const props: any = defineProps({
    list: {
      type: Array,
      default: () => [],
    },
  })
  const refreshing = ref(false)
  const loading = ref(false)
  const finished = ref(false)
  // const list = ref<number[]>([])

  const emit = defineEmits<{
    (e: 'onReset'): void
    (e: 'toLoad'): void
  }>()
  const onLoad = () => {
    console.log('onLoad')
    if (refreshing.value) {
      emit('onReset')
      setTimeout(() => {
        refreshing.value = false
      }, 400)
    }
    emit('toLoad')
    setTimeout(() => {
      loading.value = false
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
    console.log('onRefresh')
  }
</script>

<style lang="scss">
  .comment-list {
    .main-list {
      height: 630px;
      overflow: auto;
      .scroll {
        height: auto;
      }
    }
    .van-cell__value {
      position: relative;
    }
    .van-button {
      position: absolute;
      right: 20px;
      bottom: 0px;
      padding: 5px;
      height: 20px;
    }
  }
</style>
