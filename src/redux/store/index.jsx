import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer);
}

export default store;