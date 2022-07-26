import React from 'react'
import {TouchableOpacity} from 'react-native'
import {LinkText} from './styles'
import {LinkProps} from './types'

export const Link = ({title, onPress}: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinkText>{title}</LinkText>
    </TouchableOpacity>
  )
}
