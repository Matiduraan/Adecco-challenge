import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const sidebarSlice = createSlice({
  name: "sidebarOpen",
  initialState,
  reducers: {
    openSidebar: () => {
      return true;
    },
    closeSidebar: () => {
      return false;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
