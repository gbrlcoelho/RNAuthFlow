import React, {createContext, useState} from 'react'
import {ChildrenProps} from '../contexts/types'
import {ThemeProvider as ThemeProviderStyled} from 'styled-components/native'
import {darkTheme} from './darkTheme'
import {lightTheme} from './lightTheme'

enum ThemeType {
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

  function toggleTheme() {
    if (theme === ThemeType.light) {
      setTheme(ThemeType.dark)
    } else {
      setTheme(ThemeType.light)
    }
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProviderStyled theme={themes[theme]}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}
