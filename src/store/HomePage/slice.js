import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  spaces: [],
  details: null,
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    loadingDone: (state) => {
      state.loading = false;
    },
    spacesFetched: (state, action) => {
      const spaces = action.payload;
      state.spaces = [...spaces];
      state.loading = false;
    },
    detailsFetched: (state, action) => {
      console.log("detailss");
      state.details = action.payload;
    },
  },
});

export const { startLoading, spacesFetched, detailsFetched, loadingDone } =
  homePageSlice.actions;
export default homePageSlice.reducer;
