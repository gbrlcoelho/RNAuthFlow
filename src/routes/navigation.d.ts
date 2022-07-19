import {AppParamList} from './types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}
