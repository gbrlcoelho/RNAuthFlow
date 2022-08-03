import React, {useState} from 'react'
import {Modal, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import {Button} from '../button'
import {CustomInput} from '../textInput'
import {ModalContainer, ModalFooter, ModalHeader, ModalText, ModalView} from './styles'

export const CustomModal = ({visible}: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  const checkInput = email === '' ? (password === '' ? true : false) : false
  return (
    <>
      <Modal transparent visible={true}>
        <ModalView>
          <ModalContainer style={style.boxShadow}>
            <ModalHeader>
              <ModalText bold fontSize={18}>
                SIGN UP
              </ModalText>
            </ModalHeader>
            <CustomInput keyboardType='email-address' autoComplete='email' placeholder='E-MAIL' value={email} onChangeText={setEmail} />
            <CustomInput secureTextEntry placeholder='PASSWORD' value={password} onChangeText={setPassword} />
            <ModalFooter>
              <Button disabled={checkInput} onPress={signUp}>
                SIGN UP
              </Button>
            </ModalFooter>
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
