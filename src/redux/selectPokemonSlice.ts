import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const getDefaultState = (): Set<number> => {
  if (process.env.NODE_ENV !== 'production') {
    // 1번 빼고 전부 보유
    return new Set<number>(Array.from({ length: 158 }, (v, i) => i + 2))
  }
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
