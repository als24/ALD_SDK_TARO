import './utils/ald-stat'
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
    }
  }
  componentDidMount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
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
