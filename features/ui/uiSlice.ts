import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

interface uiState {
  isSidebarOpen: boolean
  isModalOpen: boolean
  modalView: ModalView
}

export enum ModalView {
  loginView = 'loginView',
  registerView = 'registerView',
  forgotPasswordView = 'forgotPasswordView'
}

const initialState: uiState = {
  isSidebarOpen: false,
  isModalOpen: false,
  modalView: ModalView.loginView
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },

    openModal: (state) => {
      state.isSidebarOpen = false
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },

    setModalView: (state, actions: PayloadAction<ModalView>) => {
      state.modalView = actions.payload
    }
  }
})

export const {
  openSidebar,
  closeSidebar,
  toggleSidebar,
  openModal,
  closeModal,
  setModalView
} = uiSlice.actions
export const selectUi = ((state: RootState) => state.ui)
export default uiSlice.reducer