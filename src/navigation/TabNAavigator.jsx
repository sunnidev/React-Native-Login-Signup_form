import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Notification from '../screens/Tabs/Notification'
import About from '../screens/Tabs/About'
import Setting from '../screens/Tabs/Setting'
import HomeScreen from '../screens/HomeScreen'

const TabNAavigator = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Notification' component={Notification} />
            <Tab.Screen name='About' component={About} />
            <Tab.Screen name='Setting' component={Setting} />
        </Tab.Navigator>
    )
}

export default TabNAavigator