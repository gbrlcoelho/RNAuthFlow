import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
})
