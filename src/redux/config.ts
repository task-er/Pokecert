import { combineReducers, configureStore, Dispatch } from '@reduxjs/toolkit'
import { selectPokemonSlice } from './selectPokemonSlice'
import { findPokemonSlice } from './findPokemonSlice'
import { hasPokemonSlice } from './hasPokemonSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  selectPokemonSlice: selectPokemonSlice.reducer,
  hasPokemonSlice: hasPokemonSlice.reducer,
  findPokemonSlice: findPokemonSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>()

export default store
