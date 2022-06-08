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
  NavBar,
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
  NavBar,
]
export function registerGlobComp(app: App<Element>) {
  component.map((item) => {
    app.use(item)
  })
}
