# 阿拉丁统计 SDK mpvue框架集成SDK DEMO

### 集成步骤
> 1.[下载SDK,暂未开放下载]()<br>
> 2.在src目录下新建`utils`文件夹，将sdk拷贝到utils文件下<br>
> 3.在src目录下，入口app.js中引入SDK
```javascript
import './utils/san' //引入SDK
import Taro, { Component } from '@tarojs/taro'
import {View} from '@tarojs/components'
import Index from 'pages/index/index'
import Test from 'pages/test/index'

import './app.less'
class _App extends Component { //class 类名需要修改不能是App
  config = {
    pages: [
      'pages/index/index',
      'pages/test/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    ext : {
      ald_config : {
        app_key : "",
        plugin : false,
        getLocation : false
      }
    }
  }

  componentDidMount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View>
        <Index />
        <Test/>
      </View>

    )
  }
}

Taro.render(<_App />, document.getElementById('app')) //render 的时候要是你class类名

```
> 4. 检查是否集成成功，在微信小程序开发者工具中，打开控制台找到network，查看是否有数据上报

