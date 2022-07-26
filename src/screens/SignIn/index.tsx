import React, {useState} from 'react'
import {AndroidIcon, Container} from './styles'
import {CustomInput} from '../../components/textInput'
import {Button} from '../../components/button'
import {useAuth} from '../../hooks/useAuth'
import {useTheme} from 'styled-components'
import auth from '@react-native-firebase/auth'
import {Link} from '../../components/link'

export const SignIn = () => {
  const {colors} = useTheme()
  const {signIn} = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(`User: ${JSON.stringify(userCredential)}`)
      })
      .then((error) => {
        console.log(error)
      })
  }

  const appLog = () => {
    setLoading(true)
    signIn(email, password)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <>
      <Container>
        <AndroidIcon name='logo-android' color={colors.primary} size={90} />
        <CustomInput keyboardType='email-address' autoComplete='email' placeholder='E-MAIL' value={email} onChangeText={setEmail} />
        <CustomInput secureTextEntry placeholder='PASSWORD' value={password} onChangeText={setPassword} />
        <Button isLoading={loading} onPress={appLog}>
          LOGIN
        </Button>
        <Link title='Sign Up' onPress={signUp} />
      </Container>
    </>
  )
}
