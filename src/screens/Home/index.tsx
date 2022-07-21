import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Button} from '../../components/button'
import {CustomSwitch} from '../../components/switch'
import {HomeText, HomeView} from './styles'

export const Home = () => {
  const navigation = useNavigation()

  return (
    <>
      <HomeView flex={0.2}>
        <CustomSwitch />
        <HomeText bold fontSize={17}>
          This page is only visible to authenticated users
        </HomeText>
      </HomeView>
      <HomeView flex={1}>
        <Button onPress={() => navigation.navigate('Settings')}>SETTINGS</Button>
      </HomeView>
    </>
  )
}
