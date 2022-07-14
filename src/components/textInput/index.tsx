import React from 'react'
import {TextInputProps} from 'react-native'
import {CustomTextInput} from './styles'

export const CustomInput = (props: TextInputProps) => {
  return <CustomTextInput placeholderTextColor='#727272' {...props} accessibilityRole='none' />
}
