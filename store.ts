import { configureStore } from "@reduxjs/toolkit"
import uiReducer from "@features/ui/uiSlice"
import authReducer from "@features/auth/authSlice"

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store