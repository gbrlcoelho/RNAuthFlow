import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {useTheme} from 'styled-components/native'
import {SignIn} from '../screens/SignIn'

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
  const {colors} = useTheme()

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{headerTintColor: colors.onBackground, headerTitleAlign: 'center', headerStyle: {backgroundColor: colors.background}}} name='Sign In' component={SignIn} />
      </Stack.Navigator>
    </>
  )
}
