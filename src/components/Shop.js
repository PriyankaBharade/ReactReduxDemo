import React from "react";
import { useDispatch } from "react-redux";
//import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function Shop() {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="btn btn-primary mx-2" onClick={() => (dispatch(actionCreators.withdrawMoney(100)))}>-</button>
      Add this item to cart
      <button className="btn btn-primary mx-2" onClick={() => (dispatch(actionCreators.depositMoney(100)))}>+</button>
    </div>
  );
}
