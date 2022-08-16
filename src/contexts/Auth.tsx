import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {createContext, useEffect, useState} from 'react'
import {Alert} from 'react-native'
import {authService} from '../services/authService'
import {AuthContextData, AuthData, ChildrenProps} from './types'

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<ChildrenProps> = ({children}) => {
  const [authData, setAuth] = useState<AuthData>()

  async function loadFromStorage() {
    const auth = await AsyncStorage.getItem('@AuthData')
    if (auth) {
      setAuth(JSON.parse(auth) as AuthData)
    }
  }

  async function signIn(email: string, password: string): Promise<AuthData> {
    try {
      const auth = await authService.signIn(email, password)
      setAuth(auth)
      AsyncStorage.setItem('@AuthData', JSON.stringify(auth))
      return auth
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message, 'Try again!')
      }
      return {
        token: '',
        email: '',
        name: '',
      }
    }
  }

  async function signOut(): Promise<void> {
    setAuth(undefined)
    AsyncStorage.removeItem('@AuthData')
  }

  useEffect(() => {
    loadFromStorage()
  }, [])
  return <AuthContext.Provider value={{authData, signIn, signOut}}>{children}</AuthContext.Provider>
}
