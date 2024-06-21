import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    userBarOpen: false,
    sideBarOpen: false,
    topBarOpen: true,
  },
  reducers: {
    openSideBar: (state) => {
      state.sideBarOpen = !state.sideBarOpen;
    },
    openTopBar: (state) => {
      state.topBarOpen = !state.topBarOpen;
    },
    openUserBar: (state) => {
      state.userBarOpen = !state.userBarOpen;
    },
  },
});

export const { openSideBar, openTopBar, openUserBar } = pageSlice.actions;

export default pageSlice.reducer;
