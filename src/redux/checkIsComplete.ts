import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//
export const checkIsCompleteSlice = createSlice({
  name: 'checkIsComplete',
  initialState: {
    isComplete: false,
  },
  reducers: {
    setIsComplete: (state, action: PayloadAction<boolean>) => {
      state.isComplete = action.payload
    },
  },
})

export const { setIsComplete } = checkIsCompleteSlice.actions
export default checkIsCompleteSlice.reducer
