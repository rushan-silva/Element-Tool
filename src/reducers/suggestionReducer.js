import { FETCH_SUGGESTION_DATA } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUGGESTION_DATA:
      return {
        ...state,
        items: [
          { name: "It too delious!!", count: 15 },
          { name: "Ice cream sandwich", count: 23 },
          { name: "Yep! Yep!! Yep!!!", count: 22 },
          { name: "Cupcake", count: 35 },
          { name: "Gingerbread", count: 46 }
        ]
      };
    default:
      return state;
  }
}
