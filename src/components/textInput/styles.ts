import styled from 'styled-components/native'

export const CustomTextInput = styled.TextInput`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.primary};
  padding: 0px 8px 0px 8px;
  color: ${(props) => props.theme.colors.onBackground};
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
`
