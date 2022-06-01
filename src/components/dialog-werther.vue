<template>
  <div class="dialog-werther">
    <van-popup v-model:show="show">
      <div class="content">
        <img :src="yijuData.pic" alt="" />
        <div class="zh">{{ yijuData.zh }}</div>
        <div class="en">{{ yijuData.en }}</div>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, reactive } from 'vue'
  import { fetchYiju } from '/@/api/service'

  const show = ref(true)

  onMounted(() => {
    getfetchYiju()
  })

  let yijuData = reactive({
    zh: '',
    en: '',
    pic: '',
  })
  const getfetchYiju = async () => {
    const { data } = await fetchYiju()
    const objData = data.data || {}
    yijuData.zh = objData.zh
    yijuData.en = objData.en
    yijuData.pic = objData.pic
  }
</script>

<style lang="scss">
  .dialog-werther {
    .content {
      width: 300px;
      padding: 10px;
      font-size: 16px;
      line-height: 40px;
      .en {
        line-height: 22px;
      }
      img {
        width: 100%;
      }
    }
  }
</style>
