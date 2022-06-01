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
  Form,
  Field,
  CellGroup,
  Dialog,
  Popup,
} from 'vant'

const component = [
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
  Form,
  Field,
  CellGroup,
  Dialog,
  Popup,
]
export function registerGlobComp(app: App<Element>) {
  component.map((item) => {
    app.use(item)
  })
}
