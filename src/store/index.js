import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import homePageReducer from "./HomePage/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    homePage: homePageReducer,
  },
});
