import { combineReducers } from "redux";
import user from "./user";
import count from "./count";
let reducers = combineReducers({
  user: user,
  count: count,
});
export default reducers;
