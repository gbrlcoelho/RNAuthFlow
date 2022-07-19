import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Home} from '../screens/Home'
import {SettingsScreen} from '../screens/Settings'

const Stack = createNativeStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerTitleAlign: 'center'}} name='Home' component={Home} />
      <Stack.Screen options={{headerTitleAlign: 'center'}} name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}
