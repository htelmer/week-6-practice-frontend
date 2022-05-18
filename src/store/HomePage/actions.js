import { spacesFetched, startLoading } from "./slice";
import axios from "axios";
const URL = `http://localhost:4000`;

export async function fetchSpaces(dispatch, getState) {
  try {
    dispatch(startLoading());
    console.log("startLoading", startLoading);
    const response = await axios.get(`${URL}/space`);
    console.log("response", response);
    const spaces = response.data;
    console.log("spaces?", spaces);
    dispatch(spacesFetched(spaces));
  } catch (e) {
    console.log(e.message);
  }
}
