import React, { FC } from 'react'
import Svg from 'react-native-svg-uri';
import { homeLogo, homeLogoSelect, my, mySelect, projects, projectsSelect } from '../image/nav';
import Home from '../View/Home';
import Projects from '../View/Projects';
import Message from '../View/Message'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../View/Detail';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TanBottom:FC = () =>{
    return(
     
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'home') {
                            iconName = focused
                                ? homeLogoSelect
                                : homeLogo;
                        } else if (route.name === 'buy') {
                            iconName = focused ? projectsSelect : projects;
                        } else if (route.name === 'my') {
                            iconName = focused ? mySelect : my;
                        }

                        // You can return any component that you like here!
                        return <Svg width={30} height={30} svgXmlData={iconName} />;
                    },
                    tabBarActiveTintColor: '#57BEAD',
                    tabBarInactiveTintColor: '#373737',
                })}
            >
                <Tab.Screen name="home" component={Home} options={{title: '首页'}}/>
                <Tab.Screen name="buy" component={Projects} options={{title: '购买'}}/>
                <Tab.Screen name="my" component={Message} options={{title: '我的'}}/>
            </Tab.Navigator>

    
    )
}


export default function Switch() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='TanBottom'>
                <Stack.Screen name="TanBottom" component={TanBottom} options={{title: '首页', headerShown: false}}/>
                <Stack.Screen name="Detail" component={Detail} options={{title: '详情页'}}/>
            </Stack.Navigator >
        </NavigationContainer>
    )
}
