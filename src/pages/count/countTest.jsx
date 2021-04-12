import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../redux/action/count";

export default function TestCount() {
  const state = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: 100, margin: "0 auto" }}>
      {state.count} Count <br />
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(decrease(10))}>---------</button>
      <button onClick={() => dispatch(increase(10))}>+++++++++</button>
    </div>
  );
}
