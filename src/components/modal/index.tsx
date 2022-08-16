import auth from '@react-native-firebase/auth'
import React, {useState} from 'react'
import {Modal, StyleSheet} from 'react-native'
import {Button} from '../button'
import {CustomInput} from '../textInput'
import {CloseIcon, ConfirmPasswordText, ModalContainer, ModalHeader, ModalText, ModalView, TouchableIcon} from './styles'
import {ModalProps} from './types'

export const CustomModal = ({visible, onClose}: ModalProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(`User: ${JSON.stringify(userCredential)}`)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const checkInput = email === '' || password === '' || password !== confirmPassword ? true : false

  return (
    <>
      <Modal transparent visible={visible} onRequestClose={onClose} animationType='slide' statusBarTranslucent={true}>
        <ModalView>
          <ModalContainer style={style.boxShadow}>
            <ModalHeader>
              <TouchableIcon onPress={onClose}>
                <CloseIcon name='close' size={25} />
              </TouchableIcon>
              <ModalText bold fontSize={18}>
                SIGN UP
              </ModalText>
            </ModalHeader>
            <CustomInput keyboardType='email-address' autoComplete='email' placeholder='E-MAIL' value={email} onChangeText={setEmail} />
            <CustomInput secureTextEntry placeholder='PASSWORD' value={password} onChangeText={setPassword} />
            <CustomInput secureTextEntry placeholder='CONFIRM PASSWORD' value={confirmPassword} onChangeText={setConfirmPassword} />
            {confirmPassword.length > 1 && confirmPassword !== password && <ConfirmPasswordText>The passwords don't match, try again.</ConfirmPasswordText>}
            <Button
              disabled={checkInput}
              onPress={() => {
                signUp()
                onClose()
              }}>
              SIGN UP
            </Button>
          </ModalContainer>
        </ModalView>
      </Modal>
    </>
  )
}

const style = StyleSheet.create({
  boxShadow: {
    elevation: 20,
  },
})
