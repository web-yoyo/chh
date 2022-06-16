<template>
  <div class="tuwei-dialog"> </div>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue'
  import { Dialog } from 'vant'
  import { fetchTuweiLang } from '@/api/service'
  onMounted(() => {
    fetchTuweiLang().then((res) => {
      if (res.code === 1) {
        Dialog.alert({
          message: res.content,
          cancelButtonText: '关闭',
          confirmButtonText: '复制',
          showCancelButton: true,
        })
          .then(() => {
            copy(res.content)
          })
          .catch(() => {
            console.log('2')
          })
      }
    })
  })

  const copy = (data) => {
    let input = document.createElement('input')
    input.value = data
    input.id = 'creatDom'
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }
</script>
