import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { type StateSchema } from './StateSchema'

export function createReduxStore (initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: _IS_DEV_,
    preloadedState: initialState
  })
}
