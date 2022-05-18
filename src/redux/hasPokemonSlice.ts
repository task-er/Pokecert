import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//
export const hasPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState: {
    myMedals: new Set<number>(),
  },
  reducers: {
    insertMedals: (state, action: PayloadAction<Set<number>>) => {
      state.myMedals = action.payload
    },
  },
})

export const { insertMedals } = hasPokemonSlice.actions
