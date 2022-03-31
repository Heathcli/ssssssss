import React, { FC } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Svg from 'react-native-svg-uri';
import { arrow, cancel, finish, ing, location, login, pay, setting } from '../../image/nav';

const Message: FC = () => {
  return (
    <SafeAreaProvider>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: 1000, height: 1000, backgroundColor: '#56BDAD', marginTop: -800, borderRadius: 500 }}></View>
        </View>

        <View style={{ position: 'absolute', top: 30, left: '50%', marginLeft: -40, width: 80, height: 80, backgroundColor: '#ddd', borderRadius: 40 }}>
          <Svg width={80} height={80} svgXmlData={login}></Svg>
        </View>
        <Text style={{ textAlign: 'center', width: 80, position: 'absolute', top: 120, left: '50%', marginLeft: -40 }}>请点击登陆</Text>

        <View style={{ position: 'absolute', top: 150, left: '50%', padding: 10, marginLeft: -175, width: 350, height: 120, backgroundColor: '#fff', borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={{ fontSize: 16, color: '#373737' }}>所有订单</Text>
            <Svg width={20} height={20} svgXmlData={arrow}></Svg>
          </View>
          <View style={{ width: '100%', height: 0, borderWidth: 1, borderColor: '#ddd' }}></View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Svg width={36} height={36} svgXmlData={pay}></Svg>
              <Text>待支付</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Svg width={36} height={36} svgXmlData={ing}></Svg>
              <Text>进行中</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Svg width={36} height={36} svgXmlData={finish}></Svg>
              <Text>已完成</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Svg width={36} height={36} svgXmlData={cancel}></Svg>
              <Text>已取消</Text>
            </View>
          </View>
        </View>

        <View style={{ position: 'absolute', flexDirection: 'column', justifyContent: 'space-between', top: 280, left: '50%', padding: 20, marginLeft: -175, width: 350, height: 160, backgroundColor: '#fff', borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <Text style={{ fontSize: 16, color: '#373737' }}>最新消息</Text>
            <Svg width={20} height={20} svgXmlData={arrow}></Svg>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <Text style={{ fontSize: 16, color: '#373737' }}>我的订阅</Text>
            <Svg width={20} height={20} svgXmlData={arrow}></Svg>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <Text style={{ fontSize: 16, color: '#373737' }}>我的表单</Text>
            <Svg width={20} height={20} svgXmlData={arrow}></Svg>
          </View>
        </View>

        <View style={{ position: 'absolute', flexDirection: 'column', justifyContent: 'space-around', top: 450, left: '50%', padding: 10, marginLeft: -175, width: 350, height: 100, backgroundColor: '#fff', borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Svg width={20} height={20} svgXmlData={location}></Svg>
              <Text style={{ fontSize: 14, color: '#999',marginLeft:10 }}>成都市龙泉驿成都大学</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 14, color: '#999',marginRight:10 }}>100m</Text>
              <Svg width={20} height={20} svgXmlData={arrow}></Svg>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Svg width={20} height={20} svgXmlData={setting}></Svg>
              <Text style={{ fontSize: 14, color: '#999',marginLeft:10 }}>设置</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  )
}
export default Message