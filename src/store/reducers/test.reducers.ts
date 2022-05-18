import { createSlice } from '@reduxjs/toolkit'

export type testState = {
  count: number
}

const test = createSlice({
  name: 'test',
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, action) {
      state.count++
    }
  }
})

export const { add } = test.actions
export default test.reducer