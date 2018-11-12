import { FETCH_EMOTION_DATA, NEW_DATA } from "./types";

export const fetchEmotionData = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_EMOTION_DATA,
        payload: data
      })
    );
};
