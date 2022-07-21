import React, {useContext} from 'react'
import {ThemeContext, ThemeType} from '../../theme/Theme'
import {StyledSwitch} from './styles'

export const CustomSwitch = () => {
  const {toggleTheme, theme} = useContext(ThemeContext)

  const isDarkMode = theme === ThemeType.dark

  return <StyledSwitch value={isDarkMode} onValueChange={toggleTheme} />
}
