import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Button} from '@tarojs/components'
import './index.less'
var app = getApp();
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };
  navigateTo(url){
   app.aldstat.sendEvent('跳转页面',{
      url : "pages/test/index"
    })
    // getApp().aldstat.sendEvent({
    //   url : "pages/test/index"
    // })
    Taro.navigateTo({
      url : url
    })
  }
  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () {}
  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button   onClick={this.navigateTo.bind(this,'/pages/test/index')}>123123</Button>
      </View>
    )
  }
}

