import { combineReducers, configureStore, Dispatch } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { selectPokemonSlice } from './selectPokemonSlice'
import { findPokemonSlice } from './findPokemonSlice'
import { hasMedalSlice } from './hasMedalSlice'
import { checkIsCompleteSlice } from './checkIsComplete'

const logger = createLogger()

const rootReducer = combineReducers({
  selectPokemonSlice: selectPokemonSlice.reducer,
  hasMedalSlice: hasMedalSlice.reducer,
  findPokemonSlice: findPokemonSlice.reducer,
  checkIsCompleteSlice: checkIsCompleteSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>()

export default store
