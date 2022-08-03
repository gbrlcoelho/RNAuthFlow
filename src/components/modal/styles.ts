import styled from 'styled-components/native'
import {BoldTextProps} from '../../screens/Home/types'
import Icon from 'react-native-vector-icons/AntDesign'

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
  padding: 50px 20px 30px 20px;
  border-radius: 20px;
`
export const ModalHeader = styled.View`
  align-items: center;
  bottom: 30px;
`

export const TouchableIcon = styled.TouchableOpacity`
  align-self: flex-end;
`

export const CloseIcon = styled(Icon)`
  color: ${(props) => props.theme.colors.textColor};
`

export const ModalText = styled.Text<BoldTextProps>`
  font-weight: ${(props) => (props.bold ? 'bold' : 'none')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 10)}px;
  color: ${(props) => props.theme.colors.textColor};
`
export const ConfirmPasswordText = styled.Text`
  color: #d9190b;
  bottom: 10px;
`
