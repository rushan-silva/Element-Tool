import { FETCH_SUGGESTION_DATA } from "./types";

export const fetchSuggestionData = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_SUGGESTION_DATA,
        payload: data
      })
    );
};
