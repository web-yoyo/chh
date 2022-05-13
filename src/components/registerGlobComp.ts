import { App } from 'vue'
import {
  Button,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  List,
  PullRefresh,
  Cell,
} from 'vant'

const component = [Button, Tabbar, TabbarItem, Tab, Tabs, Swipe, SwipeItem, List, PullRefresh, Cell]
export function registerGlobComp(app: App<Element>) {
  component.map((item) => {
    app.use(item)
  })
}
