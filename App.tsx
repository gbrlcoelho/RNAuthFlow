import React from 'react'
import {StatusBar} from 'react-native'
import {Router} from './src/routes/Router'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Router />
    </>
  )
}

export default App
