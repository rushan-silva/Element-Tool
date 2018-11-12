import { FETCH_SUCCESS_DATA } from "./types";

export const fetchSuccessData = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_SUCCESS_DATA,
        payload: data
      })
    );
};
