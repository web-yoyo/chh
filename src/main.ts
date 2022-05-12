import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 计算设置rem的基准值，即html的font-size
import 'amfe-flexible'
import { Button, Tabbar, TabbarItem } from 'vant'

const app = createApp(App)
app.use(router).use(Button).use(Tabbar).use(TabbarItem)

app.mount('#app')
