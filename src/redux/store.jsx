import { configureStore } from '@reduxjs/toolkit'
import navbar from './slices/NavbarSlice'

export const store = configureStore({
  reducer: {
    navbar,
  },
})
