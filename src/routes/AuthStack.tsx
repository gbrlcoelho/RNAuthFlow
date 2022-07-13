import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {SignIn} from '../screens/SignIn'

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerTitleAlign: 'center'}} name='Sign In' component={SignIn} />
    </Stack.Navigator>
  )
}
