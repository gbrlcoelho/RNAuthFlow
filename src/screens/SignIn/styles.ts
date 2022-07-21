import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 16px 16px 32px 16px;
`
export const AndroidIcon = styled(Icon)`
  bottom: 50px;
`
