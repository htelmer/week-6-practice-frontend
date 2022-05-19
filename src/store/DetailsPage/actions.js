import {
  spacesFetched,
  startLoading,
  detailsFetched,
  loadingDone,
} from "../HomePage/slice";
import axios from "axios";
const URL = `http://localhost:4000`;

export const fetchSpaceById = (id) => async (dispatch, getState) => {
  try {
    console.log("id in the thunk", id);
    dispatch(startLoading());
    const response = await axios.get(`${URL}/space/${id}`);
    console.log("detail response", response);
    dispatch(detailsFetched(response.data));
    dispatch(loadingDone());
  } catch (e) {
    console.log(e.message);
  }
};
