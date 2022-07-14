import React, {useState} from 'react'
import {Text} from 'react-native'
import {Container} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import {CustomInput} from '../../components/textInput'
import {Button} from '../../components/button'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container>
      <Icon name='logo-android' color={'#000'} size={50} />
      <Text>LOGIN</Text>
      <CustomInput placeholder='E-MAIL' value={email} onChangeText={setEmail} />
      <CustomInput secureTextEntry placeholder='SENHA' value={password} onChangeText={setPassword} />
      <Button onPress={() => {}}>LOGIN</Button>
    </Container>
  )
}
