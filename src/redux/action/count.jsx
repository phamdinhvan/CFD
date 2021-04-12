import { DECREASE, INCREASE } from "../type";

export function decrease(step) {
  return {
    type: DECREASE,
    payload: step,
  };
}
export function increase(step) {
  return {
    type: INCREASE,
    payload: step,
  };
}
