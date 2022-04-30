import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducers";

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
});

export default rootReducer;