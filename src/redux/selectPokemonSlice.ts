import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//
export const selectPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState: {
    selectedPokemons: new Set<number>(),
  },
  reducers: {
    selectPokemon: (state, action: PayloadAction<Set<number>>) => {
      state.selectedPokemons = action.payload
    },
  },
})

export const { selectPokemon } = selectPokemonSlice.actions
