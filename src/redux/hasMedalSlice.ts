import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//
export const hasMedalSlice = createSlice({
  name: 'hasMedal',
  initialState: {
    myMedals: new Set<number>(),
  },
  reducers: {
    insertMedals: (state, action: PayloadAction<Set<number>>) => {
      state.myMedals = action.payload
    },
  },
})

export const { insertMedals } = hasMedalSlice.actions
