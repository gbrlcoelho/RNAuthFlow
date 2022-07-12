import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Home} from '../screens/Home'

const Stack = createNativeStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}
