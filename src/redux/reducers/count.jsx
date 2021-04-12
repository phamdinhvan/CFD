import { DECREASE, INCREASE } from "../type";

let initialState = {
  count: 0,
};

export default function count(state = initialState, action) {
  switch (action.type) {
    case DECREASE:
      return {
        ...state,
        count: state.count + (action.payload || 1),
      };
    case INCREASE:
      return {
        ...state,
        count: state.count - (action.payload || 1),
      };
    default:
      return state;
  }
}
