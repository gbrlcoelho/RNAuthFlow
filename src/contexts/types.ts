import React from 'react'

export interface AuthData {
  token: string
  email: string
  name: string
}

export interface AuthContextData {
  authData?: AuthData
  signIn: (email: string, password: string) => Promise<AuthData>
  signOut: () => Promise<void>
}

export interface ChildrenProps {
  children: React.ReactNode
}
