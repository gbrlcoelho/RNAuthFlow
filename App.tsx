import React from 'react'
import {AuthProvider} from './src/contexts/Auth'
import {Router} from './src/routes/Router'
import {ThemeProvider} from './src/theme/Theme'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
