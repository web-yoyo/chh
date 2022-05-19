<template>
  <div class="refresh-card">
    <div class="icon" :class="{ active: rolling }" @click="clickRefresh"></div>
    <van-cell value="点击图标刷新" />
  </div>
</template>

<!--
  add by xx
  刷新按钮组件
-->
<script setup lang="ts">
  import { ref } from 'vue'
  import { refreshStore } from '/@/stores/index'
  const refresher = refreshStore()
  const rolling = ref(false)

  // 点击刷新按钮
  const clickRefresh = () => {
    if (makeRound()) {
      // 仅仅为了演示使用pinia，才使用此种方法去触发父组件刷新的
      refresher.$patch({ refreshNum: refresher.refreshNum + 1 })
    }
  }

  // 控制动画
  const makeRound = (): boolean => {
    if (!rolling.value) {
      rolling.value = true
      setTimeout(() => (rolling.value = false), 3000)
      return true
    }
    return false
  }
</script>

<style scoped lang="scss">
  .refresh-card {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 75px;
    .van-cell {
      width: 120px;
      background: #fff5f1;
    }
    .icon {
      width: 50px;
      height: 50px;
      background: url('@/assets/img/refresh.png') no-repeat;
      background-size: contain;
    }
    .active {
      animation: refresh-rotate 3s ease-out;
    }
  }
  @keyframes refresh-rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(720deg);
    }
  }
</style>
