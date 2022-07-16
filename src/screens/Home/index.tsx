import React from 'react'
import {Button} from '../../components/button'
import {HomeText, HomeView} from './styles'

export const Home = () => {
  return (
    <>
      <HomeView top={50}>
        <HomeText bold fontSize={17}>
          This page is only visible to authenticated users
        </HomeText>
      </HomeView>
      <HomeView flex={1}>
        <Button onPress={() => {}}>SETTINGS</Button>
      </HomeView>
    </>
  )
}
