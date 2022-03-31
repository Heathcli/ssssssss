import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Svg from 'react-native-svg-uri';
import { about, dingdan, kefu, youhui } from '../../image/nav';
import Detail from '../Detail';


const Home: FC = () => {
    const navigation = useNavigation()

    const handle = (params:string) => {
        navigation.navigate('Detail' as never,{name:params} as never)
    }



    return (
        <SafeAreaProvider>
            <ScrollView style={{ padding: 10 }}>
                {/* 首屏展示 */}
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 10 }}>
                    <Image
                        style={{ width: 300, height: 450, marginLeft: 15 }}
                        source={require('../.././image/libai.png')}
                    />
                    <Text style={{ fontSize: 25, color: '#373737', fontWeight: 'bold' }}>
                        立白天然皂液
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                        植物柔护 0添加
                    </Text>
                </View>
                {/* 反馈导航 */}
                <View style={{flex:1,height:100,marginTop:20,borderRadius:10,backgroundColor:'#fff',padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                    
                    
                    <View style={{alignItems:'center'}}>
                        <Svg width={60} height={60} svgXmlData={dingdan}></Svg>
                        <Text>订单</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Svg width={60} height={60} svgXmlData={youhui}></Svg>
                        <Text>优惠券</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Svg width={60} height={60} svgXmlData={kefu}></Svg>
                        <Text>我的客服</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Svg width={60} height={60} svgXmlData={about}></Svg>
                        <Text>关于我们</Text>
                    </View>
                </View>  
                {/* 洗衣系列推荐 */}
                <Text style={{flex:1,textAlign:'center',marginTop:10,fontSize:25,color:'#373737',backgroundColor:'#fff',borderRadius:10}}>洗衣系列</Text>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap',  justifyContent: 'space-between', marginBottom: 30, marginTop: 10 }}>
                    <TouchableOpacity onPress={()=>handle('taizi')} style={{ width: 170, height: 170, margin: 10,marginBottom:20, backgroundColor: '#fff', borderRadius: 10,padding:10 }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../.././image/taizi.jpg')}
                        >
                        </Image>
                        <Text style={{marginTop:15,textAlign:'center'}}>
                            汰渍
                        </Text>
                    </TouchableOpacity>
                    <View style={{ width: 170, height: 170, margin: 10,marginBottom:20, backgroundColor: '#fff', borderRadius: 10,padding:10 }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../.././image/lanyueliang.jpg')}
                        >
                        </Image>
                        <Text style={{marginTop:15,textAlign:'center'}}>
                            蓝月亮
                        </Text>
                    </View>
                    <View style={{ width: 170, height: 170, margin: 10,marginBottom:20, backgroundColor: '#fff', borderRadius: 10,padding:10 }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../.././image/mx.jpg')}
                        >
                        </Image>
                        <Text style={{marginTop:15,textAlign:'center'}}>
                            美国进口洗衣液
                        </Text>
                    </View>
                    <View style={{ width: 170, height: 170, margin: 10,marginBottom:20, backgroundColor: '#fff', borderRadius: 10 ,padding:10}}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../.././image/hx.jpg')}
                        >
                        </Image>
                        <Text style={{marginTop:15,textAlign:'center'}}>
                        韩国进口洗衣液
                        </Text>
                    </View>
                    <View style={{ width: 170, height: 170, margin: 10,marginBottom:20, backgroundColor: '#fff', borderRadius: 10,padding:10 }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../.././image/aomiao.jpg')}
                        >
                        </Image>
                        <Text style={{marginTop:15,textAlign:'center'}}>
                            奥妙
                        </Text>
                    </View>
                    <View style={{ width: 170, height: 170, margin: 10,marginBottom:20, backgroundColor: '#fff', borderRadius: 10,padding:10 }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../.././image/libaifen.jpg')}
                        >
                        </Image>
                        <Text style={{marginTop:15,textAlign:'center'}}>
                            洗衣粉
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}
export default Home