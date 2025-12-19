import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import SplashScreen from '../screens/splash/SplashScreen'
import SignUp from '../screens/signup/SignUpScreen'
import Login from '../screens/login/LoginScreen'
import TabNAvigator from './TabNAavigator'

const StackNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name='MainTabs' component={TabNAvigator} /> */}
      <Stack.Screen name='Splash' component={SplashScreen} />
      <Stack.Screen name='Signup' component={SignUp} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Homes' component={HomeScreen} />
      <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation