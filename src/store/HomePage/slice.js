import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  spaces: [],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    spacesFetched: (state, action) => {
      const spaces = action.payload;
      state.spaces = [...spaces];
      state.loading = false;
    },
  },
});

export const { startLoading, spacesFetched } = homePageSlice.actions;
export default homePageSlice.reducer;
