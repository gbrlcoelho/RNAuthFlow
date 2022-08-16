import React, {useState} from 'react'
import {useTheme} from 'styled-components'
import {Button} from '../../components/button'
import {Link} from '../../components/link/index'
import {CustomModal} from '../../components/modal'
import {CustomInput} from '../../components/textInput'
import {useAuth} from '../../hooks/useAuth'
import {AndroidIcon, Container} from './styles'

export const SignIn = () => {
  const {colors} = useTheme()
  const {signIn} = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const appLog = () => {
    setLoading(true)
    signIn(email, password)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
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
        <Link
          title='Sign Up'
          onPress={() => {
            setOpenModal(true)
          }}
        />
        <CustomModal visible={openModal} onClose={() => setOpenModal(!openModal)} />
      </Container>
    </>
  )
}
