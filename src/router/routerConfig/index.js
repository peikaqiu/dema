// import { startComponent } from './start.component';
import { basicComponent } from './basic.component';
// import { formComponent } from './form.component';
// import { dataComponent } from './data.component';
import { feedbackComponent } from './Feedback.component';

export const menuList = [
  {
    name: '快速上手',
    list: []
  },
  {
    name: 'Basic 基础组件',
    list: basicComponent
  },
  {
    name: 'Form 表单组件',
    list: []
  },
  {
    name: 'Data 数据展示',
    list: []
  },
  {
    name: 'Navigation 导航',
    list: []
  },
  {
    name: 'Feedback 反馈组件',
    list: feedbackComponent
  },
  {
    name: 'Others 其他',
    list: []
  }
]

export const routerDocsComponent = menuList.flatMap(
  (item) => item.list
)