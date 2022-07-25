import React, {createContext} from 'react'
import {ChildrenProps} from '../contexts/types'
import {ThemeProvider as ThemeProviderStyled} from 'styled-components/native'
import {darkTheme} from './darkTheme'
import {lightTheme} from './lightTheme'
import {StatusBar, useColorScheme} from 'react-native'

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

export const ThemeContext = createContext({
  actualTheme: themes.light,
})

export const ThemeProvider: React.FC<ChildrenProps> = ({children}) => {
  const deviceTheme = useColorScheme()
  const actualTheme = themes[deviceTheme!] || 'light'

  return (
    <>
      <ThemeContext.Provider value={{actualTheme}}>
        <ThemeProviderStyled theme={actualTheme}>
          <StatusBar backgroundColor={deviceTheme === 'dark' ? '#121212' : '#fff'} barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'} />
          {children}
        </ThemeProviderStyled>
      </ThemeContext.Provider>
    </>
  )
}
