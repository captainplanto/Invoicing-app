import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../store";

export interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const loginModalSlice = createSlice({
  name: "loginmodal",
  initialState,
  reducers: {
    toggleLoginModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleLoginModal } = loginModalSlice.actions;
export const loginModal = (state: AppState) => state.loginModal;
export default loginModalSlice.reducer;
