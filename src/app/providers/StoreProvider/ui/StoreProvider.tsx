import { type DeepPartial } from '@reduxjs/toolkit'
import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
  const {
    initialState,
    children
  } = props

  const store = createReduxStore(initialState as StateSchema)

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}

export default StoreProvider
