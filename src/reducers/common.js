import { FETCH_DATA } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      const data = Object.assign({}, action.data);
      return {
        ...state,
        data
      };
    }
    default:
      return state;
  }
}
