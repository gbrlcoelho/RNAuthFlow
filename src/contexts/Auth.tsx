import React, {useState} from 'react'
import {createContext} from 'react'
import {Alert} from 'react-native'
import {authService} from '../services/authService'
import {AuthContextData, AuthData, ChildrenProps} from './types'

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<ChildrenProps> = ({children}) => {
  const [authData, setAuth] = useState<AuthData>()

  async function signIn(email: string, password: string): Promise<AuthData> {
    try {
      const auth = await authService.signIn(email, password)
      setAuth(auth)
      return auth
    } catch (error) {
      Alert.alert(error.message, 'Try again!')
    }
  }

  async function signOut(): Promise<void> {
    setAuth(undefined)
  }
  return <AuthContext.Provider value={{authData, signIn, signOut}}>{children}</AuthContext.Provider>
}
