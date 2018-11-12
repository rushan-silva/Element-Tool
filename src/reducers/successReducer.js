import { FETCH_SUCCESS_DATA } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS_DATA:
      return {
        ...state,
        item: { postDetail: "rrr", emotionDetail: "sss" }
      };
    default:
      return state;
  }
}
