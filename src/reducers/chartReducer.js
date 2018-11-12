import { FETCH_EMOTION_DATA, NEW_DATA } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMOTION_DATA:
      return {
        ...state,
        items: [
          { name: "Sadness", count: 2 },
          { name: "Fear", count: 0 },
          { name: "Joy", count: 4 },
          { name: "Guilt", count: 1 },
          { name: "Anger", count: 0 },
          { name: "Shame", count: 3 },
          { name: "Disgust", count: 1 }
        ]
      };
    case NEW_DATA:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
