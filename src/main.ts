import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Tabbar, TabbarItem } from 'vant'

const app = createApp(App)
app.use(router).use(Button).use(Tabbar).use(TabbarItem)

app.mount('#app')
