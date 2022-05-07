import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//
export const selectPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState: {
    selected: new Array<number>(),
  },
  reducers: {
    selectPokemon: (state, action: PayloadAction<Array<number>>) => {
      state.selected = action.payload
    },
  },
})

export const { selectPokemon } = selectPokemonSlice.actions
