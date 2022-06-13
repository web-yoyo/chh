import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 计算设置rem的基准值，即html的font-size
import 'amfe-flexible'
import { registerGlobComp } from '@/components/registerGlobComp'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
registerGlobComp(app) //注册组件
app.use(router).use(pinia)

app.mount('#app')
