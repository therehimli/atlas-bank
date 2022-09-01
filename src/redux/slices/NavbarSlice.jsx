import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toogle: false,
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setToogle(state, action) {
      state.toogle = action.payload
    },
  },
})

export const { setToogle } = navbarSlice.actions

export default navbarSlice.reducer
