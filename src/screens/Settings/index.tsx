import React from 'react'
import {Button} from '../../components/button'
import {SettingsText, SettingsView, styles} from './styles'

export const SettingsScreen = () => {
  return (
    <>
      <SettingsView top={50}>
        <SettingsText bold fontSize={17}>
          Settings
        </SettingsText>
      </SettingsView>
      <SettingsView flex={1} top={200}>
        <Button style={styles.buttonBackground} onPress={() => {}}>
          Exit App
        </Button>
      </SettingsView>
    </>
  )
}
