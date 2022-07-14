import {TouchableOpacityProps} from 'react-native'

export interface ButtonProps {
  children: string
  onPress: () => void
  isLoading?: boolean
  iconName?: string
  disabled?: boolean
  style?: TouchableOpacityProps['style']
}

export interface ButtonStyle {
  button: {
    backgroundColor: string
    bordeWidth?: number
    borderColor?: string
  }
  title: {
    color: string
  }
  icon: {
    color: string
  }
}

export interface ButtonVariant {
  enabled: ButtonStyle
  disabled: ButtonStyle
}
