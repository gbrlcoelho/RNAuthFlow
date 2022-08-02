import {Animated} from 'react-native'
import styled from 'styled-components/native'

export const ModalView = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled(Animated.View)`
  width: 80%;
  background-color: ${(props) => props.theme.colors.background};
  padding: 30px 20px 30px 20px;
  border-radius: 20px;
`
