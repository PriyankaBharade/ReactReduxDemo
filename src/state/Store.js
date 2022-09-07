import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';

export const Store  =  createStore(reducers,{}, applyMiddleware(thunk))