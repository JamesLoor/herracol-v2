import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginUser, RegisterUser } from "@types"
import { RootState } from "store"
import authService from "@services/auth"

interface authState {
  name: string
  lastName: string
  email: string
  profilePicture: string
  isLoading: boolean
  isModalLoginOpen: boolean
  isModalRegisterOpen: boolean
  message: string
  success: boolean
  error: boolean
  token: string | null
}

const initialState: authState = {
  name: "",
  lastName: "",
  email: "",
  profilePicture: "",
  isLoading: false,
  isModalLoginOpen: false,
  isModalRegisterOpen: false,
  message: "",
  success: false,
  error: false,
  token: null
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
      console.log(data)
      return data
    } catch (e: any) {
      const { status, data: { message } } = e.response
      return rejectWithValue({ status, message })
    }
  }
)

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await AuthService.logout()
// })

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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
      state.token = null
    }),
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = initialState.error
      state.success = true
      state.message = action.payload.message
      state.token = action.payload.authToken
    }),
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = true
      state.success = false
      state.message = action.payload.message
      state.token = null
    })
  }
})

// export const {} = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer