import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginUser, RegisterUser } from "@types"
import { RootState } from "store"
import authService from "@services/auth"

interface authState {
  name: string
  lastName: string
  email: string
  profilePicture: string
  isLogged: boolean
  isLoading: boolean
  message: string
  success: boolean
  error: boolean
}

const initialState: authState = {
  name: "",
  lastName: "",
  email: "",
  profilePicture: "",
  isLogged: false,
  isLoading: false,
  message: "",
  success: false,
  error: false,
}

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password, passwordConfirmation }: RegisterUser, { rejectWithValue }) => {
    try {
      const { data } = await authService.register({name, email, password, passwordConfirmation})
      return data
    } catch (e: any) {
      const { status, data: { message } } = e.response
      return rejectWithValue({ status, message })
    }
  }
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginUser, { rejectWithValue }) => {
    try {
      const { data } = await authService.login({email, password})
      return data
    } catch (e: any) {
      const { status, data: { message } } = e.response
      return rejectWithValue({ status, message })
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    verifyAuth: (state) => {
      state.isLogged = Boolean(window.sessionStorage.getItem('token'))
    },

    logoutUser: (state) => {
      state.isLoading = true
      state.error = false
      state.success = false
      state.message = ""
      state.isLogged = false

      window.sessionStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
      state.error = false
      state.success = false
      state.message = ""
    }),
    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = false
      state.success = true
      state.message = action.payload.message
    }),
    builder.addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = true
      state.success = false
      state.message = action.payload.message
    }),

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
      state.error = false
      state.success = false
      state.message = ""
      state.isLogged = false
    }),
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = initialState.error
      state.success = true
      state.message = action.payload.message
      state.isLogged = true

      window.sessionStorage.setItem('token', action.payload.token)
    }),
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = true
      state.success = false
      state.message = action.payload.message
      state.isLogged = false

      window.sessionStorage.removeItem('token')
    })
  }
})

export const { logoutUser, verifyAuth } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer