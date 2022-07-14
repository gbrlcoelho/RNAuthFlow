import React from 'react'
import {ActivityIndicator} from 'react-native'
import {ButtonContainer, ButtonContent, buttonPrimary, ButtonTitle, styles} from './styles'
import {ButtonProps} from './types'
import Icon from 'react-native-vector-icons/AntDesign'

export const Button = ({children, onPress, isLoading = false, iconName, disabled, style}: ButtonProps) => {
  const buttonStyle = disabled ? buttonPrimary.disabled : buttonPrimary.enabled
  return (
    <ButtonContainer disabled={isLoading || disabled} onPress={onPress} style={style}>
      {isLoading ? (
        <ActivityIndicator color={buttonStyle.icon.color} />
      ) : (
        <ButtonContent>
          {iconName && <Icon style={styles.iconMargin} size={24} name={iconName} color={buttonStyle.icon.color} />}
          <ButtonTitle style={{color: buttonStyle.title.color}}>{children}</ButtonTitle>
        </ButtonContent>
      )}
    </ButtonContainer>
  )
}
