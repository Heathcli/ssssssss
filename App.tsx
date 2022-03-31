import Switch from "./src/Switch";
import React from 'react'
import { StatusBar, View } from "react-native";


export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Switch></Switch>
    </View>
  );
}