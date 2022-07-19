import React, {useState} from 'react'
import {Button} from '../../components/button'
import {useAuth} from '../../hooks/useAuth'
import {SettingsText, SettingsView} from './styles'

export const SettingsScreen = () => {
  const [loading, setLoading] = useState(false)
  const {signOut} = useAuth()

  const logout = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      signOut()
    }, 3000)
  }

  return (
    <>
      <SettingsView top={50}>
        <SettingsText bold fontSize={17}>
          Settings
        </SettingsText>
      </SettingsView>
      <SettingsView flex={1}>
        <Button isLoading={loading} onPress={logout}>
          EXIT APP
        </Button>
      </SettingsView>
    </>
  )
}
