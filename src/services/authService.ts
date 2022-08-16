import auth from '@react-native-firebase/auth'
import {AuthData} from '../contexts/types'

async function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        resolve({
          token: '',
          email,
          name: '',
        }),
      )
      .catch((error) => reject(new Error(`Invalid credentials ${error}`)))
  })
}

export const authService = {signIn}
