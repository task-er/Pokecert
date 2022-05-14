import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//
export const findPokemonSlice = createSlice({
  name: 'findPokemon',
  initialState: {
    keyword: '',
  },
  reducers: {
    findPokemon: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload
    },
  },
})

export const { findPokemon } = findPokemonSlice.actions
export default findPokemonSlice.reducer
