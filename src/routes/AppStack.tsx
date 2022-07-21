import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {useTheme} from 'styled-components/native'
import {Home} from '../screens/Home'
import {SettingsScreen} from '../screens/Settings'

const Stack = createNativeStackNavigator()

export const AppStack = () => {
  const {colors} = useTheme()
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerTintColor: colors.onBackground, headerTitleAlign: 'center', headerStyle: {backgroundColor: colors.background}}} name='Home' component={Home} />
      <Stack.Screen options={{headerTintColor: colors.onBackground, headerTitleAlign: 'center', headerStyle: {backgroundColor: colors.background}}} name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}
