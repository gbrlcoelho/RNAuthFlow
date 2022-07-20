import {StyleSheet} from 'react-native'
import styled from 'styled-components/native'
import {ButtonVariant} from './types'

export const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: '#000',
    },
    title: {
      color: '#fff',
    },
    icon: {
      color: '#fff',
    },
  },
  disabled: {
    button: {
      backgroundColor: '#b8b8b8',
    },
    title: {
      color: '#fff',
    },
    icon: {
      color: '#fff',
    },
  },
}

export const ButtonContainer = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${(props) => (props.disabled ? buttonPrimary.disabled.button.backgroundColor : buttonPrimary.enabled.button.backgroundColor)};
  align-content: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  height: 60px;
`
export const ButtonTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`
export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const styles = StyleSheet.create({
  iconMargin: {
    marginRight: 12,
  },
})
