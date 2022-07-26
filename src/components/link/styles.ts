import styled from 'styled-components/native'

export const LinkText = styled.Text`
  top: 18px;
  font-weight: bold;
  font-size: 18px;
  text-decoration: underline;
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
`
