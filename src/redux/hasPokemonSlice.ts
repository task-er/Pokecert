import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//
export const hasPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState: {
    myMedals: new Array<number>(),
  },
  reducers: {
    insertMedals: (state, action: PayloadAction<Array<number>>) => {
      state.myMedals = action.payload
    },
  },
})

export const { insertMedals } = hasPokemonSlice.actions
