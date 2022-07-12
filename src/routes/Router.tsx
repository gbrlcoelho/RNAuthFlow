import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {AppStack} from './AppStack'

export const Router = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}
