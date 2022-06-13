<template>
  <van-form @failed="onFailed">
    <van-cell-group inset>
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="formData.userName"
        label="用户名"
        name="pattern"
        placeholder="正则校验"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="formData.passWord"
        label="密码"
        name="validator"
        placeholder="函数校验"
        :rules="[{ validator, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 返回错误提示 -->
      <van-field
        v-model="formData.type"
        label="类型"
        name="validatorMessage"
        placeholder="校验函数返回错误提示"
        :rules="[{ validator: validatorMessage }]"
      />
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field
        v-model="formData.num"
        label="数量"
        name="asyncValidator"
        placeholder="异步函数校验"
        :rules="asyncRules"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { Toast } from 'vant'
  import { fetchIrc } from '@/api/service'
  const formData = reactive({
    userName: '',
    passWord: '',
    type: '',
    num: '',
  })
  const pattern = /\d{6}/
  // 校验函数返回 true 表示校验通过，false 表示不通过
  const validator = (val: string) => /1\d{10}/.test(val)

  // 校验函数可以直接返回一段错误提示
  const validatorMessage = (val: any) => `${val} 不合法，请重新输入`

  // 校验函数可以返回 Promise，实现异步校验
  const asyncValidator = (val: string): object =>
    new Promise((resolve) => {
      Toast.loading('验证中...')

      setTimeout(() => {
        Toast.clear()
        resolve(val === '1234')
      }, 1000)
    })
  const asyncRules: object[] = [{ validator: asyncValidator, message: '请输入正确内容' }]

  const onFailed = (errorInfo: any) => {
    console.log('failed', errorInfo)
  }
  const getLyric = async () => {
    const { data } = await fetchIrc()
    console.log(data)
  }
  getLyric()
</script>
