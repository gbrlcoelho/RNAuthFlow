import React from 'react'
import {StatusBar} from 'react-native'
import {AuthProvider} from './src/contexts/Auth'
import {Router} from './src/routes/Router'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  )
}

export default App
