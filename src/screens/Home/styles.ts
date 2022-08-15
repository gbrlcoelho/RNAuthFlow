import styled from 'styled-components/native'
import {BoldTextProps, HomeViewProps} from './types'

export const HomeView = styled.View<HomeViewProps>`
  flex: ${(props) => (props.flex ? props.flex : 'none')};
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  top: ${(props) => (props.top ? props.top : 0)};
  padding: 0px 16px 0px 16px;
`
export const HomeText = styled.Text<BoldTextProps>`
  font-weight: ${(props) => (props.bold ? 'bold' : 'none')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 10)}px;
  color: ${(props) => props.theme.colors.onBackground};
`
