import React, { FC, useRef } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Projects: FC = () => {

  return (
    <SafeAreaProvider>
      <ScrollView>
        {/* 选择污渍 */}
        <View style={{ flex: 1 }}>
          <Text style={{ width: '100%', height: 50, backgroundColor: '#fff', fontSize: 20, lineHeight: 50, textAlign: 'center', color: '#000' }}>污渍选择</Text>
          <View style={{ flex: 1, margin: 10,padding:10,backgroundColor:'#fff',borderRadius:10 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <TouchableOpacity activeOpacity={1} style={{ marginBottom:10 }} >
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/stains/redWine.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>红酒渍</Text>
            </TouchableOpacity>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/stains/oil.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>油渍</Text>
            </View>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/stains/blood.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>血渍</Text>
            </View>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/stains/mud.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>泥渍</Text>
            </View>
    
          </View>
        </View>
        {/* 选择材质 */}
        <View>
        <Text style={{ width: '100%', height: 50, backgroundColor: '#fff', fontSize: 20, lineHeight: 50, textAlign: 'center', color: '#000' }}>材质选择</Text>
          <View style={{ flex: 1,margin: 10,padding:10,backgroundColor:'#fff',borderRadius:10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/material/cotton.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>棉花</Text>
            </View>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/material/quickDrying.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>速干材质</Text>
            </View>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/material/terylene.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>涤纶</Text>
            </View>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/material/silk.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>真丝(动物毛)</Text>
            </View>
    
          </View>
        </View>
        {/* 选择重量 */}
        <View>
        <Text style={{ width: '100%', height: 50, backgroundColor: '#fff', fontSize: 20, lineHeight: 50, textAlign: 'center', color: '#000' }}>重量选择</Text>
          <View style={{ flex: 1, margin: 10,padding:10,backgroundColor:'#fff',borderRadius:10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/weight/oneToTwo.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>1-2件</Text>
            </View>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/weight/threeToFive.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>3-5件</Text>
            </View>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/weight/sixToEight.png')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>6-8件</Text>
            </View>
            <View style={{ marginBottom:10 }}>
              <Image
                style={{ width: 170, height: 150 }}
                source={require('../../image/weight/more.jpg')}
              />
              <Text style={{textAlign:'center',fontSize:18}}>更多件</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}
export default Projects