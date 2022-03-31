import React, { FC, useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Svg from 'react-native-svg-uri';
import { phone } from '../../image/nav';
// let path = require('path')

interface Iprops {
    route: any,
    navigation: any
}

const Detail: FC<Iprops> = ({ route, navigation }) => {

    const [name, setName] = useState<string>('../../image/taizi.jpg')

    useEffect(
        () => {
            setName('../../image/' + route.params.name + (route.params.name === 'libai' ? '.png' : '.jpg'))
            // setName(path.join('../../image',route.params.name))
            console.log(route.params.name + (route.params.name === 'libai' ? '.png' : '.jpg'))
            // var fullPath =  path.join('../../image',route.params.name); 
        }
        , [])

    return (
        <SafeAreaProvider>
            <ScrollView style={{flex:1,padding:5}}>
                <View style={{ width: '100%', height: 320, backgroundColor: '#fff',padding:15,marginBottom:20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            style={{ width: '50%', height: 200 }}
                            source={require('../../image/taizi.jpg')}
                        />
                    </View>
                    <View>
                        <Text style={{fontSize:20,color:'#373737',marginBottom:5}}>汰渍洗衣液</Text>
                        <Text style={{marginBottom:5}}>著名洗涤品牌</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:20,color:'#57BEAD',marginRight:5}}>￥5.00</Text>
                            <Text style={{marginRight:8,textDecorationLine:'line-through'}}>￥20.00</Text>
                            <Text>已预约:0  剩余:500</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row',backgroundColor:'#fff',alignItems:"center",padding:10}}>
                        <View style={{height:24,width:6,backgroundColor:'#57BEAD',borderRadius:3}}></View>
                        <Text style={{marginLeft:10,fontSize:16,color:'#373737'}}>服务详情</Text>
                    </View>
                    <View style={{flexDirection:'column',backgroundColor:'#fff',justifyContent:"center",padding:10}}>
                        <Text style={{fontSize:18,color:'#555',fontWeight:'700',marginBottom:8}}>全效清洁，一瓶搞定。</Text>
                        <Text style={{marginBottom:8}}>1.升级配方专门针对日常常见的污渍设计，衣服洁净更全面，做到全效洁净，清洁，轻松，清新。</Text>
                        <Text style={{marginBottom:8}}>2.全效除菌系列，在做到全效去渍的基础之上，更能高效去除衣物上5种典型细菌，带来里里外外的洁净。与市面上专业的衣物消毒剂相比，该系列产品含有的舒肤佳成分配方性质温和，其亲肤性非常适用于儿童衣物的日常洗涤除菌，连手洗也适用。</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                <View style={{width:'100%',height:60,flexDirection:'row',backgroundColor:'#fff',borderTopColor:'#ddd',elevation:5,alignItems:'center',paddingRight:20,paddingLeft:20,justifyContent:'space-around'}}>
                    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <Svg width={25} height={25} svgXmlData={phone}></Svg>
                        <Text style={{color:'#373737',fontSize:12}}>电话</Text>
                    </View>
                    <View style={{width:'80%',height:'80%',justifyContent:'center',alignItems:'center',backgroundColor:'#57BEAD',borderRadius:50}}>
                        <Text style={{color:'#fff'}}>立即预约</Text>
                    </View>
                </View>
            </View>
        </SafeAreaProvider>
    )
}


export default Detail