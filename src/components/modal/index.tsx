import React, {useState} from 'react'
import {Modal, StyleSheet} from 'react-native'
import {ModalContainer, ModalView} from './styles'

export const CustomModal = ({visible}: any) => {
  const [showModal, setShowModal] = useState(visible)

  return (
    <>
      <Modal transparent visible={true}>
        <ModalView>
          <ModalContainer style={style.boxShadow}></ModalContainer>
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
