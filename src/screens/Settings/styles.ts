import {StyleSheet} from 'react-native'
import styled from 'styled-components/native'
import {HomeViewProps, BoldTextProps} from '../Home/types'

export const SettingsView = styled.View<HomeViewProps>`
  flex: ${(props) => (props.flex ? props.flex : 'none')};
  justify-content: center;
  align-items: center;
  top: ${(props) => (props.top ? props.top : 0)};
  padding: 0px 16px 0px 16px;
`
export const SettingsText = styled.Text<BoldTextProps>`
  font-weight: ${(props) => (props.bold ? 'bold' : 'none')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 10)};
  color: ${(props) => (props.color ? props.color : '#000')};
`
export const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: '#ff5666',
  },
})
