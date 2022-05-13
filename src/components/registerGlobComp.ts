import { App } from 'vue'
import { Button, Tabbar, TabbarItem, Tab, Tabs } from 'vant'
export function registerGlobComp(app: App<Element>) {
  app.use(Button).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs)
}
