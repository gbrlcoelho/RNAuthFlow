import React, {useState} from 'react'
import {AndroidIcon, Container} from './styles'
import {CustomInput} from '../../components/textInput'
import {Button} from '../../components/button'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const appLog = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    clearTimeout
  }

  return (
    <Container>
      <AndroidIcon name='logo-android' color={'#000'} size={90} />
      <CustomInput placeholder='E-MAIL' value={email} onChangeText={setEmail} />
      <CustomInput secureTextEntry placeholder='SENHA' value={password} onChangeText={setPassword} />
      <Button isLoading={loading} onPress={appLog}>
        LOGIN
      </Button>
    </Container>
  )
}
