import styled from 'styled-components/native'
import {BoldTextProps} from '../../screens/Home/types'

export const ModalView = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.View`
  width: 80%;
  height: auto;
  background-color: ${(props) => props.theme.colors.background};
  padding: 30px 20px 30px 20px;
  border-radius: 20px;
`
export const ModalHeader = styled.View`
  align-items: center;
  padding-bottom: 30px;
`
export const ModalText = styled.Text<BoldTextProps>`
  font-weight: ${(props) => (props.bold ? 'bold' : 'none')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 10)}px;
  color: ${(props) => props.theme.colors.textColor};
`
export const ModalFooter = styled.View`
  align-items: center;
  justify-content: space-between;
`
