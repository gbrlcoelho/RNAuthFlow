import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {SignIn} from '../screens/SignIn'

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={SignIn} />
    </Stack.Navigator>
  )
}
