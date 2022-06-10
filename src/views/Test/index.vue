<template>
  <van-cell-group inset>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  </van-cell-group>
  <p class="text">{{ str }}</p>
</template>

<script setup lang="ts">
  import { ref, watch, onMounted, nextTick } from 'vue'
  let value = ref('')
  let oldStr = 'aaaahffghyhy哈哈回复健康急急急地方快递费浏览经济酷酷酷'
  let str = ref('aaaahffghyhy哈哈回复健康急急急地方快递费浏览经济酷酷酷')
  onMounted(() => {
    // const dom = document.querySelector('.text') as HTMLImageElement
    // dom.innerHTML = str.value
  })
  watch(value, (val) => {
    if (!val) {
      str.value = oldStr
      return
    }
    str.value = str.value.replaceAll(val, `<span style="color:red">${val}</span>`)
    console.log(str.value)
    const dom = document.querySelector('.text') as HTMLImageElement
    nextTick(() => {
      dom.innerHTML = str.value
    })
  })
</script>
<style lang="scss">
  .text {
    // color: red;
  }
</style>
