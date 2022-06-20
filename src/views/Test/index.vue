<template>
  <van-cell-group inset>
    <van-field v-model="inputVal" type="textarea" label="文本" placeholder="请输入用户名" />
  </van-cell-group>
  <div
    class="text"
    contentEditable="true"
    @input="onTextInput"
    style="border: 1px solid #dddddd; width: 360px; min-height: 20px; _height: 20px; outline: 0px"
    >{{ str }}</div
  >
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">111</div>
      <div class="swiper-slide">222</div>
      <div class="swiper-slide">333</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, nextTick, onMounted } from 'vue'
  let inputVal = ref('')
  let str = ref('aabbcjdhah哈哈是的我adjjjwonskfmfcks')

  watch(inputVal, (val) => {
    let dom = document.querySelector('.text') as HTMLImageElement
    str.value = dom.innerText
    if (!val) {
      return
    }
    renderText(val)
  })

  const onTextInput = (e) => {
    let textareaContent = e.target.innerText.trim()
    str.value = textareaContent
    renderText(inputVal.value)
    // 将光标重新定位到内容最后
    nextTick(() => {
      keepCursorEnd(e.target)
    })
  }
  // 将光标重新定位到内容最后
  const keepCursorEnd = (obj) => {
    // ie11 10 9 firefox safari
    if (window.getSelection) {
      // 解决firefox不获取焦点无法定位问题
      obj.focus()

      // 创建range
      let range = window.getSelection() as any

      // range 选择obj下所有子内容
      range.selectAllChildren(obj)

      // 光标移至最后
      range.collapseToEnd()
    }
    // else if (document.selection) {
    //   //ie10 9 8 7 6 5
    //   // 创建选择对象
    //   let range = document.selection.createRange()

    //   //range定位到obj
    //   range.moveToElementText(obj)

    //   //光标移至最后
    //   range.collapse(false)
    //   range.select()
    // }
  }

  const renderText = (val = '') => {
    let dom = document.querySelector('.text') as HTMLImageElement
    val && (str.value = str.value.replaceAll(val, `<span class="tag">${val}</span>`))
    nextTick(() => {
      dom.innerHTML = str.value
    })
  }

  onMounted(() => {
    const mySwiperDom = document.querySelector('.mySwiper') as HTMLImageElement
    const slideDom = document.querySelector('.swiper-slide') as HTMLImageElement
    mySwiperDom.addEventListener('ontouchstart', ontouchstart)
    slideDom.addEventListener('ontouchmove', ontouchmove)
    function ontouchstart() {
      console.log('ontouchstart--111')
    }
    function ontouchmove() {
      console.log('ontouchmove--111')
    }
  })
</script>
<style lang="scss">
  .text {
    .tag {
      color: aqua;
    }
  }
</style>
