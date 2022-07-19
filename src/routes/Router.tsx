import {NavigationContainer} from '@react-navigation/native'
import React, {useContext} from 'react'
import {AuthContext} from '../contexts/Auth'
import {AppStack} from './AppStack'
import {AuthStack} from './AuthStack'

export const Router = () => {
  const authContext = useContext(AuthContext)
  return <NavigationContainer>{authContext.authData ? <AppStack /> : <AuthStack />}</NavigationContainer>
}
