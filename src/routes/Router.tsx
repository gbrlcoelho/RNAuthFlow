import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {AppStack} from './AppStack'
import {AuthStack} from './AuthStack'

export const Router = () => {
  const auth = false
  return <NavigationContainer>{auth ? <AppStack /> : <AuthStack />}</NavigationContainer>
}
