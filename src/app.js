import './utils/san'
import Taro, { Component } from '@tarojs/taro'
import {View} from '@tarojs/components'
import Index from 'pages/index/index'
import Test from 'pages/test/index'


import './app.less'

class _App extends Component {

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

Taro.render(<_App />, document.getElementById('app'))
