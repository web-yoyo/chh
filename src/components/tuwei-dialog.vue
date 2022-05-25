<template>
  <div class="tuwei-dialog"> </div>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue'
  import { Dialog } from 'vant'
  import { fetchTuweiLang } from '/@/api/service'
  onMounted(() => {
    fetchTuweiLang().then((res) => {
      let { data } = res
      if (data.code === 1) {
        Dialog.alert({
          message: data.content,
          cancelButtonText: '关闭',
          confirmButtonText: '复制',
          showCancelButton: true,
        })
          .then(() => {
            copy(data.content)
          })
          .catch(() => {
            console.log('2')
          })
      }
      console.log(res)
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
