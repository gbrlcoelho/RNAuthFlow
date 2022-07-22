import React, {createContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ChildrenProps} from '../contexts/types'
import {ThemeProvider as ThemeProviderStyled} from 'styled-components/native'
import {darkTheme} from './darkTheme'
import {lightTheme} from './lightTheme'
import {StatusBar} from 'react-native'

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => {},
})

export const ThemeProvider: React.FC<ChildrenProps> = ({children}) => {
  const [theme, setTheme] = useState(ThemeType.light)

  async function loadTheme() {
    const savedTheme = await AsyncStorage.getItem('@theme')
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme))
    }
  }

  function toggleTheme() {
    let selectTheme
    if (theme === ThemeType.light) {
      selectTheme = ThemeType.dark
    } else {
      selectTheme = ThemeType.light
    }
    setTheme(selectTheme)
    AsyncStorage.setItem('@theme', selectTheme)
  }

  useEffect(() => {
    loadTheme()
  }, [])
  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ThemeProviderStyled theme={themes[theme]}>
          <StatusBar backgroundColor={theme === ThemeType.dark ? '#121212' : '#fff'} barStyle={theme === ThemeType.dark ? 'light-content' : 'dark-content'} />
          {children}
        </ThemeProviderStyled>
      </ThemeContext.Provider>
    </>
  )
}
