import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    message: "",
    show: false,
    duration: 3000,
    type: "success",
  },
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message;
      state.show = true;
      state.duration = action.payload.duration || 3000;
      state.type = action.payload.type || "success";
    },
    hideToast: (state) => {
      state.show = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
