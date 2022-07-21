import React from 'react'
import {StatusBar} from 'react-native'
import {AuthProvider} from './src/contexts/Auth'
import {Router} from './src/routes/Router'
import {ThemeProvider} from './src/theme/Theme'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ThemeProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
