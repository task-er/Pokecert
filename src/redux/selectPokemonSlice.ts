import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const getDefaultState = (): Set<number> => {
  return new Set<number>()
}

export const selectPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState: {
    selectedPokemons: getDefaultState(),
  },
  reducers: {
    selectPokemon: (state, action: PayloadAction<Set<number>>) => {
      state.selectedPokemons = action.payload
    },
  },
})

export const { selectPokemon } = selectPokemonSlice.actions
